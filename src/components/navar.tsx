"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, Search, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Hideon from "@/provider/Hideon";
import { Input } from "./ui/input";

// interface NavbarProps {
//   currentRoute?: string;
// }

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathName = usePathname();
  const profileRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 10);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    // Call it once immediately on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <div className="container relative mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="mr-2">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="4" fill="transparent" />
                <path
                  d="M10 10H22V14H10V10ZM10 16H22V20H10V16ZM10 22H22V26H10V22ZM10 28H22V32H10V28ZM24 10H30V14H24V10ZM24 16H30V32H24V16Z"
                  fill="#09B850"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold leading-none text-[#09B850]">
                BUSINESS
              </span>
              <span
                className={cn(
                  "text-sm font-medium leading-none",
                  isScrolled ? "text-gray-800" : "text-white",
                )}
              >
                CONSULTATION
              </span>
            </div>
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
                  href="/blog"
                  className={cn(
                    "text-xl font-medium transition-colors",
                    pathName === "/blog"
                      ? "text-[#09B850]"
                      : "text-white hover:text-[#09B850]",
                  )}
                  onClick={() => setIsSheetOpen(false)}
                >
                  BLOGS
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
              href="/blog"
              className={cn(
                "transition-colors",
                pathName === "/blog"
                  ? "text-[#09B850]"
                  : isScrolled
                    ? "text-gray-800 hover:text-[#09B850]"
                    : "text-white hover:text-[#09B850]",
              )}
            >
              BLOGS
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
          <div className="relative flex items-center">
            <Search className="absolute w-5 text-white left-2" />
            <Input
              type="text"
              placeholder="Search"
              className="rounded-xl px-8 placeholder:text-white"
            />
          </div>
          {/* User Profile */}
          <div className="relative" ref={profileRef}>
            <div
              className="flex cursor-pointer items-center"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <div className="mr-2 hidden text-right sm:block">
                <div
                  className={cn(
                    "text-sm",
                    isScrolled ? "text-gray-800" : "text-white",
                  )}
                >
                  Jaman
                </div>
                <div
                  className={cn(
                    "text-xs",
                    isScrolled ? "text-gray-600" : "text-white/70",
                  )}
                >
                  User
                </div>
              </div>
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-[#09B850]">
                <User className="h-6 w-6 text-white" />
              </div>
            </div>

            {/* Profile Dropdown */}
            {isProfileOpen && (
              <div className="absolute right-0 z-50 mt-2 w-48 rounded-md bg-white py-1 shadow-lg">
                <Link
                  href="/account"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsProfileOpen(false)}
                >
                  Your Profile
                </Link>
                <Link
                  href="/account/settings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsProfileOpen(false)}
                >
                  Settings
                </Link>
                <div className="my-1 border-t border-gray-100"></div>
                <button
                  className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100"
                  onClick={() => {
                    // Add logout logic here
                    setIsProfileOpen(false);
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
    </Hideon>
  );
}
