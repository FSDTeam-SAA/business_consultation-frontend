import Image from "next/image";
import { ArrowRight } from "lucide-react";

// Portfolio gallery items with the provided images for the first 5 items
const portfolioItems = [
  {
    id: 1,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2099-VuBtXf6r1nB5GAcltrgXsWCucCB4zx.png", // Frame 99
    category: "Business",
    title: "Business Analytics",
  },
  {
    id: 2,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%20100-XD8HmVNmf2NRIJ9ESiQDD4NSE6IJNU.png", // Frame 100
    category: "Marketing",
    title: "Digital Marketing",
  },
  {
    id: 3,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%20101-xof2LW2Zwuq3Dvz0t73o8MilVS7X6f.png", // Frame 101
    category: "Finance",
    title: "Financial Planning",
  },
  {
    id: 4,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%20102-Aq9lFkSB1XRa2r03ipb8JVTY8vXJyp.png", // Frame 102
    category: "Strategy",
    title: "Strategic Planning",
  },
  {
    id: 5,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%20103-Bcoc0PkI4Ga98zxxbeN94FbAExNew5.png", // Frame 103
    category: "Operations",
    title: "Business Operations",
  },
  {
    id: 6,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%20102-Aq9lFkSB1XRa2r03ipb8JVTY8vXJyp.png",
    category: "Leadership",
    title: "Executive Coaching",
  },
  {
    id: 7,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2099-VuBtXf6r1nB5GAcltrgXsWCucCB4zx.png",
    category: "Technology",
    title: "Digital Transformation",
  },
  {
    id: 8,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%20101-xof2LW2Zwuq3Dvz0t73o8MilVS7X6f.png",
    category: "HR",
    title: "Talent Management",
  },
  {
    id: 9,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%20100-XD8HmVNmf2NRIJ9ESiQDD4NSE6IJNU.png",
    category: "Sales",
    title: "Sales Optimization",
  },
  {
    id: 10,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%20101-xof2LW2Zwuq3Dvz0t73o8MilVS7X6f.png",

    category: "Research",
    title: "Market Research",
  },
  {
    id: 11,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%20100-XD8HmVNmf2NRIJ9ESiQDD4NSE6IJNU.png",
    category: "Consulting",
    title: "Business Consulting",
  },
  {
    id: 12,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%20103-Bcoc0PkI4Ga98zxxbeN94FbAExNew5.png",
    category: "Innovation",
    title: "Product Innovation",
  },
];

export default function PortfolioPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">Our Portfolio</h1>
        <p className="max-w-2xl text-gray-600">
          Explore our comprehensive portfolio showcasing successful business
          strategies and solutions that have driven growth for our clients.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className="group relative overflow-hidden rounded-lg"
          >
            <div className="relative aspect-square">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute bottom-4 mx-auto translate-x-2/4 cursor-pointer rounded-md bg-white p-2 opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100">
              <div className="text-xs font-medium text-emerald-500">
                {item.category}
              </div>
              <div className="flex items-center font-medium text-gray-900">
                {item.title}
                <div className="ml-2 flex h-6 w-6 items-center justify-center rounded bg-emerald-500">
                  <ArrowRight className="h-4 w-4 -rotate-45 text-white" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
