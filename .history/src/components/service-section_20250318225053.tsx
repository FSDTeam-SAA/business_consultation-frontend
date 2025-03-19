import NextImage from "next/image"
import Link from "next/link"

const services = [
  {
    id: 1,
    title: "Business Strategy",
    description: "Comprehensive strategy planning for businesses and startups.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Business Planning",
    description: "Detailed business planning for sustainable growth and success.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Financial Guidance",
    description: "Expert financial guidance for businesses and startups.",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-[#09B850] via-[#033618] to-[#062814]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-white/10 px-4 py-1 rounded-full border border-white/20 mb-6">
            <span className="text-white text-sm font-medium">SERVICES</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            We are dedicated to
            <br />
            serve you all time
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-48">
                <NextImage
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#033618] mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={`/services/${service.id}`}
                  className="text-[#09B850] hover:text-[#033618] font-medium flex items-center"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

