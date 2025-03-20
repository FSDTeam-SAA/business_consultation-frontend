"use client"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
// Define the form schema with Zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  phone: z.string().optional(),
})

// Define the type based on the schema
type FormValues = z.infer<typeof formSchema>

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  // Initialize React Hook Form with Zod validation
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
    },
  })

  // Form submission handler
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)

    try {
      // Log the form data to console
      console.log("Form submitted with data:", data)



      // Reset the form
      reset()
    } catch (error) {
      console.error("Error submitting form:", error)
   
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
   <div>
     <div className="max-w-7xl mx-auto p-4 md:p-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Side - Contact Form */}
        <div className="flex-1 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <div className="inline-block mb-4">
            <span className="text-emerald-500 font-medium border border-emerald-500 rounded-md px-4 py-1">
              • Contact Us
            </span>
          </div>

          <h1 className="text-4xl font-bold mb-4">Get in touch</h1>

          <p className="text-gray-700 mb-8">
            Let us know who you are and what you`&apos;`re looking for below, and we`&apos;`ll get back to you within 24 hours.
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block font-medium mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name here"
                  className={`w-full p-3 border rounded-md ${errors.name ? "border-red-500" : "border-gray-300"}`}
                  {...register("name")}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block font-medium mb-2">
                  Your Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Your mail here"
                  className={`w-full p-3 border rounded-md ${errors.email ? "border-red-500" : "border-gray-300"}`}
                  {...register("email")}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label htmlFor="subject" className="block font-medium mb-2">
                  Your Subject <span className="text-red-500">*</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Tell us a few words"
                  className={`w-full p-3 border rounded-md ${errors.subject ? "border-red-500" : "border-gray-300"}`}
                  {...register("subject")}
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block font-medium mb-2">
                  Contact Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Your contact here"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  {...register("phone")}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-md font-medium disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>



        {/* Right Side - Contact Information */}
        <div className="md:w-[450px] bg-emerald-50 p-8 rounded-lg flex flex-col justify-between">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="bg-emerald-100 p-4 rounded-full mb-4">
              <Mail className="h-6 w-6 text-emerald-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email Address</h3>
            <p className="text-gray-700">example@gmail.com</p>
          </div>

          <div className="border-t border-gray-400 my-4 mx-8" />

          <div className="flex flex-col items-center text-center mb-12">
            <div className="bg-emerald-100 p-4 rounded-full mb-4">
              <Phone className="h-6 w-6 text-emerald-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-700">(254) 125 452 587</p>
          </div>

          <div className="border-t border-gray-400 my-4 mx-8" />

          <div className="flex flex-col items-center text-center">
            <div className="bg-emerald-100 p-4 rounded-full mb-4">
              <MapPin className="h-6 w-6 text-emerald-500" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Office Location</h3>
            <p className="text-gray-700">44 Your address, United State</p>
          </div>
        </div>
      </div>


    </div>
        {/* map  */}
    <div className="py-16">
   
   <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7442091.00120873!2d-101.53139790392929!3d40.01564936580569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1742456496888!5m2!1sen!2sbd"
    width="100%"
    height="450"
    style={{ border: 0 }}
    
    loading="lazy"
  ></iframe>



    </div>
   </div>
  )
}

