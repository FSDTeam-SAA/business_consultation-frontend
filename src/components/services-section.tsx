import NextImage from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Commitment Badge",
    description: `Show the world you're taking real action on sustainability. With Going 2 Zero, every member receives a personalized Commitment Badge — a unique, verified symbol of your environmental efforts.
A Badge That Speaks Volumes
Whether you're reducing emissions, supporting climate projects, or improving your practices, your badge highlights your commitment in a simple, trusted way. Each badge comes with a custom code that can be easily added to your website, product packaging, marketing materials, and more.

Built for Trust
Your badge is a clear signal that your business is taking sustainability seriously. It’s more than just a logo — it’s a meaningful way to stand out, build trust, and show your values to customers, clients, and partners.`,
    image: "/asset/service1.png",
  },
  {
    id: 2,
    title: "Business Planning",
    description:
      "Detailed business planning for sustainable growth and success.",
    image: "/asset/service2.png",
  },
  {
    id: 3,
    title: "Financial Guidance",
    description: "Expert financial guidance for businesses and startups.",
    image: "/asset/service3.png",
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-gradient-to-b from-[#09B850] via-[#033618] to-[#062814] py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <div className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1">
            <span className="text-sm font-medium text-white">SERVICES</span>
          </div>
          <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl">
            We are dedicated to
            <br />
            serve you all time
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="overflow-hidden rounded-lg bg-white shadow-lg"
            >
              <div className="relative h-48">
                <NextImage
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-[#033618]">
                  {service.title}
                </h3>
                <p className="mb-4 text-gray-600">{service.description}</p>
                <Link
                  href={`/services/${service.id}`}
                  className="flex items-center font-medium text-[#09B850] hover:text-[#033618]"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
