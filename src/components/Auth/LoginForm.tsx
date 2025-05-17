"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  // Use the auth hook
  const { login, loginPending } = useAuth();


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const dataResponse = await login({ email, password }, rememberMe);
      // console.log("success",dataResponse)
      if (dataResponse?.status) {
        toast.success("Login successful!");
        window.location.href = "/";
      } else {
        toast.error(dataResponse?.message);
      }
    } catch (error: any) {
      toast.error(error.message || "");
      router.push("/subscription");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4 pt-[70px]">
      <div className="w-full max-w-xl rounded-3xl border border-[#09B850] bg-white p-8 pb-[79px]">
        <div className="mb-6 flex justify-center">
          <div className="flex items-center">
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
                {"  "}
                <span className={"text-gray-800"}>Zero</span>
              </p>
            </Link>
            {/* <Image
              src="/asset/fomrLogo.png"
              alt="Business Consultation Logo"
              width={140}
              height={140}
              className="mr-2"
            /> */}
          </div>
        </div>

        <h1 className="mb-2 text-center text-3xl font-bold">Log In</h1>
        <p className="mb-8 text-center text-gray-400">
          Continue to Login , Please provide the information.
        </p>

        <form onSubmit={handleSubmit}>
          <h2 className="mb-6 text-xl font-semibold text-gray-800">
            Enter your Personal Information
          </h2>

          <div className="mb-4">
            <label htmlFor="email" className="mb-2 block text-gray-400">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Write your email"
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-green-500 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={loginPending}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="mb-2 block text-gray-400">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full rounded-lg border border-gray-300 p-3 focus:border-green-500 focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loginPending}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
                disabled={loginPending}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-green-500 focus:ring-green-500"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                disabled={loginPending}
              />
              <label htmlFor="remember-me" className="ml-2 text-gray-700">
                Remember me?
              </label>
            </div>
            <Link
              href="/forget-password"
              className="text-green-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-green-500 py-3 text-center font-medium text-white hover:bg-green-600 focus:outline-none disabled:bg-green-300"
            disabled={loginPending}
          >
            {loginPending ? (
              <span className="flex items-center justify-center">
                <Loader2 size={20} className="mr-2 animate-spin" />
                Logging in...
              </span>
            ) : (
              "Log In"
            )}
          </button>
        </form>

        <div>
          <p className="mt-6 text-center text-gray-400">
            Don&apos;t have an account?{" "}
            <Link href="/sign-up" className="text-green-500 hover:underline">
              Register
            </Link>
          </p>
          <p className="mt-2 text-center text-gray-400">
            Already have an account but haven&apos;t made a{" "}
            <Link
              href="/subscription"
              className="text-green-500 hover:underline"
            >
              payment
            </Link>{" "}
            yet, please proceed with the subscription to get full access.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
