"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Hideon from "@/provider/Hideon";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
// import { Input } from "./ui/input";
import { useAuth } from "@/hooks/useAuth";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathName = usePathname();
  const profileRef = useRef<HTMLDivElement>(null);
  // const [searchResult, setSearchResult] = useState<string | null>(null);
  const { user, logout, checkSession,isSubscriptionExpiredGracePeriod } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    checkSession(); // <-- Forcefully re-check session
    // Call it once immediately on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [checkSession]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Hideon
      routes={[
        "/sign-up",
        "/login",
        "/reset-password",
        "/subscription",
        "/forget-password",
      ]}
    >
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/90 shadow-sm backdrop-blur-sm"
            : "bg-transparent",
        )}
      >
        <div className="container relative mx-auto flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={"/asset/logo.png"}
              width={100}
              height={100}
              alt="logo"
            />
            <p className="text-[14px] font-medium text-[#09B850]">
              {" "}
              Going 2
              <span
                className={cn(
                  isScrolled ? "ml-1 text-gray-800" : "ml-1 text-white",
                )}
              >
                Zero
              </span>
            </p>
          </Link>

          {/* Mobile Menu Toggle with Sheet */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <button className="z-50 md:hidden" aria-label="Toggle menu">
                <Menu
                  className={cn(
                    "h-6 w-6",
                    isScrolled ? "text-gray-800" : "text-white",
                  )}
                />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[80%] border-l border-gray-800 bg-black/95 sm:w-[350px]"
            >
              <nav className="flex h-full flex-col items-center justify-center space-y-6">
                <Link
                  href="/"
                  className={cn(
                    "text-xl font-medium transition-colors",
                    pathName === "/"
                      ? "text-[#09B850]"
                      : "text-white hover:text-[#09B850]",
                  )}
                  onClick={() => setIsSheetOpen(false)}
                >
                  HOME
                </Link>
                <Link
                  href="/service"
                  className={cn(
                    "text-xl font-medium transition-colors",
                    pathName === "/service"
                      ? "text-[#09B850]"
                      : "text-white hover:text-[#09B850]",
                  )}
                  onClick={() => setIsSheetOpen(false)}
                >
                  SERVICE
                </Link>
                <Link
                  href="/about"
                  className={cn(
                    "text-xl font-medium transition-colors",
                    pathName === "/about"
                      ? "text-[#09B850]"
                      : "text-white hover:text-[#09B850]",
                  )}
                  onClick={() => setIsSheetOpen(false)}
                >
                  ABOUT US
                </Link>

                <Link
                  href="/contact"
                  className={cn(
                    "text-xl font-medium transition-colors",
                    pathName === "/contact"
                      ? "text-[#09B850]"
                      : "text-white hover:text-[#09B850]",
                  )}
                  onClick={() => setIsSheetOpen(false)}
                >
                  CONTACT US
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            <Link
              href="/"
              className={cn(
                "transition-colors",
                pathName === "/"
                  ? "text-[#09B850]" // Active link style
                  : isScrolled
                    ? "text-gray-800 hover:text-[#09B850]"
                    : "text-white hover:text-[#09B850]",
              )}
            >
              HOME
            </Link>

            <Link
              href="/service"
              className={cn(
                "transition-colors",
                pathName === "/service"
                  ? "text-[#09B850]"
                  : isScrolled
                    ? "text-gray-800 hover:text-[#09B850]"
                    : "text-white hover:text-[#09B850]",
              )}
            >
              SERVICE
            </Link>

            <Link
              href="/about"
              className={cn(
                "transition-colors",
                pathName === "/about"
                  ? "text-[#09B850]"
                  : isScrolled
                    ? "text-gray-800 hover:text-[#09B850]"
                    : "text-white hover:text-[#09B850]",
              )}
            >
              ABOUT US
            </Link>

            <Link
              href="/contact"
              className={cn(
                "transition-colors",
                pathName === "/contact"
                  ? "text-[#09B850]"
                  : isScrolled
                    ? "text-gray-800 hover:text-[#09B850]"
                    : "text-white hover:text-[#09B850]",
              )}
            >
              CONTACT US
            </Link>
          </nav>
          {/* search bar  */}

          {/* User Profile */}
          {user ? (
            <div className="relative" ref={profileRef}>
              <div
                className="flex cursor-pointer items-center"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-[#09B850]">
                  {/* <User className="h-6 w-6 text-white" /> */}
                  <Avatar>
                    <AvatarImage src={user?.profileImage} />
                    <AvatarFallback>PR</AvatarFallback>
                  </Avatar>
                </div>
                <div className="ml-2 hidden sm:block">
                  <div
                    className={cn(
                      "text-sm",
                      isScrolled ? "text-gray-800" : "text-white",
                    )}
                  >
                    {user?.fullName}
                  </div>
                  <div
                    className={cn(
                      "text-xs",
                      isScrolled ? "text-gray-600" : "text-white/70",
                    )}
                  >
                    {user?.email}
                  </div>
                </div>
              </div>
              {/* Profile Dropdown */}
              {isProfileOpen && (
                <div className="absolute right-0 z-50 mt-2 w-48 rounded-md bg-white py-1 shadow-lg">
                  {!(user.role === "Admin" || user.role === "SuperAdmin") &&
                    isSubscriptionExpiredGracePeriod && (
                      <Link
                        href="/account"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setIsProfileOpen(false)}
                      >
                        My account
                      </Link>
                    )}
                  {!(user.role === "Admin" || user.role === "SuperAdmin") &&
                    isSubscriptionExpiredGracePeriod && (
                      <div className="my-1 border-t border-gray-100"></div>
                    )}
                  <button
                    className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100"
                    onClick={() => {
                      // Add logout logic here
                      setIsProfileOpen(false);
                      logout();
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/login"
              className={`rounded-lg bg-primary px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90`}
            >
              Login
            </Link>
          )}
        </div>
      </header>
    </Hideon>
  );
}
