"use client";

import type React from "react";

import { useState } from "react";
import { CheckIcon } from "lucide-react";
import { z } from "zod";

// Define the form schema using Zod
const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  challenge: z.string().min(1, { message: "This field is required" }),
  business: z.string().min(1, { message: "This field is required" }),
  callTime: z.string().min(1, { message: "This field is required" }),
});

// Type inference from the schema
type FormData = z.infer<typeof formSchema>;

export default function ConsultationPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    challenge: "",
    business: "",
    callTime: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {},
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const validateForm = () => {
    try {
      // Validate the form data against the schema
      formSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Convert Zod errors to a more usable format
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, proceed with submission
      console.log("Form submitted:", formData);
      // Reset form after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        challenge: "",
        business: "",
        callTime: "",
      });
    }
  };

  return (
    <div className="mx-auto mt-4 max-w-3xl rounded-lg border border-gray-200 p-4">
      {/* Main Content */}
      <div className="w-full">
        <h1 className="mb-4 text-center text-2xl font-bold">
          Get Free Consultation
        </h1>

        {/* Consultation Form */}
        <form onSubmit={handleSubmit} className="rounded-lg bg-green-500 p-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="mb-1 block text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`w-full rounded-md p-2 ${errors.name ? "border-2 border-red-500" : ""}`}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-200">{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="mb-1 block text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                className={`w-full rounded-md p-2 ${errors.email ? "border-2 border-red-500" : ""}`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-200">{errors.email}</p>
              )}
            </div>

            {/* Phone Number Field */}
            <div>
              <label htmlFor="phone" className="mb-1 block text-white">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your Number"
                className={`w-full rounded-md p-2 ${errors.phone ? "border-2 border-red-500" : ""}`}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-200">{errors.phone}</p>
              )}
            </div>

            {/* Business Nature Field */}
            <div>
              <label htmlFor="business" className="mb-1 block text-white">
                What&apos;s the nature of your business?
              </label>
              <input
                type="text"
                id="business"
                name="business"
                value={formData.business}
                onChange={handleChange}
                placeholder="Enter business"
                className={`w-full rounded-md p-2 ${errors.business ? "border-2 border-red-500" : ""}`}
              />
              {errors.business && (
                <p className="mt-1 text-sm text-red-200">{errors.business}</p>
              )}
            </div>

            {/* Challenge Field */}
            <div>
              <label htmlFor="challenge" className="mb-1 block text-white">
                What&apos;s your biggest challenge now?
              </label>
              <input
                type="text"
                id="challenge"
                name="challenge"
                value={formData.challenge}
                onChange={handleChange}
                placeholder="Your Number"
                className={`w-full rounded-md p-2 ${errors.challenge ? "border-2 border-red-500" : ""}`}
              />
              {errors.challenge && (
                <p className="mt-1 text-sm text-red-200">{errors.challenge}</p>
              )}
            </div>

            {/* Call Time Field */}
            <div>
              <label htmlFor="callTime" className="mb-1 block text-white">
                What&apos;s the best time to call you?
              </label>
              <input
                type="text"
                id="callTime"
                name="callTime"
                value={formData.callTime}
                onChange={handleChange}
                placeholder="Enter business"
                className={`w-full rounded-md p-2 ${errors.callTime ? "border-2 border-red-500" : ""}`}
              />
              {errors.callTime && (
                <p className="mt-1 text-sm text-red-200">{errors.callTime}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 w-full rounded-md bg-white py-3 font-semibold text-green-500 hover:bg-gray-100"
          >
            BOOK A CONSULTATION
          </button>
        </form>

        {/* Discussion Points */}
        <div className="mt-8">
          <h2 className="mb-4 text-center text-xl font-bold">
            Here What We Will Discuss:
          </h2>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <div className="mt-1 min-w-5">
                  <CheckIcon className="h-5 w-5 text-green-500" />
                </div>
                <p className="text-gray-700">
                  All the lorem ipsum generators on the internet tend to repeat
                  predefined chunks as necessary, making the first true
                  generator on internet.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
