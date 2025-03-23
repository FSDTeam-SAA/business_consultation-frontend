import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Hideon from "@/provider/Hideon"
import NewsletterSection from "./newsletter-section"

export default function Footer() {
  return (
 <Hideon
 routes={[
  "/sign-up",
  "/login",
  "/reset-password",
  '/subscription',
    '/forget-password'
]}
 >
<NewsletterSection/>
<footer className="bg-[#033618] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-8 w-8 bg-[#09B850] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-white font-bold">CONSULTIVE</span>
            </div>
            <p className="text-gray-300 mb-6">
              We help our clients to achieve business goals, from strategy to execution. Our team of experts is
              dedicated to your success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#09B850] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-[#09B850] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-[#09B850] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-[#09B850] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#09B850] transition-colors">
                  ↳ Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#09B850] transition-colors">
                  ↳ About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#09B850] transition-colors">
                  ↳ Our Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-[#09B850] transition-colors">
                  ↳ Latest Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#09B850] transition-colors">
                  ↳ Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <span className="text-[#09B850]">Address:</span>
                <span className="text-gray-300">123 Fifth Street, NY 10160, New York, USA</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-[#09B850]">Phone:</span>
                <span className="text-gray-300">+1 (123) 456 7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-[#09B850]">Email:</span>
                <span className="text-gray-300">info@consultive.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-[#09B850]">Fax:</span>
                <span className="text-gray-300">+1 (123) 456 7891</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Working Hours</h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-gray-300">Monday - Friday:</span>
                <span className="text-[#09B850]">9am - 5pm</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Saturday:</span>
                <span className="text-[#09B850]">10am - 4pm</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Sunday:</span>
                <span className="text-[#09B850]">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 text-center">
          <p className="text-gray-400">Copyright ©2023 Business Consultative. All Right Reserved.</p>
        </div>
      </div>
    </footer>
 </Hideon>
  )
}

