"use client"

import { useState, useEffect } from "react"
import NextImage from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const carouselItems = [
  {
    id: 1,
    title: "Expert Business Consulting",
    subtitle: "Strategy, Growth & Success",
    description:
      "Unlock your business full potential with expert consulting tailored to your needs. From strategic planning to growth and business development, we help you achieve the results you want.",
    buttonText: "GET STARTED",
    buttonLink: "/contact",
  },
  {
    id: 2,
    title: "Strategic Business Planning",
    subtitle: "Analysis, Insights & Direction",
    description:
      "Our strategic planning services help you navigate complex business challenges and create a roadmap for sustainable growth and success.",
    buttonText: "LEARN MORE",
    buttonLink: "/service",
  },
  {
    id: 3,
    title: "Financial Consulting",
    subtitle: "Optimization & Growth",
    description:
      "Maximize your financial performance with our expert consulting services. We help you identify opportunities and implement strategies for financial success.",
    buttonText: "DISCOVER",
    buttonLink: "/services/financial",
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

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
        <div className="absolute inset-0 bg-gradient-to-b from-[#09B850]/20 via-[#033618]/60 to-[#062814]/80"></div>
      </div>

      {/* Carousel Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          {carouselItems.map((item, index) => (
            <div
              key={item.id}
              className={cn(
                "transition-opacity duration-500 max-w-2xl",
                currentSlide === index ? "opacity-100" : "opacity-0 absolute",
              )}
            >
              <div className="flex flex-col space-y-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">{item.title}</h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white">{item.subtitle}</h2>
                <p className="text-white/80 max-w-lg">{item.description}</p>
                <div className="pt-4">
                  <a
                    href={item.buttonLink}
                    className="bg-[#09B850] hover:bg-[#09B850]/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
                  >
                    {item.buttonText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute z-20 bottom-10 left-0 right-0">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-2">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-colors",
                  currentSlide === index ? "bg-[#09B850]" : "bg-white/50",
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

