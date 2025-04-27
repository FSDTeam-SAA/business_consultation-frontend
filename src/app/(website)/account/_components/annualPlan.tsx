'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { Check } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

const AnnualPlan = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const features = [
    "Constant new climate updates",
    "Infinite personal email consulting",
    "Custom commitment badge",
    "Access to book video call consulting",
  ];

  const checkoutMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/payment/checkout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: 1841,
            subscriptionType: "Entry_fee",
            email: email,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to process payment");
      }

      return response.json();
    },
    onSuccess: (data) => {
        toast.success("Payment successful! Redirecting...")
      // Handle successful payment (redirect to success page, show confirmation, etc.)
      if (data?.data?.url) {
        window.location.href = data.data.url;
      }
    },
    onError: (error) => {
      toast.error(error.message)
      // Handle payment error (show error message, etc.)
    },
    onSettled: () => {
      setIsLoading(false);
    },
  });

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleBuyNow = () => {
    // Validate email
    if (!email) {
      setEmailError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setEmailError("");
    setIsLoading(true);
    checkoutMutation.mutate();
  };

  return (
    <div className="flex md:w-[570px] flex-col items-center justify-center gap-20 px-4 md:flex-row md:px-0">
      <div className="w-full max-w-[450px] rounded-xl border-2 border-[#033618] p-4">
        {/* <h2 className="mb-4 text-[24px] font-semibold">Initial Fee</h2> */}
        {/* <Card className="mb-4">
          <CardContent className="p-4">
            <div className="mb-2 rounded-lg border border-b border-[#E6E6E6] px-3 py-3 font-semibold">
              Feature
            </div>
            {features.map((feature, i) => (
              <div className="flex flex-col gap-4" key={i}>
                <div className="flex items-center justify-between py-1">
                  <span>{feature}</span>
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <hr />
              </div>
            ))}
            <div className="mt-3 flex justify-between pt-1">
              <span className="text-[#09B850]">Initial Fee</span>
              <span className="text-[20px] font-semibold">$689.00</span>
            </div>
          </CardContent>
        </Card> */}

        <h2 className="mb-4 text-[24px] font-bold">Annual Plan</h2>
        <Card className="mb-8">
          <CardContent className="p-4">
            <div className="mb-2 rounded-lg border border-b border-[#E6E6E6] px-3 py-3 font-semibold">
              Feature
            </div>
            {features.map((feature, i) => (
              <div className="flex flex-col gap-4" key={i}>
                <div className="flex items-center justify-between py-1">
                  <span>{feature}</span>
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <hr />
              </div>
            ))}
            <div className="mt-3 flex justify-between pt-1">
              <span className="text-[#09B850]">Price</span>
              <span className="font-semibold text-[20px]">$96.00*12</span>
            </div>
          </CardContent>
        </Card>

        <div className="mt-4 space-y-3 text-sm">
          <div className="flex justify-between">
            <span>Initial Fee</span>
            <span className="text-[18px] font-medium">$689.00</span>
          </div>
          <div className="flex justify-between">
            <span>Monthly Fee</span>
            <span className="text-[18px] font-medium">$96.00*12</span>
          </div>
          <hr />
          <div className="flex justify-between font-semibold">
            <span>Total Fee</span>
            <span className="text-[18px] font-medium">$1,841.00</span>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex flex-col space-y-4">
            <div className="mb-4">
              <span className="mb-2 block text-green-600">Email</span>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={emailError ? "border-red-500" : ""}
              />
              {emailError && (
                <p className="mt-1 text-sm text-red-500">{emailError}</p>
              )}
            </div>
            <div className="">
              <Button
                onClick={handleBuyNow}
                disabled={isLoading}
                className="bg-green-500 w-full text-white hover:bg-green-600"
              >
                {isLoading ? "Processing..." : "Buy Plan"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnualPlan;
