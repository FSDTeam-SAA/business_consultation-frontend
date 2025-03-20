import NextImage from "next/image";
import Link from "next/link";

const strategies = [
  {
    id: 1,
    title: "Business Analytics",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Market Research",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
  },
  {
    id: 3,
    title: "Financial Planning",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
  },
  {
    id: 4,
    title: "Strategic Development",
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
  },
];

export default function StrategiesSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-start justify-between md:flex-row md:items-center">
          <div>
            <div className="mb-6 inline-block rounded-full border border-[#09B850] bg-white px-4 py-1">
              <span className="text-sm font-medium text-[#09B850]">
                PORTFOLIO
              </span>
            </div>
            <h2 className="text-2xl font-bold text-[#033618] md:text-3xl">
              Proven Strategies for <br /> Business Growth
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="mt-4 rounded-md bg-[#09B850] px-6 py-3 font-medium text-white transition-colors hover:bg-[#09B850]/90 md:mt-0"
          >
            View Portfolio
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {strategies.map((strategy) => (
            <div
              key={strategy.id}
              className="group relative overflow-hidden rounded-lg"
            >
              <NextImage
                src={strategy.image || "/placeholder.svg"}
                alt={strategy.title}
                width={300}
                height={300}
                className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="font-semibold text-white">{strategy.title}</h3>
                <div className="mt-2 flex items-center">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 ${i < Math.floor(strategy.rating) ? "text-yellow-400" : "text-gray-300"}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-white">
                    {strategy.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
