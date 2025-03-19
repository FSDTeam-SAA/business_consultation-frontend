import { CircleDollarSign, TrendingUp, Award } from "lucide-react"
import NextImage from "next/image"

const reasons = [
  {
    id: 1,
    title: "Cost Saving Ideas",
    description: "Optimization options tailored to reduce spending and maximize efficiency.",
    icon: <CircleDollarSign className="h-10 w-10 text-[#09B850]" />,
  },
  {
    id: 2,
    title: "Grow Your Business",
    description: "Optimization options tailored to scale your business and increase revenue.",
    icon: <TrendingUp className="h-10 w-10 text-[#09B850]" />,
  },
  {
    id: 3,
    title: "Award Winning",
    description: "Optimization options tailored for excellence and recognized industry leadership.",
    icon: <Award className="h-10 w-10 text-[#09B850]" />,
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="inline-block bg-white px-4 py-1 rounded-full border border-[#09B850] mb-6">
              <span className="text-[#09B850] text-sm font-medium">WHY CHOOSE US</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-[#033618] mb-6">
              Why choose us
              <br />
              business solutions?
            </h2>

            <p className="text-gray-600 mb-8">
              Team is a diverse network of consultants and industry professionals with expertise in a range of areas. We
              work with companies of all sizes, from startups to large corporations, to help them grow and thrive.
            </p>

            <a
              href="/contact"
              className="bg-[#09B850] hover:bg-[#09B850]/90 text-white px-6 py-3 rounded-md font-medium transition-colors inline-block"
            >
              Contact Us Now
            </a>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {reasons.map((reason) => (
                <div key={reason.id} className="flex flex-col items-center text-center">
                  <div className="mb-4">{reason.icon}</div>
                  <h3 className="text-lg font-semibold text-[#033618] mb-2">{reason.title}</h3>
                  <p className="text-gray-600 text-sm">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <NextImage
              src="/placeholder.svg?height=600&width=500"
              alt="Business team meeting"
              width={500}
              height={600}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

