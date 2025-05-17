import Link from "next/link";
import {  Twitter, Instagram, Linkedin } from "lucide-react";
import Hideon from "@/provider/Hideon";
// import NewsletterSection from "./newsletter-section";
import Image from "next/image";

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
      {

      }
      
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
              <Link href="/" className="flex items-center -ml-8">
                <Image src={"/asset/logo.png"} width={100} height={100} alt="logo" />
                <p className="text-[14px] font-medium text-[#09B850] whitespace-nowrap">
                  {" "}
                  Going 2 
                  <span
                    className= "text-white ml-1">
                    Zero
                  </span>
                </p>
              </Link>
              {/* <p className="text-[16px] font-normal">
                We see our clients as strategic partners. This means in close
                cooperation. We see our Clients as strategic partners. This
                means in close cooperation.
              </p> */}

              <div className="space-y-2">
                <p>Follow us</p>
                <div className="flex space-x-2">
                  {/* <Link
                    href="#"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#004225]"
                  >
                    <Facebook className="text-[#09B850]" size={16} />
                  </Link> */}
                  <a
                  target="_blank"
                    href="https://x.com/going2zeroltd"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#004225]"
                  >
                    <Twitter className="text-[#09B850]" size={16} />
                  </a>
                  <a
                  target="_blank"
                    href="https://www.linkedin.com/company/going-2-zero-ltd"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#004225]"
                  >
                    <Linkedin className="text-[#09B850]" size={16} />
                  </a>
                  <a
                  target="_blank"
                    href="https://www.instagram.com/going2zeroltd/"
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#004225]"
                  >
                    <Instagram className="text-[#09B850]" size={16} />
                  </a>
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
                    href="/service"
                    className="flex items-center transition-colors hover:text-green-300"
                  >
                    <span className="mr-2 text-[16px] font-normal">»</span> Services

                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="flex items-center transition-colors hover:text-green-300"
                  >
                    <span className="mr-2">»</span> About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="flex items-center transition-colors hover:text-green-300"
                  >
                    <span className="mr-2">»</span> Contact us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sign-up"
                    className="flex items-center transition-colors hover:text-green-300"
                  >
                    <span className="mr-2">»</span> Sign up now
                  </Link>
                </li>
                {/* <li>
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
                </li> */}
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
                {/* <div className="flex">
                  <p className="font-bold">Address:</p>
                  <p className="ml-2">124 Gua Street 41 A, United State</p>
                </div> */}
                <div className="flex">
                  <p className="font-bold">Mail:</p>
                  <p className="ml-2 text-[#999999]">info@going2zero.com</p>
                </div>
                <div className="flex">
                  <p className="font-bold">Phone:</p>
                  <p className="ml-2 text-[#999999]">(+422) 145 448 458</p>
                </div>
                {/* <div className="flex">
                  <p className="font-bold">Fax ID:</p>
                  <p className="ml-2">(+1) 475 475 854</p>
                </div> */}
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-700 pt-6 text-center">
            <p className="text-gray-400">
              Copyright ©2025 Business Consultative. All Right Reserved.
            </p>
            <div className="flex items-center justify-center gap-3">
              <Link href="/about">
                <p>About Us </p>
              </Link>
              |{" "}
              <Link href="/service">
                <p>Services</p>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </Hideon>
  );
}
