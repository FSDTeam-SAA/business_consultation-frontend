"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// Portfolio items data with the provided images
const portfolioItems = [
  {
    id: 1,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2099-VuBtXf6r1nB5GAcltrgXsWCucCB4zx.png", // Frame 99
    category: "Business",
    title: "Business Analytics",
    href: "/portfolio/business-analytics",
  },
  {
    id: 2,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%20100-XD8HmVNmf2NRIJ9ESiQDD4NSE6IJNU.png", // Frame 100
    category: "Marketing",
    title: "Digital Marketing",
    href: "/portfolio/digital-marketing",
  },
  {
    id: 3,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%20101-xof2LW2Zwuq3Dvz0t73o8MilVS7X6f.png", // Frame 101
    category: "Finance",
    title: "Financial Planning",
    href: "/portfolio/financial-planning",
  },
  {
    id: 4,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%20102-Aq9lFkSB1XRa2r03ipb8JVTY8vXJyp.png", // Frame 102
    category: "Strategy",
    title: "Strategic Planning",
    href: "/portfolio/strategic-planning",
  },
  {
    id: 5,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%20103-Bcoc0PkI4Ga98zxxbeN94FbAExNew5.png", // Frame 103
    category: "Operations",
    title: "Business Operations",
    href: "/portfolio/business-operations",
  },
];

export function PortfolioCarousel() {
  return (
    <section className="w-full bg-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 flex flex-col items-start justify-between md:flex-row md:items-center">
          <div>
            <Link
              href="/portfolio"
              className="mb-4 inline-flex items-center rounded-full border border-emerald-500 bg-white px-4 py-1 text-sm font-medium text-emerald-500"
            >
              • PORTFOLIO
            </Link>
            <h2 className="max-w-md text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Proven Strategies for Business Growth
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="mt-4 inline-flex items-center justify-center rounded-md bg-emerald-500 px-6 py-3 font-medium text-white transition-colors hover:bg-emerald-600 md:mt-0"
          >
            View Portfolio
          </Link>
        </div>

        {/* Fixed carousel showing all 5 items at once */}
        <div className="w-full overflow-hidden">
          <div className="flex flex-nowrap gap-4">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="relative w-full flex-none sm:w-1/2 md:w-1/3 lg:w-1/5"
              >
                <div className="group relative h-72 overflow-hidden rounded-lg">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-4 rounded-md bg-white p-2 opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100">
                    <div className="text-xs font-medium text-emerald-500">
                      {item.category}
                    </div>
                    <div className="flex items-center font-medium text-gray-900">
                      {item.title}
                      <div className="ml-2 flex h-6 w-6 items-center justify-center rounded bg-emerald-500">
                        <ArrowRight className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
