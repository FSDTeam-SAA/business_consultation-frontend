"use client";

import type React from "react";
import { useState } from "react";
import NextImage from "next/image";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
} from "@tanstack/react-query";
import { toast } from "sonner";
import { Toaster } from "sonner";

// Create a client
const queryClient = new QueryClient();

function NewsletterForm() {
  const [email, setEmail] = useState("");

  // Create a mutation for the newsletter subscription
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: async (email: string) => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/newsletter`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        },
      );

      if (!response.ok) {
        throw new Error("Your email is already subscribed.");
      }

      return response.json();
    },
    onSuccess: () => {
      setEmail("");
      toast.success("Thank you for subscribing!");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to subscribe. Please try again.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(email);
  };

  return (
    <section className="bg-[#DAD7D8] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <NextImage
             
              src="/asset/newslater.png"
              alt="Newsletter"
              width={600}
              height={400}
              className="rounded-lg w-[570px] h-[289px]"
            />
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-bold text-[#033618] md:text-3xl">
              Subscribe to our
              <br />
              Newsletter!
            </h2>
            <p className="mb-6 text-gray-600">
            Subscribe to our newsletter and stay
            updated.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full rounded-md border border-gray-300 px-4 py-3 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#09B850]"
                  required
                  disabled={isPending}
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-[#09B850] px-6 py-3 font-medium text-white transition-colors hover:bg-[#09B850]/90"
                disabled={isPending}
              >
                {isPending ? "Subscribing..." : "Subscribe"}
              </button>

              {isSuccess && (
                <div className="font-medium text-[#09B850]">
                  Thank you for subscribing!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Wrap the component with the provider
export default function NewsletterSection() {
  return (
    <QueryClientProvider client={queryClient}>
      <NewsletterForm />
      <Toaster richColors position="top-right" />
    </QueryClientProvider>
  );
}
