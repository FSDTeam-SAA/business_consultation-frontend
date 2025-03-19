"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import NextImage from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import 

const carouselItems = [
  {
    id: 1,
    title: "Expert Business Consulting",
    subtitle: "Strategy, Growth & Success",
    description:
      "Unlock your business's full potential with expert consulting tailored to your needs. From strategic planning to growth acceleration, we provide the insights and solutions to help you thrive in a competitive market. Let's build your success together!",
    buttonText: "GET STARTED",
    buttonLink: "/contact",
  },
  {
    id: 2,
    title: "Strategic Business Planning",
    subtitle: "Analysis, Insights & Direction",
    description:
      "Our strategic planning services help you navigate complex business challenges and create a roadmap for sustainable growth and success in today's competitive marketplace.",
    buttonText: "LEARN MORE",
    buttonLink: "/services",
  },
  {
    id: 3,
    title: "Financial Consulting",
    subtitle: "Optimization & Growth",
    description:
      "Maximize your financial performance with our expert consulting services. We help you identify opportunities and implement strategies for financial success and stability.",
    buttonText: "DISCOVER",
    buttonLink: "/services/financial",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === carouselItems.length - 1 ? 0 : prev + 1,
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? carouselItems.length - 1 : prev - 1,
    );
  };

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
          src="/placeholder.svg?height=1080&width=1920"
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
              <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
                {item.title}
                <br />
                {item.subtitle}
              </h1>
              <p className="mb-8 max-w-xl text-base text-white/90 md:text-lg">
                {item.description}
              </p>
              <Link
                href={item.buttonLink}
                className="inline-block rounded-md bg-[#09B850] px-8 py-3 font-medium uppercase text-white transition-colors hover:bg-[#09B850]/90"
              >
                {item.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-10 left-0 right-0 z-20">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex space-x-2">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={cn(
                  "h-3 w-3 rounded-full transition-colors",
                  currentSlide === index ? "bg-[#09B850]" : "bg-white/50",
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              className="rounded-full bg-white/20 p-2 transition-colors hover:bg-white/30"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="rounded-full bg-white/20 p-2 transition-colors hover:bg-white/30"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
