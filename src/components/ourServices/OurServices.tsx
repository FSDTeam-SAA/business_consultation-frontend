"use client";

import type React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ArrowRight, Instagram, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

// Define the service data structure
type Service = {
  id: string;
  title: string;
  description?: string;
  content: React.ReactNode;
  image: string;
};

// Sample services data
const services: Service[] = [
  {
    id: "Commitment Badge",
    title: "Commitment Badge",
    image: "/Consulting.jpg",
    content: (
      <>
        <p className="mb-6">
          Show the world you&rsquo;re taking real action on sustainability. With
          Going 2 Zero, every member receives a personalized Commitment Badge
          &mdash; a unique, verified symbol of your environmental efforts.
        </p>

        <h2 className="mb-4 text-[16px] font-normal">
          A Badge That Speaks Volumes
        </h2>
        <p className="mb-6">
          Whether you&rsquo;re reducing emissions, supporting climate projects,
          or improving your practices, your badge highlights your commitment in
          a simple, trusted way. Each badge comes with a custom code that can be
          easily added to your website, product packaging, marketing materials,
          and more.
        </p>
        <h2 className="mb-4 text-[16px] font-normal">Built for Trust</h2>
        <p className="mb-6">
          Your badge is a clear signal that your business is taking
          sustainability seriously. It&rsquo;s more than just a logo &mdash;
          it&rsquo;s a meaningful way to stand out, build trust, and show your
          values to customers, clients, and partners.
        </p>
      </>
    ),
  },
  {
    id: "Consulting",
    title: "Consulting",
    description:
      "Whether you're seeking initial advice or in-depth strategic planning, our consultation services are designed to meet your specific needs.",
    image: "/Consulting2.jpg",
    content: (
      <>
        <div className="flex flex-col gap-5">
          <ul className="flex list-disc flex-col gap-4 pl-10">
            <li>
              <span className="font-bold">Free Consultation:</span> Perfect for
              first-time inquiries, quick advice, and getting clarity on your
              goals. No strings attached — just real help.
            </li>
            <li>
              <span className="font-bold">Paid One-Hour Consultation:</span> A
              dedicated deep-dive session to tackle complex challenges, explore
              growth opportunities, and receive customized solutions.
            </li>
          </ul>
          <h1 className="text-xl font-bold">Why Book a Consultation?</h1>
          <p className="pl-5">
            ✓ Personalized advice tailored to your situation
          </p>
          <p className="pl-5">
            ✓ Actionable steps you can implement immediately
          </p>
          <p className="pl-5">
            ✓ Opportunity to discuss long-term goals and strategy
          </p>
          <p className="pl-5">
            ✓ Guidance from experienced professionals who care about your
            success
          </p>
        </div>
      </>
    ),
  },
  {
    id: "Constant Climate Updates",
    title: "Constant Climate Updates",
    description:
      "Expert financial guidance to help businesses optimize their financial performance and achieve sustainable growth.",
    image: "/Consulting3.jpg",
    content: (
      <>
        <div>
          <p className="mb-5">
            The climate is changing — and staying informed has never been more
            important. Our platform brings you constant updates from trusted
            sources around the world.
          </p>
          <h1 className="mb-5 text-xl font-bold">Why Stay Updated?</h1>
          <p>✓ Make better decisions based on real-time data</p>
          <p>✓ Understand new environmental regulations and initiatives</p>
          <p>✓ Get inspired by success stories and new sustainability trends</p>
          <p>
            ✓ Stay connected to a global community passionate about the planet
          </p>
        </div>
      </>
    ),
  },
];

interface Props {
  activeTab: string;
}

export default function OurServices({ activeTab }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const serviceId = searchParams.get("service") || activeTab || services[0].id;
  const activeService = services.find((s) => s.id === serviceId) || services[0];

  return (
    <div className="flex min-h-screen flex-col pt-[20px]">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            {/* Sidebar for desktop */}
            <div className="hidden lg:col-span-3 lg:block">
              <div className="sticky top-8">
                <div className="bg-[#E6E6E6] py-5">
                  <h2 className="mb-6 text-center text-2xl font-bold">
                    Our Services
                  </h2>
                  <div className="flex flex-col space-y-4">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => {
                          router.push(`?service=${service.id}`, {
                            scroll: false,
                          });
                        }}
                        className={cn(
                          "mx-10 flex items-center justify-between rounded-lg p-4 transition-colors",
                          activeService.id === service.id
                            ? "bg-green-500 text-white"
                            : "border border-gray-200 bg-white hover:bg-gray-50",
                        )}
                      >
                        <span>{service.title}</span>
                        <ArrowRight className="h-5 w-5" />
                      </button>
                    ))}
                  </div>
                </div>

                {/* follow us */}
                <div className="my-8 bg-[#E6E6E6] p-4">
                  <h3 className="mb-4 text-sm font-medium">Follow us on</h3>
                  <div className="flex space-x-4">
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

                {/* CTA Section */}
                <div
                  className="flex min-h-[483px] flex-col justify-end p-2"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url('/asset/serviceContact.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <h2 className="mb-4 text-3xl font-bold text-white md:text-[32px]">
                    Ready To Get Expert Our Services
                  </h2>
                  <Button
                    size="lg"
                    className="mb-6 max-w-[90px] bg-green-500 text-white hover:bg-green-600"
                  >
                    <Link className="flex items-center" href="/sign-up">
                      Sign Up
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Tabs for mobile */}
            <div className="mb-6 w-full lg:hidden">
              <Tabs
                defaultValue={activeService.id}
                value={activeService.id}
                onValueChange={(value) => {
                  router.push(`?service=${value}`, { scroll: false });
                }}
              >
                <TabsList className="h-14 w-full flex-nowrap justify-start overflow-x-auto">
                  {services.map((service) => (
                    <TabsTrigger
                      key={service.id}
                      value={service.id}
                      className="whitespace-nowrap data-[state=active]:bg-green-500 data-[state=active]:text-white"
                    >
                      {service.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            {/* Content area */}
            <div className="lg:col-span-9">
              <div className="mb-8">
                <Image
                  src={activeService.image} // ⭐️ dynamic image here
                  alt={activeService.title} // ⭐️ dynamic alt text
                  width={800}
                  height={451}
                  className="h-[300px] w-full rounded-lg object-cover lg:h-[551px]"
                />
              </div>

              <div className="mb-8">
                <h1 className="mb-4 text-3xl font-bold">
                  {activeService.title}
                </h1>
                {activeService.description && (
                  <p className="mb-6 text-gray-700">
                    {activeService.description}
                  </p>
                )}
                <div className="prose max-w-none">{activeService.content}</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
