"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, User } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from "@/../public/asset/logo.svg";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full">
            <Image src={logo} alt="BC" />
          </div>
          <span className="font-bold text-[#033618]">BUSINESS CONSULTIVE</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-8 md:flex">
          <Link
            href="/services"
            className="text-[#033618] transition-colors hover:text-[#09B850]"
          >
            SERVICES
          </Link>
          <Link
            href="/about"
            className="text-[#033618] transition-colors hover:text-[#09B850]"
          >
            ABOUT US
          </Link>
          <Link
            href="/blog"
            className="text-[#033618] transition-colors hover:text-[#09B850]"
          >
            BLOG
          </Link>
          <Link
            href="/contact"
            className="text-[#033618] transition-colors hover:text-[#09B850]"
          >
            CONTACT US
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
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
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-[#033618]" />
            ) : (
              <Menu className="h-6 w-6 text-[#033618]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="bg-white shadow-lg md:hidden">
          <div className="container mx-auto flex flex-col space-y-4 px-4 py-4">
            <Link
              href="/services"
              className="py-2 text-[#033618] transition-colors hover:text-[#09B850]"
              onClick={() => setIsMenuOpen(false)}
            >
              SERVICES
            </Link>
            <Link
              href="/about"
              className="py-2 text-[#033618] transition-colors hover:text-[#09B850]"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT US
            </Link>
            <Link
              href="/blog"
              className="py-2 text-[#033618] transition-colors hover:text-[#09B850]"
              onClick={() => setIsMenuOpen(false)}
            >
              BLOG
            </Link>
            <Link
              href="/contact"
              className="py-2 text-[#033618] transition-colors hover:text-[#09B850]"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
