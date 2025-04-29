"use client";

import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ForgetPasswordForm } from "./forget-password-form";
import { VerifyEmailForm } from "./verify-email-form";
import { ResetPasswordForm } from "./reset-password-form";
import { toast } from "sonner";
import Image from "next/image";
import Link from "next/link";

// Create a client
const queryClient = new QueryClient();

export function PasswordResetFlow() {
  const [currentStep, setCurrentStep] = useState<"forget" | "verify" | "reset">(
    "forget",
  );
  const [email, setEmail] = useState<string>("");

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex h-screen items-center justify-center">
        <div className="mx-auto w-full max-w-md rounded-3xl border border-green-500 p-8">
          <div className="my-3 flex items-center justify-center">
            <Link href="/" className="flex items-center">
              <Image
                src={"/asset/logo.png"}
                width={500}
                height={500}
                alt="logo"
                className="w-[150px]"
              />
              <p className="-ml-[30px] text-[14px] font-medium text-[#09B850]">
                {" "}
                Going 2
                <br />
                <span className={"text-gray-800"}>Zero</span>
              </p>
            </Link>
          </div>

          {currentStep === "forget" && (
            <ForgetPasswordForm
              onSuccess={(email) => {
                toast.success("Check Email To Get Verification Code");
                setEmail(email);
                setCurrentStep("verify");
              }}
            />
          )}

          {currentStep === "verify" && (
            <VerifyEmailForm
              email={email}
              onSuccess={() => {
                setCurrentStep("reset");
              }}
              onBack={() => setCurrentStep("forget")}
            />
          )}

          {currentStep === "reset" && (
            <ResetPasswordForm
              email={email}
              onSuccess={() => {
                // Show success message
                toast.success("Password updated successfully");

                // Redirect to login page after a short delay
                setTimeout(() => {
                  window.location.href = "/login";
                }, 1000);
              }}
            />
          )}
        </div>
      </div>
    </QueryClientProvider>
  );
}
