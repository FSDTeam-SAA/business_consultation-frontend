import Image from "next/image";
import Link from "next/link";
import { BarChart3, LineChart, PieChart } from "lucide-react";
export default function Services() {
  const services = [
    {
      route: "business-strategy",
      title: "Business Strategy",
      description:
        "We focus on the best practices for it solutions and services.",
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      image: "/asset/service1.png",
      alt: "Business professionals discussing strategy",
    },
    {
      route: "business-planning",
      title: "Business Planning",
      description:
        "We focus on the best practices for it solutions and services.",
      icon: <LineChart className="h-6 w-6 text-primary" />,
      image: "/asset/service2.png",
      alt: "Business team in a planning meeting",
    },
    {
      route: "finances-guidance",
      title: "Finances Guidance",
      description:
        "We focus on the best practices for it solutions and services.",
      icon: <PieChart className="h-6 w-6 text-primary" />,
      image: "/asset/service3.png",
      alt: "Business professionals discussing finances",
    },
  ];

  return (
    <section className="w-full bg-[#033618] py-12">
      <div className="container mx-auto px-4">
        {/* Services Header */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center rounded-lg border border-white bg-white/10 px-4 py-1">
            <span className="font-medium text-white">• SERVICES</span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="mb-12 text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white md:text-4xl">
            We are dedicated to <br /> serve you all time
          </h2>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 justify-items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg md:min-w-[370px]"
            >
              {/* Card Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.alt}
                  fill
                  className="min-h-[363px] max-w-[370px] object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="z-20 mx-auto flex max-w-[303px] flex-grow flex-col rounded-md bg-white">
                <div className="border-b-2 p-6">
                  {/* Icon */}
                  <div className="mx-auto mb-4 mt-[-40px] flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-lg">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-xl font-bold">{service.title}</h3>

                  {/* Description */}
                  <p className="mb-6 text-gray-600">{service.description}</p>
                </div>
                {/* Read More Link - pushes to bottom with flex-grow above */}
                <div className="mx-auto mt-auto py-2">
                  <Link
                    href={`/service/${service.route}`}
                    className="mx-auto inline-flex items-center text-center font-medium text-gray-800 transition-colors hover:text-green-700"
                  >
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-4 w-4 -rotate-45"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
