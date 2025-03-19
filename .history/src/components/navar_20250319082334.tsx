"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, User } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-[#09B850] rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">C</span>
          </div>
          <span className="text-[#033618] font-bold">Business CONSULTIVE</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/services" className="text-[#033618] hover:text-[#09B850] transition-colors">
            SERVICES
          </Link>
          <Link href="/about" className="text-[#033618] hover:text-[#09B850] transition-colors">
            ABOUT US
          </Link>
          <Link href="/blog" className="text-[#033618] hover:text-[#09B850] transition-colors">
            BLOG
          </Link>
          <Link href="/contact" className="text-[#033618] hover:text-[#09B850] transition-colors">
            CONTACT US
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <div className="h-8 w-8 bg-[#09B850] rounded-full flex items-center justify-center">
            <User className="h-4 w-4 text-white" />
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6 text-[#033618]" /> : <Menu className="h-6 w-6 text-[#033618]" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/services"
              className="text-[#033618] hover:text-[#09B850] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              SERVICES
            </Link>
            <Link
              href="/about"
              className="text-[#033618] hover:text-[#09B850] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT US
            </Link>
            <Link
              href="/blog"
              className="text-[#033618] hover:text-[#09B850] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              BLOG
            </Link>
            <Link
              href="/contact"
              className="text-[#033618] hover:text-[#09B850] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT US
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

