"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

interface User {
  _id: string;
  email: string;
  fullName?: string;
  phoneNumber?: string;
  role: string;
  address?: string;
  about?: string;
  profileImage: string;
  hasActiveSubscription: boolean;
  subscriptionExpireDate: string | null;
  isEmissionSubmitted: boolean;
  isEntryComplete: boolean;
}

interface LoginResponse {
  status: boolean;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
    role: string;
    user: User;
  };
}

interface LoginCredentials {
  email: string;
  password: string;
}

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loginPending, setLoginPending] = useState<boolean>(false);
  const router = useRouter();

  const getAuthInfo = useCallback(() => {
    if (typeof window === "undefined")
      return { token: null, userId: null, refreshToken: null };

    const token =
      localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
    const userId = localStorage.getItem("userId");
    const refreshToken = localStorage.getItem("refreshToken");

    return { token, userId, refreshToken };
  }, []);

  const storeAuthInfo = useCallback(
    (
      accessToken: string,
      userId: string,
      refreshToken: string,
      rememberMe: boolean,
      userData?: User,
    ) => {
      if (rememberMe) {
        localStorage.setItem("authToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
      } else {
        sessionStorage.setItem("authToken", accessToken);
        sessionStorage.setItem("refreshToken", refreshToken);
      }

      localStorage.setItem("userId", userId);
      document.cookie = `authToken=${accessToken}; path=/; max-age=${60 * 60 * 24 * 7}`;

      if (userData) {
        setUser(userData);
        setIsLoggedIn(true);
      }
    },
    [setUser, setIsLoggedIn],
  );

  const clearAuthInfo = useCallback(() => {
    if (typeof window === "undefined") return;

    localStorage.removeItem("authToken");
    sessionStorage.removeItem("authToken");
    localStorage.removeItem("userId");
    localStorage.removeItem("refreshToken");
    sessionStorage.removeItem("refreshToken");
    document.cookie = "authToken=; path=/; max-age=0";
  }, []);

  const refreshAuthToken = useCallback(async (): Promise<boolean> => {
    const { refreshToken, userId } = getAuthInfo();

    if (!refreshToken || !userId) return false;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/refresh`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ refreshToken, userId }),
        },
      );

      if (!response.ok) return false;

      const data = await response.json();

      if (data.status && data.data.accessToken) {
        const rememberMe = !!localStorage.getItem("authToken");
        storeAuthInfo(
          data.data.accessToken,
          userId,
          data.data.refreshToken || refreshToken,
          rememberMe,
          data.data.user,
        );
        return true;
      }

      return false;
    } catch (error) {
      console.error("Token refresh failed:", error);
      return false;
    }
  }, [getAuthInfo, storeAuthInfo]);

  const fetchUserProfile = useCallback(
    async (userId: string, token: string): Promise<User | null> => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/profile/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (response.status === 401) {
          const refreshed = await refreshAuthToken();
          if (refreshed) {
            const { token: newToken } = getAuthInfo();
            if (newToken) {
              return fetchUserProfile(userId, newToken);
            }
          }
          return null;
        }

        if (response.ok) {
          const responseData = await response.json();
          if (responseData.status) {
            setUser(responseData.data);
            return responseData.data;
          }
          return null;
        }

        return null;
      } catch (error) {
        console.error("Failed to fetch user profile:", error);
        return null;
      }
    },
    [refreshAuthToken, getAuthInfo],
  );

  const checkSession = useCallback(async () => {
    setIsLoading(true);

    const { token, userId } = getAuthInfo();

    if (!token || !userId) {
      setIsLoggedIn(false);
      setUser(null);
      setIsLoading(false);
      return false;
    }

    try {
      const userData = await fetchUserProfile(userId, token);

      if (userData) {
        setIsLoggedIn(true);
        return true;
      } else {
        const refreshed = await refreshAuthToken();
        if (refreshed) {
          const { token: newToken } = getAuthInfo();
          if (newToken) {
            const refreshedUserData = await fetchUserProfile(userId, newToken);
            if (refreshedUserData) {
              setIsLoggedIn(true);
              return true;
            }
          }
        }

        clearAuthInfo();
        setIsLoggedIn(false);
        setUser(null);
        return false;
      }
    } catch (error) {
      console.error("Session check failed:", error);
      clearAuthInfo();
      setIsLoggedIn(false);
      setUser(null);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, [getAuthInfo, fetchUserProfile, refreshAuthToken, clearAuthInfo]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      checkSession();
    }
  }, [checkSession]);

const login = async (
  credentials: LoginCredentials,
  rememberMe = false,
): Promise<LoginResponse | null> => {
  try {
    setLoginPending(true);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/user/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      },
    );

    const data: LoginResponse = await response.json();

    // console.log(data)

    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }

    if (data.status && data.data.accessToken) {
      const userId = data.data.user._id;

      setUser(data.data.user);
      setIsLoggedIn(true);

      storeAuthInfo(
        data.data.accessToken,
        userId,
        data.data.refreshToken,
        rememberMe,
        data.data.user,
      );

      return data; // Return the entire response
    }
    return data;
  } catch (error) {
    console.error("Login error:", error);
    return null;
  } finally {
    setLoginPending(false);
  }
};


  const logout = () => {
    clearAuthInfo();
    setIsLoggedIn(false);
    setUser(null);
    router.push("/");
  };

  const updateUserData = async () => {
    if (isLoggedIn) {
      const { token, userId } = getAuthInfo();
      if (token && userId) {
        const userData = await fetchUserProfile(userId, token);
        return !!userData;
      }
    }
    return false;
  };

  const isSubscriptionExpiredGracePeriod = !!(
    user?.hasActiveSubscription &&
    user?.isEntryComplete &&
    user?.subscriptionExpireDate &&
    new Date(user.subscriptionExpireDate) > new Date()
  );

  return {
    isLoggedIn,
    user,
    isLoading,
    loginPending,
    login,
    logout,
    checkSession,
    updateUserData,
    refreshAuthToken,
    isSubscriptionExpiredGracePeriod, // ✅ Added here
  };
}
