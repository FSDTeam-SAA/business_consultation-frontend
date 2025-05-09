"use client";

import { useAuth } from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [token, setToken] = useState<string | null>(null);
  const {user, isLoggedIn, isLoading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();



    useEffect(() => {
    const storedToken = sessionStorage.getItem("authToken");
    setToken(storedToken);
  }, []);
  const { data: getUser } = useQuery({
    queryKey: ["user", token],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/profile/${user?._id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (!res.ok) {
        throw new Error("Failed to fetch blogs");
      }
      return res.json();
    },
    enabled: !!token,
  });

  const singleUser = getUser?.data || [];

  const isSubscriptionExpiredGracePeriod =
    singleUser?.hasActiveSubscription &&
    singleUser?.subscriptionExpireDate &&
    new Date(singleUser.subscriptionExpireDate) > new Date();


  useEffect(() => {
    // Wait until auth state is loaded
    if (!isLoading && !isLoggedIn) {
      // Redirect to login with return URL
      router.push(`/login`);
    }else if(!isSubscriptionExpiredGracePeriod){
      router.push("/")
    }
  }, [isLoggedIn, isLoading, router, pathname,isSubscriptionExpiredGracePeriod]);

  // Show loading state or nothing while checking auth
  if (isLoading || !isLoggedIn) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-[#78E76E]"></div>
      </div>
    );
  }

  // If logged in, show the protected content
  return <>{children}</>;
}
