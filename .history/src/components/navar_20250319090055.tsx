"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface NavbarProps {
  currentRoute?: string;
}

export default function Navbar({ currentRoute = "home" }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  // Add a new state for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathName = usePathname()

  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
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
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 shadow-sm backdrop-blur-sm"
          : "bg-transparent",
      )}
    >
      {/* Update the container div to include mobile menu toggle and mobile menu */}
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

        {/* Mobile Menu Toggle */}
        <button
          className="z-50 text-white md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={isScrolled ? "text-gray-800" : "text-white"}
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={isScrolled ? "text-gray-800" : "text-white"}
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-8 md:flex">
          <Link
            href="/"
            className={cn(
              "transition-colors",
              currentRoute === "home"
                ? "text-[#09B850]"
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
              currentRoute === "service"
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
              currentRoute === "about"
                ? "text-[#09B850]"
                : isScrolled
                  ? "text-gray-800 hover:text-[#09B850]"
                  : "text-white hover:text-[#09B850]",
            )}
          >
            ABOUT US
          </Link>
          <Link
            href="/blogs"
            className={cn(
              "transition-colors",
              currentRoute === "blogs"
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
              currentRoute === "contact"
                ? "text-[#09B850]"
                : isScrolled
                  ? "text-gray-800 hover:text-[#09B850]"
                  : "text-white hover:text-[#09B850]",
            )}
          >
            CONTACT US
          </Link>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-black/90 md:hidden">
            <div className="flex h-full flex-col items-center justify-center">
              <nav className="flex flex-col items-center space-y-6">
                <Link
                  href="/"
                  className={cn(
                    "text-xl font-medium transition-colors",
                    currentRoute === "home"
                      ? "text-[#09B850]"
                      : "text-white hover:text-[#09B850]",
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  HOME
                </Link>
                <Link
                  href="/service"
                  className={cn(
                    "text-xl font-medium transition-colors",
                    currentRoute === "service"
                      ? "text-[#09B850]"
                      : "text-white hover:text-[#09B850]",
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  SERVICE
                </Link>
                <Link
                  href="/about"
                  className={cn(
                    "text-xl font-medium transition-colors",
                    currentRoute === "about"
                      ? "text-[#09B850]"
                      : "text-white hover:text-[#09B850]",
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ABOUT US
                </Link>
                <Link
                  href="/blogs"
                  className={cn(
                    "text-xl font-medium transition-colors",
                    currentRoute === "blogs"
                      ? "text-[#09B850]"
                      : "text-white hover:text-[#09B850]",
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  BLOGS
                </Link>
                <Link
                  href="/contact"
                  className={cn(
                    "text-xl font-medium transition-colors",
                    currentRoute === "contact"
                      ? "text-[#09B850]"
                      : "text-white hover:text-[#09B850]",
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  CONTACT US
                </Link>
              </nav>
            </div>
          </div>
        )}

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
  );
}
