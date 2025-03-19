import Image from "next/image"
import Link from "next/link"
import { BarChart3, LineChart, PieChart } from "lucide-react"

export default function Services() {
  const services = [
    {
      title: "Business Strategy",
      description: "We focus on the best practices for it solutions and services.",
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
      image: "/asset/service1.png",
      alt: "Business professionals discussing strategy",
    },
    {
      title: "Business Planning",
      description: "We focus on the best practices for it solutions and services.",
      icon: <LineChart className="w-6 h-6 text-primary" />,
      image: "/asset/service2.png",
      alt: "Business team in a planning meeting",
    },
    {
      title: "Finances Guidance",
      description: "We focus on the best practices for it solutions and services.",
      icon: <PieChart className="w-6 h-6 text-primary" />,
      image: "/asset/service3.png",
      alt: "Business professionals discussing finances",
    },
  ]

  return (
    <section className="w-full py-12 bg-[#033618]">
      <div className="container px-4 mx-auto">
        {/* Services Header */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center px-4 py-1 rounded-lg border border-white bg-white/10">
            <span className="text-white font-medium">• SERVICES</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white max-w-2xl mx-auto">
            We are dedicated to <br /> serve you all time
          </h2>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className=" rounded-lg  max-w-[370px] flex flex-col">
              {/* Card Image */}
              <div className="relative h-48 w-full">
                <Image src={service.image || "/placeholder.svg"} alt={service.alt} fill className="object-cover max-w-[370px] min-h-[363px]" />
              </div>

              {/* Card Content */}
              <div className=" flex flex-col flex-grow z-20 bg-white max-w-[303px] mx-auto rounded-md">
              <div className="p-6 border-b-2">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full mx-auto mt-[-40px] bg-white shadow-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-600 mb-6">{service.description}</p>

              </div>
                {/* Read More Link - pushes to bottom with flex-grow above */}
                <div className="mt-auto mx-auto py-2 ">
                  <Link
                    href="#"
                    className="inline-flex items-center  mx-auto text-center  text-gray-800 font-medium hover:text-green-700 transition-colors"
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2 -rotate-45"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

