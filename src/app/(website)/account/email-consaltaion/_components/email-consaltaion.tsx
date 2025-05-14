"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { CheckIcon } from "lucide-react";
import {  z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { useAuth } from "@/hooks/useAuth";

// Define the form schema using Zod
const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  phone_number: z.string().min(1, { message: "Phone number is required" }),
  biggest_challenge: z.string().min(1, { message: "This field is required" }),
  business_nature: z.string().min(1, { message: "This field is required" }),
  best_time_to_call: z.number().optional(),
  bookingType:z.string()
});

type FormData = z.infer<typeof formSchema>;

export default function ConsultationPage() {
  const [token, setToken] = useState<string | null>(null);
  const { user } = useAuth();
  useEffect(() => {
    const storedToken = sessionStorage.getItem("authToken");
    const localStoredToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
    } else {
      setToken(localStoredToken);
    }
  }, []);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone_number: "",
    biggest_challenge: "",
    business_nature: "",
    best_time_to_call: Date.now(),
    bookingType:'free'
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {},
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = () => {
    try {
      formSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof FormData, string>> = {};
        error.errors.forEach((err) => {
          const field = err.path[0] as keyof FormData;
          fieldErrors[field] = err.message;
        });
        setErrors(fieldErrors);
      }
      return false;
    }
  };

  const mutation = useMutation({
    mutationFn: async (data: FormData) => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/consultation/booking`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          body: JSON.stringify(data),
        },
      );

      if (!res.ok) {
        throw new Error("Failed to submit form");
      }

      return res.json();
    },
    onSuccess: (data) => {
      console.log("Form submitted successfully:", data);
      toast.success(data.message);
      setFormData({
        name: "",
        email: "",
        phone_number: "",
        biggest_challenge: "",
        business_nature: "",
        best_time_to_call: Date.now(),
        bookingType:'free'
      });
    },
    onError: (err) => {
      console.error("Error submitting form:", err);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      mutation.mutate(formData);
    }
  };

  return (
    <div className="mx-auto mt-4 max-w-3xl rounded-lg border border-gray-200 p-4">
      {!user?.isEmissionSubmitted && (
        <p className="mb-5 text-center text-red-700">
          Please Submited your Emission Form{" "}
        </p>
      )}
      <h1 className="mb-4 text-center text-2xl font-bold">
        Get Free Consultation
      </h1>
      <div className="w-full">
        <form onSubmit={handleSubmit} className="rounded-lg bg-green-500 p-4">
          <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-medium text-white"
              >
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                disabled={!user?.isEmissionSubmitted}
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`w-full rounded-md p-2 ${errors.name ? "border-2 border-red-300" : ""}`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-medium text-white"
              >
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                disabled={!user?.isEmissionSubmitted}
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className={`w-full rounded-md p-2 ${errors.email ? "border-2 border-red-300" : ""}`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            {/*  Your Subject */}
            <div>
              <label
                htmlFor="business_nature"
                className="mb-2 block font-medium text-white"
              >
                Your Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="business_nature"
                name="business_nature"
                disabled={!user?.isEmissionSubmitted}
                value={formData.business_nature}
                onChange={handleChange}
                placeholder="Enter Subject"
                className={`w-full rounded-md p-2 ${errors.business_nature ? "border-2 border-red-300" : ""}`}
              />
              {errors.business_nature && (
                <p className="mt-1 text-sm text-red-500">{errors.business_nature}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone_number"
                className="mb-2 block font-medium text-white"
              >
                Contact Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="phone_number"
                name="phone_number"
                disabled={!user?.isEmissionSubmitted}
                value={formData.phone_number}
                onChange={handleChange}
                placeholder="Your Number"
                className={`w-full rounded-md p-2 ${errors.phone_number ? "border-2 border-red-300" : ""}`}
              />
              {errors.phone_number && (
                <p className="mt-1 text-sm text-red-500">{errors.phone_number}</p>
              )}
            </div>

            {/* Challenge */}

            {/* Call Time */}
            {/* <div>
              <label htmlFor="callTime" className="mb-1 block text-white">
                What&apos;s the best time to call you?
              </label>
              <input
                type="date"
                id="callTime"
                name="callTime"
                disabled={!user?.isEmissionSubmitted}
                value={formData.callTime}
                onChange={handleChange}
                className={`w-full rounded-md p-2 text-green-600 ${errors.callTime ? "border-2 border-red-300" : ""}`}
              />
              {errors.callTime && (
                <p className="mt-1 text-sm text-red-500">{errors.callTime}</p>
              )}
            </div> */}
          </div>
          <div>
            <label
              htmlFor="biggest_challenge"
              className="mb-2 block font-medium text-white"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="biggest_challenge"
              name="biggest_challenge"
              disabled={!user?.isEmissionSubmitted}
              value={formData.biggest_challenge}
              onChange={handleChange}
              placeholder="Enter Message"
              className={`w-full rounded-md p-2 ${errors.biggest_challenge ? "border-2 border-red-300" : ""}`}
            />
            {errors.biggest_challenge && (
              <p className="mt-1 text-sm text-red-500">{errors.biggest_challenge}</p>
            )}
          </div>

          <button
            disabled={!user?.isEmissionSubmitted}
            type="submit"
            className={`mt-6 w-full ${user?.isEmissionSubmitted ? "cursor-pointer" : "cursor-not-allowed"} rounded-md bg-white py-3 font-semibold text-green-500 hover:bg-gray-100`}
          >
            {mutation.isPending ? "Please wait" : "BOOK A  CONSULTATION"}
          </button>
        </form>

        {/* Discussion Points */}
        <div className="mt-8">
          <h2 className="mb-4 text-center text-xl font-bold">
            Here What We Will Discuss:
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-2">
              <div className="mt-1 min-w-5">
                <CheckIcon className="h-5 w-5 text-green-500" />
              </div>
              <p className="text-gray-700">
                A brief overview of your business&apos;s emissions based on the
                information you provide.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-1 min-w-5">
                <CheckIcon className="h-5 w-5 text-green-500" />
              </div>
              <p className="text-gray-700">
                General suggestions and initial steps you can take to start
                reducing emissions all delivered by email at no cost.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
