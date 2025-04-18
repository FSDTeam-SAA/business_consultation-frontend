import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Hideon from "@/provider/Hideon";
import NewsletterSection from "./newsletter-section";

export default function Footer() {
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
      <NewsletterSection />
      <footer className="bg-[#033618] text-white">
        <div className="container mx-auto px-4 py-12">
          {/* top sec  */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Company Info Column */}
            <div className="space-y-4">
              {/* <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-500 flex items-center justify-center rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div>
                <div className="text-green-400 font-bold">BUSINESS</div>
                <div className="font-bold">CONSULTATION</div>
              </div>
            </div> */}
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
                    className={"text-sm font-medium leading-none text-white"}
                  >
                    CONSULTATION
                  </span>
                </div>
              </Link>

              <p className="text-[16px] font-normal">
                We see our clients as strategic partners. This means in close
                cooperation. We see our Clients as strategic partners. This
                means in close cooperation.
              </p>

              <div className="space-y-2">
                <p>Follow us on</p>
                <div className="flex space-x-2">
                  <Link
                    href="#"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#004225]"
                  >
                    <Facebook className="text-[#09B850]" size={16} />
                  </Link>
                  <Link
                    href="#"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#004225]"
                  >
                    <Twitter className="text-[#09B850]" size={16} />
                  </Link>
                  <Link
                    href="#"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#004225]"
                  >
                    <Linkedin className="text-[#09B850]" size={16} />
                  </Link>
                  <Link
                    href="#"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#004225]"
                  >
                    <Instagram className="text-[#09B850]" size={16} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="space-y-4">
              <div>
                <h3 className="inline-block border-b-2 border-[#09B850] text-xl font-bold">
                  Quick Links
                </h3>
              </div>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="flex items-center transition-colors hover:text-green-300"
                  >
                    <span className="mr-2 text-[16px] font-normal">»</span> Make
                    Appointment
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center transition-colors hover:text-green-300"
                  >
                    <span className="mr-2">»</span> Customer Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center transition-colors hover:text-green-300"
                  >
                    <span className="mr-2">»</span> Department Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center transition-colors hover:text-green-300"
                  >
                    <span className="mr-2">»</span> About Company
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center transition-colors hover:text-green-300"
                  >
                    <span className="mr-2">»</span> Our Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center transition-colors hover:text-green-300"
                  >
                    <span className="mr-2">»</span> Free Consultation
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="flex items-center transition-colors hover:text-green-300"
                  >
                    <span className="mr-2">»</span> Meet Our Experts
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us Column */}
            <div className="space-y-4">
              <div>
                <h3 className="inline-block border-b-2 border-[#09B850] text-xl font-bold">
                  Contact Us
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex">
                  <p className="font-bold">Address:</p>
                  <p className="ml-2">124 Gua Street 41 A, United State</p>
                </div>
                <div className="flex">
                  <p className="font-bold">Mail:</p>
                  <p className="ml-2 text-green-300">info@going2zero</p>
                </div>
                <div className="flex">
                  <p className="font-bold">Phone:</p>
                  <p className="ml-2">(+422) 145 448 458</p>
                </div>
                <div className="flex">
                  <p className="font-bold">Fax ID:</p>
                  <p className="ml-2">(+1) 475 475 854</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-700 pt-6 text-center">
            <p className="text-gray-400">
              Copyright ©2023 Business Consultative. All Right Reserved.
            </p>
            <div className="flex items-center justify-center gap-3">
              <p>About Us </p>|<p>Services</p>|<p>Blogs</p>
            </div>
          </div>
        </div>
      </footer>
    </Hideon>
  );
}
