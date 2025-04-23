"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import { ReactNode } from "react";

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isLoggedIn, isLoading } = useAuth();
  console.log(isLoading, isLoggedIn)
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Wait until auth state is loaded
    if (!isLoading && !isLoggedIn) {
      // Redirect to login with return URL
      router.push(`/login?returnUrl=${encodeURIComponent(pathname)}`);
    }
  }, [isLoggedIn, isLoading, router, pathname]);

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
