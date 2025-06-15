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
  const router = useRouter();

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
        }
      );

      if (!response.ok) {
        throw new Error("Failed to process payment");
      }

      return response.json();
    },
    onSuccess: (data) => {
      toast.success(data.message);
      if (data?.data?.url) {
        window.location.href = data.data.url;
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
    onSettled: () => {
      setIsLoading(false);
    },
  });

  const handleBuyNow = (payment: string): void => {
    if (!user) {
      router.push("/login");
      return;
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

              {/* ✅ Total */}
              {/* <div className="flex items-center">
                <div className="text-sm font-semibold text-green-500">Total Amount</div>
                <div className="ml-auto text-xl font-bold text-gray-800">
                  <span className="align-top text-sm">$</span>799.00
                </div>
              </div> */}
                <div className="flex justify-between items-center border-t pt-4 mt-2">
                <div className="text-green-500 font-semibold">Total Amount</div>
                <div className="text-xl font-bold text-gray-800">
                  <span className="align-top text-sm">$</span>799.00
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
                <span>Free 2 months with purchasing the annual plan</span>
                <Check className="h-5 w-5 text-green-500" />
              </div>

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

            <div className="mt-6 space-y-4 text-sm">
              {/* Monthly Fee */}
              <div className="flex justify-between items-start">
                <div className="text-green-500">Monthly Fee</div>
                <div className="text-right">
                  <div className="text-[14px] text-gray-500 line-through">$96.00 × 12 = $1,152.00</div>
                  <div className="text-[18px] font-semibold ">$1,100.00 (Discounted)</div>
                </div>
              </div>

              {/* Initial Fee */}
              <div className="flex justify-between items-center">
                <div className="text-green-500">Initial Fee</div>
                <div className="text-2xl font-bold">
                  <span className="align-top text-sm">$</span>689.00
                </div>
              </div>

              {/* ✅ Total */}
              <div className="flex justify-between items-center border-t pt-4 mt-2">
                <div className="text-green-500 font-semibold">Total Amount</div>
                <div className="text-xl font-bold text-gray-800">
                  <span className="align-top text-sm">$</span>1789.00
                </div>
              </div>

              {/* Buy Button */}
              <div className="flex justify-between items-center mt-4">
                <div className="text-green-500">Package</div>
                <button
                  onClick={() => handleBuyNow("1789")}
                  className="rounded-md bg-green-500 px-5 py-2 text-white font-semibold text-sm transition hover:bg-green-600"
                >
                  Buy Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
