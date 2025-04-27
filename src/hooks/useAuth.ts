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
  // Add other properties as needed
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

  // Get auth info in a consistent way across the hook
  const getAuthInfo = useCallback(() => {
    if (typeof window === "undefined")
      return { token: null, userId: null, refreshToken: null };

    // Check localStorage first, then sessionStorage as fallback
    const token =
      localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
    const userId = localStorage.getItem("userId");
    const refreshToken = localStorage.getItem("refreshToken");

    return { token, userId, refreshToken };
  }, []);

  // Store auth info in a consistent way
  const storeAuthInfo = useCallback(
    (
      accessToken: string,
      userId: string,
      refreshToken: string,
      rememberMe: boolean,
      userData?: User,
    ) => {
      // If rememberMe, store in localStorage, else sessionStorage
      if (rememberMe) {
        localStorage.setItem("authToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
      } else {
        sessionStorage.setItem("authToken", accessToken);
        sessionStorage.setItem("refreshToken", refreshToken);
      }

      // Always store userId in localStorage for consistent access
      localStorage.setItem("userId", userId);

      // Set cookie for middleware if needed
      document.cookie = `authToken=${accessToken}; path=/; max-age=${60 * 60 * 24 * 7}`; // 7 days

      // Immediately update the state with user data if provided
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

  // Refresh token function
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
        // Store in the same storage that had the previous token
        const rememberMe = !!localStorage.getItem("authToken");
        storeAuthInfo(
          data.data.accessToken,
          userId,
          data.data.refreshToken || refreshToken,
          rememberMe,
          data.data.user, // Pass user data if available in refresh response
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
          // Try to refresh the token and retry
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
            // Immediately update the user state when profile is fetched successfully
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
        // fetchUserProfile now handles setting the user state
        setIsLoggedIn(true);
        return true;
      } else {
        // Try token refresh as a last resort
        const refreshed = await refreshAuthToken();
        if (refreshed) {
          const { token: newToken } = getAuthInfo();
          if (newToken) {
            const refreshedUserData = await fetchUserProfile(userId, newToken);
            if (refreshedUserData) {
              // fetchUserProfile now handles setting the user state
              setIsLoggedIn(true);
              return true;
            }
          }
        }

        // If we get here, authentication failed
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

  // Initialize on mount
  useEffect(() => {
    // Don't run during SSR
    if (typeof window !== "undefined") {
      checkSession();
    }
  }, [checkSession]);

  const login = async (
    credentials: LoginCredentials,
    rememberMe = false,
  ): Promise<boolean> => {
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

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      if (data.status && data.data.accessToken) {
        // Store user ID from the user object
        const userId = data.data.user._id;

        // First update the state to ensure immediate access to user data
        setUser(data.data.user);
        setIsLoggedIn(true);

        // Then store the auth info
        storeAuthInfo(
          data.data.accessToken,
          userId,
          data.data.refreshToken,
          rememberMe,
          data.data.user, // Pass user data to storeAuthInfo
        );

        // router.push("/");
        return true;
      }
      return false;
    } catch (error) {
      console.error("Login error:", error);
      return false;
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

  // Update user data (for profile updates)
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
  };
}


