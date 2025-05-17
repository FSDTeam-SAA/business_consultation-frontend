"use client";
import { useAuth } from "@/hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import { Check } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function Pricing() {
  const [, setIsLoading] = useState(false);
  const { user } = useAuth();
  const router = useRouter()

  const checkoutMutation = useMutation({
    mutationFn: async (payment: string) => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/payment/checkout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: user?.email,
            subcriptioType: "Entry_free",
            amount: Number(payment),
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to process payment");
      }

      return response.json();
    },
    onSuccess: (data) => {
      toast.success(data.message);
      // Handle successful payment (redirect to success page, show confirmation, etc.)
      if (data?.data?.url) {
        window.location.href = data.data.url;
      }
    },
    onError: (error) => {
      toast.error(error.message);
      // Handle payment error (show error message, etc.)
    },
    onSettled: () => {
      setIsLoading(false);
    },
  });

  const handleBuyNow = (payment: string): void => {

    if(!user) {
      router.push('/login');
      return
    }
    setIsLoading(true);
    checkoutMutation.mutate(payment);
  };

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8">
      <div className="mb-6 inline-block">
        <Link href="/login">
          <span className="flex items-center rounded-full border border-green-500 px-3 py-1 text-sm font-medium text-green-500">
            <span className="mr-1 h-2 w-2 rounded-full bg-green-500"></span>
            Sign Up Now
          </span>
        </Link>
      </div>
      <p className="mb-8 text-center text-gray-700">
        Are you ready to show your commitment towards net zero? Sign up now and
        let us assist you on your journey to becoming carbon-neutral.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Monthly Plan */}
        <div className="flex flex-col">
          <h2 className="mb-4 text-2xl font-bold">Monthly Plan</h2>
          <div className="mt-auto flex-1 rounded-lg bg-gray-100 p-6">
            <div className="mb-4 text-lg font-medium">Feature</div>

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-gray-200 py-2">
                <span>Constant new climate updates</span>
                <Check className="h-5 w-5 text-green-500" />
              </div>

              <div className="flex items-center justify-between border-b border-gray-200 py-2">
                <span>Infinite personal email consulting</span>
                <Check className="h-5 w-5 text-green-500" />
              </div>

              <div className="flex items-center justify-between border-b border-gray-200 py-2">
                <span>Custom commitment badge</span>
                <Check className="h-5 w-5 text-green-500" />
              </div>

              <div className="flex items-center justify-between border-b border-gray-200 py-2">
                <span>Access to book video call consulting</span>
                <Check className="h-5 w-5 text-green-500" />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <div className="flex items-center">
                <div className="text-sm text-green-500">Monthly Fee</div>
                <div className="ml-auto">
                  <span className="align-top text-xs">$</span>
                  <span className="text-2xl font-bold">110.00</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-sm text-green-500">Initial Fee</div>
                <div className="ml-auto">
                  <span className="align-top text-xs">$</span>
                  <span className="text-2xl font-bold">689.00</span>
                </div>
              </div>
              <div className="mt-4 flex items-center">
                <div className="text-sm text-green-500">Package</div>
                <button
                  onClick={() => handleBuyNow("799")}
                  className="ml-auto rounded-md bg-green-500 px-4 py-2 text-white transition-colors hover:bg-green-600"
                >
                  Buy Plan
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Annually Plan */}
        <div className="flex flex-col">
          <h2 className="mb-4 text-2xl font-bold">Annually Plan</h2>
          <div className="mt-auto flex-1 rounded-lg bg-gray-100 p-6">
            <div className="mb-4 text-lg font-medium">Feature</div>

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-gray-200 py-2">
                <span>Constant new climate updates</span>
                <Check className="h-5 w-5 text-green-500" />
              </div>

              <div className="flex items-center justify-between border-b border-gray-200 py-2">
                <span>Infinite personal email consulting</span>
                <Check className="h-5 w-5 text-green-500" />
              </div>

              <div className="flex items-center justify-between border-b border-gray-200 py-2">
                <span>Custom commitment badge</span>
                <Check className="h-5 w-5 text-green-500" />
              </div>

              <div className="flex items-center justify-between border-b border-gray-200 py-2">
                <span>Access to book video call consulting</span>
                <Check className="h-5 w-5 text-green-500" />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <div className="flex items-center">
                <div className="text-sm text-green-500">Monthly Fee</div>
                <div className="ml-auto">
                  <span className="align-top text-xs">$</span>
                  <span className="text-2xl font-bold">96.00</span>
                  <span className="text-sm">*12</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="text-sm text-green-500">Initial Fee</div>
                <div className="ml-auto">
                  <span className="align-top text-xs">$</span>
                  <span className="text-2xl font-bold">689.00</span>
                </div>
              </div>

              <div className="mt-4 flex items-center">
                <div className="text-sm text-green-500">Package</div>
                <button
                   onClick={() => handleBuyNow("1841")}
                  className="ml-auto rounded-md bg-green-500 px-4 py-2 text-white transition-colors hover:bg-green-600"
                >
                  Buy Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <h2 className="text-2xl font-bold mb-2">Sign up now</h2>
        <p className="text-gray-600 mb-6 max-w-lg">Are you ready to show your commitment towards net zero? Sign up now and let us assist you on your journey to becoming carbon-neutral.
        </p>
  
        <div className="border rounded-md overflow-hidden shadow-sm">
          <div className="bg-gray-100 px-4 py-3">
            <h3 className="font-medium">Feature</h3>
          </div>
          <div className="divide-y">
            <div className="flex items-center justify-between px-4 py-4">
              <span>Market Growth Solution</span>
              <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex items-center justify-between px-4 py-4">
              <span>Great Customer Support</span>
              <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="flex items-center justify-between px-4 py-4">
              <span>Time Series Models</span>
              <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                <path d="M6 6l8 8m0-8l-8 8" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex items-center justify-between px-4 py-4">
              <span>24/7 consultant Service</span>
              <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                <path d="M6 6l8 8m0-8l-8 8" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex items-center justify-between px-4 py-4">
            <span className="text-green-500">Price</span>
            <span className="font-bold text-md sm:ml-auto md:ml-64">$100.00</span>
            </div>
            <div className="flex items-center justify-between px-4 py-4">
            <span className="text-green-500">Package</span>
            <button className="ml-auto bg-green-500 text-white px-4 py-2 rounded-md text-sm">Buy Plan</button>
            </div>
         
          </div>
        </div> */}
    </div>
  );
}
