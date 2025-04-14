import Image from "next/image";
import Link from "next/link";
import { BarChart3, LineChart, PieChart } from "lucide-react";
export default function Services() {
  const services = [
    {
      route: "business-strategy",
      title: "Certification",
      description:
        "Certification is a mark of commitment to sustainability, awarded to businesses actively working towards net zero emissions. Our certification recognizes companies that track, reduce, and offset their carbon footprint.",
      icon: <BarChart3 className="h-6 w-6 text-primary" />,
      image: "/asset/service1.png",
      alt: "Business professionals discussing strategy",
    },
    {
      route: "Consulting",
      title: "Business Planning",
      description:
        "Consulting service provides expert, data-driven guidance to help businesses identify and reduce their carbon emissions. Through personalized analysis, we pinpoint key emission sources and develop actionable strategies tailored to your operations.",
      icon: <LineChart className="h-6 w-6 text-primary" />,
      image: "/asset/service2.png",
      alt: "Business team in a planning meeting",
    },
    {
      route: "finances-guidance",
      title: "Constant Climate Updates",
      description:
        "Keep members informed with the latest verified climate news and environmental policy updates from around the world.",
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
                  className="min-h-[363px] hover:scale-105 duration-300 max-w-[370px] object-cover"
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
                  <h3 className="mb-3 text-center text-xl font-semibold">{service.title}</h3>

                  {/* Description */}
                  <p className="mb-6 text-gray-600 text-[12px] font-normal text-center">{service.description}</p>
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
