"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Business is exactly what I have been looking for. I have tried a lot of similar products and business is the best I have tried a few software of this kind and business is the best by far I am glad I found business.",
    name: "Alex Richard",
    title: "Business Advisor",
    image: "/asset/profile.png",
  },
  {
    id: 2,
    quote:
      "Of similar products and business is the best I have tried a few software of this kind and business is the best by far I am glad I found business.",
    name: "Sarah Johnson",
    title: "Marketing Director",
    image: "/asset/profile.png",
  },
  {
    id: 3,
    quote: "Business is exactly what I have been looking for.",
    name: "Michael Chen",
    title: "CEO, TechStart",
    image: "/asset/profile.png",
  },
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev" | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToPrevious = () => {
    if (isAnimating) return;

    setDirection("prev");
    setIsAnimating(true);

    setTimeout(() => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide
        ? testimonials.length - 1
        : currentIndex - 1;
      setCurrentIndex(newIndex);
    }, 300); // Half of the transition time
  };

  const goToNext = () => {
    if (isAnimating) return;

    setDirection("next");
    setIsAnimating(true);

    setTimeout(() => {
      const isLastSlide = currentIndex === testimonials.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 300); // Half of the transition time
  };

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setDirection(null);
      }, 400); // Full transition time

      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  return (
    <section className="bg-[#004225] py-16 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 flex justify-center">
          <div className="inline-block rounded-full border border-green-400 px-3 py-1 text-sm font-medium text-green-400">
            • Testimonials
          </div>
        </div>

        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          Customer testimonial is
          <br />
          simply sn existing user
        </h2>

        <div className="relative mx-auto w-full max-w-5xl">
          <div className="relative mb-8 flex items-center justify-between">
            <button
              onClick={goToPrevious}
              className="z-10 text-white transition-colors hover:text-green-300"
              aria-label="Previous testimonial"
              disabled={isAnimating}
            >
              Prev
            </button>
            <div className="absolute left-24 hidden h-[100px] w-[2px] bg-gray-400 lg:block"></div>

            <div className="absolute right-24 hidden h-[100px] w-[2px] bg-gray-400 lg:block"></div>

            <button
              onClick={goToNext}
              className="z-10 text-white transition-colors hover:text-green-300"
              aria-label="Next testimonial"
              disabled={isAnimating}
            >
              Next
            </button>
          </div>

          <div className="relative h-[300px] w-full overflow-hidden">
            <div
              className={`duration-600 absolute w-full transition-all ease-in-out ${
                isAnimating
                  ? direction === "next"
                    ? "translate-x-[-100%] opacity-0"
                    : "translate-x-[100%] opacity-0"
                  : "translate-x-0 opacity-100"
              }`}
            >
              <div className="mx-auto mb-12 w-full max-w-3xl text-center">
                <p className="mb-10 px-4 text-lg md:px-16 md:text-xl">
                  {testimonials[currentIndex].quote}
                </p>

                <div className="flex items-center justify-center">
                  <div className="mr-4">
                    <Image
                      src={
                        testimonials[currentIndex].image || "/placeholder.svg"
                      }
                      alt={testimonials[currentIndex].name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-lg font-bold">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-green-400">
                      {testimonials[currentIndex].title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
