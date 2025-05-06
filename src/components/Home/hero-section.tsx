"use client";

import { useState, useEffect } from "react";
// import Link from "next/link";
import NextImage from "next/image";
// import { , } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
// import heroImg from "@/public/hero_image.jpg"; // Ensure the file extension matches the actual file (e.g., .jpg, .png)

const carouselItems = [
  {
    id: 1,
    title: "Going 2 Zero",
    subtitle: "Future Proofing Your Business",
    // description:
    //   "Unlock your business's full potential with expert consulting tailored to your needs. From strategic planning to growth acceleration, we provide the insights and solutions to help you thrive in a competitive market. Let's build your success together!",
    // buttonText: "GET STARTED",
    // buttonLink: "/contact",
  },
  // {
  //   id: 2,
  //   title: "Strategic Business Planning",
  //   subtitle: "Analysis, Insights & Direction",
  //   description:
  //     "Our strategic planning services help you navigate complex business challenges and create a roadmap for sustainable growth and success in today's competitive marketplace.",
  //   buttonText: "LEARN MORE",
  //   buttonLink: "/services",
  // },
  // {
  //   id: 3,
  //   title: "Financial Consulting",
  //   subtitle: "Optimization & Growth",
  //   description:
  //     "Maximize your financial performance with our expert consulting services. We help you identify opportunities and implement strategies for financial success and stability.",
  //   buttonText: "GET STARTED",
  //   buttonLink: "/services/financial",
  // },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === carouselItems.length - 1 ? 0 : prev + 1,
    );
  };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) =>
  //     prev === 0 ? carouselItems.length - 1 : prev - 1,
  //   );
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <NextImage
          src={"/hero_image2.jpg"}
          alt="Business meeting"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4">
          {carouselItems.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                "max-w-2xl transition-opacity duration-500",
                currentSlide === index ? "opacity-100" : "absolute opacity-0",
              )}
            >
              <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-7xl lg:leading-[100px]">
                {item.title}
                <br />
                {item.subtitle}
              </h1>
              {/* <p className="mb-8 max-w-xl text-base text-white/90 md:text-lg">
                {item.description}
              </p> */}
              <Link href="/service">
                <p className="inline-block rounded-md bg-[#09B850] px-8 py-3 font-medium uppercase text-white transition-colors hover:bg-[#09B850]/90">
                  LEARN MORE
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Controls */}
      {/* Carousel Controls - Large Screens (lg) */}
      {/* <div className="absolute inset-y-0 left-4 z-20 flex hidden items-center md:hidden lg:flex">
        <button
          onClick={prevSlide}
          className="rounded-full bg-[#078A3C] p-3 transition-colors hover:bg-[#078A3C]/90"
          aria-label="Previous slide"
        >
          <ArrowLeft className="h-6 w-6 text-white" />
        </button>
      </div> */}

      {/* <div className="absolute inset-y-0 right-4 z-20 flex hidden items-center md:hidden lg:flex">
        <button
          onClick={nextSlide}
          className="rounded-full bg-[#078A3C] p-3 transition-colors hover:bg-[#078A3C]/90"
          aria-label="Next slide"
        >
          <ArrowRight className="h-6 w-6 text-white" />
        </button>
      </div> */}

      {/* Carousel Controls - Medium and Small Screens (md and below) */}
      {/* <div className="absolute bottom-[120px] right-4 z-20 flex items-center md:flex lg:hidden">
        <button
          onClick={nextSlide}
          className="rounded-full bg-[#078A3C] p-3 transition-colors hover:bg-[#078A3C]/90"
          aria-label="Next slide"
        >
          <ArrowLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={prevSlide}
          className="ml-2 rounded-full bg-[#078A3C] p-3 transition-colors hover:bg-[#078A3C]/90"
          aria-label="Previous slide"
        >
          <ArrowRight className="h-6 w-6 text-white" />
        </button>
      </div> */}
    </section>
  );
}
