import NextImage from "next/image"
import Link from "next/link"

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
]

export default function StrategiesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <div className="inline-block bg-white px-4 py-1 rounded-full border border-[#09B850] mb-6">
              <span className="text-[#09B850] text-sm font-medium">STRATEGIES</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#033618]">
              Proven Strategies for
              <br />
              Business Growth
            </h2>
          </div>
          <Link
            href="/strategies"
            className="bg-[#09B850] hover:bg-[#09B850]/90 text-white px-6 py-3 rounded-md font-medium transition-colors mt-4 md:mt-0"
          >
            View All Strategies
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strategies.map((strategy) => (
            <div key={strategy.id} className="group relative overflow-hidden rounded-lg">
              <NextImage
                src={strategy.image || "/placeholder.svg"}
                alt={strategy.title}
                width={300}
                height={300}
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h3 className="text-white font-semibold">{strategy.title}</h3>
                <div className="flex items-center mt-2">
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
                  <span className="text-white text-sm ml-2">{strategy.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

