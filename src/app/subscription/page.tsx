"use client"

import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SubscriptionsPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")

  const checkoutMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/payment/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: 689,
          subscriptionType: "Entry_fee",
          email: email,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to process payment")
      }

      return response.json()
    },
    onSuccess: (data) => {
      console.log("Payment successful:", data)
      // Handle successful payment (redirect to success page, show confirmation, etc.)
      if (data?.data?.url) {
        window.location.href = data.data.url
      }
    },
    onError: (error) => {
      console.error("Payment error:", error)
      // Handle payment error (show error message, etc.)
    },
    onSettled: () => {
      setIsLoading(false)
    },
  })

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const handleBuyNow = () => {
    // Validate email
    if (!email) {
      setEmailError("Email is required")
      return
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address")
      return
    }

    setEmailError("")
    setIsLoading(true)
    checkoutMutation.mutate()
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold">Subscriptions</h1>

      <p className="mt-2 text-gray-600">
        Sign up in less then 30 seconds. Try out 7 days free trial.
        <br />
        Upgrade at anytime, no question, no hastle.
      </p>

      <div className="mt-8 border rounded-lg overflow-hidden">
        <div className="bg-gray-100 p-4">
          <h2 className="text-lg font-semibold">Feature</h2>
        </div>

        <div className="border-t p-4 flex justify-between items-center">
          <span>Constant new climate updates</span>
          <Check className="h-5 w-5 text-green-500" />
        </div>

        <div className="border-t p-4 flex justify-between items-center">
          <span>Infinite personal email consulting</span>
          <Check className="h-5 w-5 text-green-500" />
        </div>

        <div className="border-t p-4 flex justify-between items-center">
          <span>Custom commitment badge</span>
          <Check className="h-5 w-5 text-green-500" />
        </div>

        <div className="border-t p-4 flex justify-between items-center">
          <span>Access to book video call consulting</span>
          <Check className="h-5 w-5 text-green-500" />
        </div>

        <div className="border-t p-4 flex justify-between items-center">
          <span className="text-green-600">Price</span>
          <span className="font-bold">
            <sup>$</sup>689.00
          </span>
        </div>

        <div className="border-t p-4">
          <div className="flex flex-col space-y-4">
            <div>
              <span className="text-green-600 block mb-2">Email</span>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={emailError ? "border-red-500" : ""}
              />
              {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
            </div>
            <div className="flex justify-between items-center">
              <span className="text-green-600">Package</span>
              <Button
                onClick={handleBuyNow}
                disabled={isLoading}
                className="bg-green-500 hover:bg-green-600 text-white"
              >
                {isLoading ? "Processing..." : "Buy Plan"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
