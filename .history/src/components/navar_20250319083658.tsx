"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, User } from "lucide-react";
import { cn } from "@/lib/utils";
import logo from 

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
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#09B850]">
            <span className="text-sm font-bold text-white">BC</span>
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
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#09B850]">
            <User className="h-4 w-4 text-white" />
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
