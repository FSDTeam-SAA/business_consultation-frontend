"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isSubscriptionExpiredGracePeriod, isLoading, isLoggedIn } = useAuth();

  const router = useRouter();
  const pathname = usePathname();
 
  useEffect(() => {
    if (!isLoading) {
      if (!isLoggedIn) {
        router.push(`/login?returnUrl=${pathname}`);
      } else if (!isSubscriptionExpiredGracePeriod) {
        router.push("/"); // Change this to your desired fallback
      }
    }
  }, [
    isLoggedIn,
    isLoading,
    pathname,
    router,
    isSubscriptionExpiredGracePeriod,
  ]);

  if (isLoading || !isLoggedIn) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-[#78E76E]"></div>
      </div>
    );
  }

  return <>{children}</>;
}
