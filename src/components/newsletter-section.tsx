"use client"

import type React from "react"

import { useState } from "react"
import NextImage from "next/image"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your API
    setIsSubmitted(true)
    setEmail("")
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section className="py-16 bg-[#DAD7D8]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <NextImage
              src="/asset/newslater.png"
              alt="Newsletter"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#033618] mb-4">
              Subscribe to our
              <br />
              Newsletter!
            </h2>
            <p className="text-gray-600 mb-6">
              Stay updated with our latest insights, industry trends, and expert advice delivered directly to your
              inbox.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#09B850] focus:border-transparent"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#09B850] hover:bg-[#09B850]/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Subscribe
              </button>

              {isSubmitted && <div className="text-[#09B850] font-medium">Thank you for subscribing!</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

