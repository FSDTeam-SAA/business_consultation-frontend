"use client";

import { Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Textarea } from "../ui/textarea";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
// Define the form schema with Zod
//ame user ke ke information pathabo
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters" }),
  phone: z.string().optional(),
  message: z.string().optional(),
});

// Define the type based on the schema
type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      phone: "",
      message: "",
    },
  });

  const { mutate: submitContact, isPending } = useMutation({
    mutationFn: async (data: FormValues) => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again.");
      }

      return response.json();
    },
    onSuccess: () => {
      toast.success("Message sent successfully!");
      reset();
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      toast.error(error.message || "Something went wrong.");
    },
  });

  const onSubmit = (data: FormValues) => {
    submitContact(data);
  };

  return (
    <div>
      <div className="mx-auto mb-5 max-w-7xl p-4 md:p-8">
        <div className="flex flex-col gap-6 md:flex-row">
          {/* Left Side - Contact Form */}
          <div className="flex-1 rounded-lg border border-gray-100 bg-white p-8 shadow-sm">
            <div className="mb-4 inline-block">
              <span className="rounded-md border border-emerald-500 px-4 py-1 font-medium text-emerald-500">
                • Contact Us
              </span>
            </div>

            <h1 className="mb-4 text-4xl font-bold">Get in touch</h1>

            <p className="mb-8 text-gray-700">
              Let us know who you are and what you&apos;re looking for below,
              and we&apos;ll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block font-medium">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name here"
                    className={`w-full rounded-md border p-3 ${errors.name ? "border-red-500" : "border-gray-300"}`}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block font-medium">
                    Your Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your mail here"
                    className={`w-full rounded-md border p-3 ${errors.email ? "border-red-500" : "border-gray-300"}`}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="subject" className="mb-2 block font-medium">
                    Your Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Tell us a few words"
                    className={`w-full rounded-md border p-3 ${errors.subject ? "border-red-500" : "border-gray-300"}`}
                    {...register("subject")}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block font-medium">
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Your contact here"
                    className="w-full rounded-md border border-gray-300 p-3"
                    {...register("phone")}
                  />
                </div>
              </div>
              <div className="mb-5">
                <label htmlFor="message" className="mb-2 block font-medium">
                  Message <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="message"
                  placeholder="Write here..."
                  className={`w-full rounded-md border p-3 ${errors.message ? "border-red-500" : "border-gray-300"}`}
                  {...register("message")}
                />
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="rounded-md bg-[#09B850] px-6 py-3 font-medium text-white hover:bg-emerald-600 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isPending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Right Side - Contact Information */}
          <div className="flex flex-col justify-between rounded-lg bg-emerald-50 p-8 md:w-[450px]">
            <div className="mb-12 flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-emerald-100 p-4">
                <Mail className="h-6 w-6 text-emerald-500" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Email Address</h3>
              <p className="text-gray-700">info@going2zero.com</p>
            </div>

            <div className="mx-8 my-4 border-t border-gray-400" />

            <div className="mb-12 flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-emerald-100 p-4">
                <Phone className="h-6 w-6 text-emerald-500" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Phone</h3>
              <p className="text-gray-700">(254) 125 452 587</p>
            </div>

            <div className="mx-8 my-4 border-t border-gray-400" />

            {/* <div className="flex flex-col items-center text-center">
              <div className="mb-4 rounded-full bg-emerald-100 p-4">
                <MapPin className="h-6 w-6 text-emerald-500" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Office Location</h3>
              <p className="text-gray-700">44 Your address, United State</p>
            </div> */}
          </div>
        </div>
      </div>
      {/* map  */}
      {/* <div className="py-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7442091.00120873!2d-101.53139790392929!3d40.01564936580569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1742456496888!5m2!1sen!2sbd"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div> */}
    </div>
  );
}
