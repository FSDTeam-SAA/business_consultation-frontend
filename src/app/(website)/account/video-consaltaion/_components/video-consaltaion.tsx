/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { CheckIcon } from "lucide-react";
import { z } from "zod";
import { useAuth } from "@/hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

// Zod validation schema matching backend field names
const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Invalid email address" }),
  phone_number: z.string().min(1, { message: "Phone number is required" }),
  biggest_challenge: z.string().min(1, { message: "This field is required" }),
  business_nature: z.string().min(1, { message: "This field is required" }),
  best_time_to_call: z.string().min(1, { message: "This field is required" }),
});

type FormData = z.infer<typeof formSchema>;

export default function ConsultationPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone_number: "",
    biggest_challenge: "",
    business_nature: "",
    best_time_to_call: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {},
  );
  const { user }: any = useAuth();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = sessionStorage.getItem("authToken");
    setToken(storedToken);
  }, []);

  const checkoutMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/payment/checkout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            amount: 350,
            subscriptionType: "Consultation",
            email: user?.email,
          }),
        },
      );

      if (!response.ok) throw new Error("Failed to process payment");

      return response.json();
    },
    onSuccess: (data) => {
      if (data?.data?.url) {
        window.location.href = data.data.url;
      }
    },
    onError: (error) => {
      console.error("Payment error:", error);
    },
  });

  const formMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/consultation/booking`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
          body: JSON.stringify({ ...data, bookingType: "paid" }),
        },
      );

      if (!res.ok) throw new Error("Failed to submit form");

      return res.json();
    },
    onSuccess: (data) => {
      toast.success(data.message);
      setFormData({
        name: "",
        email: "",
        phone_number: "",
        business_nature: "",
        biggest_challenge: "",
        best_time_to_call: "",
      });
      checkoutMutation.mutate();
    },
    onError: (err) => {
      console.error("Error submitting form:", err);
    },
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      formMutation.mutate(formData);
    }
  };

  return (
    <div className="mx-auto mt-4 max-w-3xl rounded-lg border border-gray-200 p-4">
      {!user?.isEmissionSubmitted && (
        <p className="mb-5 text-center text-red-700">
          Please Submited your Emission Form{" "}
        </p>
      )}
      <h1 className="mb-10 text-center text-3xl font-bold">
        Consultation Fee Per Hour $350
        <p className="text-center text-[14px] font-normal">
          Consultation Fee $350 per hour
        </p>
      </h1>

      <form onSubmit={handleSubmit} className="rounded-lg bg-green-500 p-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {[
            {
              label: "Name",
              key: "name",
              type: "text",
              placeholder: "Your Name",
            },
            {
              label: "Email",
              key: "email",
              type: "email",
              placeholder: "Your Email",
            },
            {
              label: "Phone Number",
              key: "phone_number",
              type: "text",
              placeholder: "Your Number",
            },
            {
              label: "Business Nature",
              key: "business_nature",
              type: "text",
              placeholder: "Nature of Business",
            },
            {
              label: "Biggest Challenge",
              key: "biggest_challenge",
              type: "text",
              placeholder: "Your Challenge",
            },
            {
              label: "Best Time to Call",
              key: "best_time_to_call",
              type: "date",
              placeholder: "",
            },
          ].map(({ label, key, type, placeholder }) => (
            <div key={key}>
              <label htmlFor={key} className="mb-1 block text-white">
                {label}
              </label>
              <input
                type={type}
                id={key}
                name={key}
                value={(formData as any)[key]}
                onChange={handleChange}
                // disabled={
                //   user?.videoConsultation || user?.isEmissionSubmitted === false
                // }
                placeholder={placeholder}
                className={`w-full rounded-md ${user?.videoConsultation || user?.isEmissionSubmitted === false ? "" : "bg-white"} p-2 ${errors[key as keyof FormData] ? "border-2 border-red-300" : ""}`}
              />
              {errors[key as keyof FormData] && (
                <p className="mt-1 text-sm text-red-500">
                  {errors[key as keyof FormData]}
                </p>
              )}
            </div>
          ))}
        </div>

        <button
          type="submit"
          disabled={!user?.isEmissionSubmitted}
          // className={`mt-6 w-full rounded-md py-3 font-semibold text-green-500 ${
          //   user?.videoConsultation || user?.isEmissionSubmitted === false
          //     ? "cursor-not-allowed bg-white text-gray-500"
          //     : "bg-white hover:bg-gray-100"
          // }`}
          className={`mt-6 w-full ${user?.isEmissionSubmitted  ? "cursor-pointer" : "cursor-not-allowed"}  rounded-md bg-white py-3 font-semibold text-green-500 hover:bg-gray-100`}
        >
          {formMutation.isPending
            ? "Please wait"
            : "BOOK A CONSULTATION WITH PAYMENT"}
        </button>
      </form>

      {/* <div className="mb-10 mt-10 flex h-[52px] items-center justify-center rounded-md bg-[#09B850]"> */}
      {/* <button
          disabled={!user?.videoConsultation}
          onClick={() => user && checkoutMutation.mutate()}
          className="text-white disabled:opacity-50"
        >
          <p className="flex gap-3">
            <CreditCard />
            <span>Pay Now</span>
          </p>
        </button> */}
      {/* </div> */}

      <div className="mt-4 space-y-4">
        <div className="flex items-start gap-2">
          <div className="mt-1 min-w-5">
            <CheckIcon className="h-5 w-5 text-green-500" />
          </div>
          <p className="text-gray-700">
            A thorough review of your business operations to identify key
            opportunities for reducing emissions.
          </p>
        </div>
        <div className="flex items-start gap-2">
          <div className="mt-1 min-w-5">
            <CheckIcon className="h-5 w-5 text-green-500" />
          </div>
          <p className="text-gray-700">
            Clear, step-by-step guidance provided during the consultation call,
            covering each area of your emissions and how to reduce them
            effectively.
          </p>
        </div>
      </div>
    </div>
  );
}
