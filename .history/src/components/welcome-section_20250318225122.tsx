import NextImage from "next/image"

const serviceCards = [
  {
    id: 1,
    title: "About Business",
    description: "We provide expert advice to all businesses on growth, financial goals, and market research.",
    icon: "chart-bar",
  },
  {
    id: 2,
    title: "Advanced Analysis",
    description: "Sophisticated data analysis to identify opportunities and weaknesses in your business.",
    icon: "graph",
  },
  {
    id: 3,
    title: "Customer Insights",
    description: "Deep customer investigation and analysis to improve customer service and loyalty.",
    icon: "handshake",
  },
]

export default function WelcomeSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#033618] mb-4">Welcome to the Consultive</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are experts in the industry with over 10 years experience. What makes us unique is we give going to get
            right solution. Ready to join success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceCards.map((card) => (
            <div
              key={card.id}
              className="bg-white border border-gray-100 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {card.icon === "chart-bar" && (
                    <NextImage
                      src="/placeholder.svg?height=80&width=80"
                      alt="Chart icon"
                      width={80}
                      height={80}
                      className="rounded-md"
                    />
                  )}
                  {card.icon === "graph" && (
                    <NextImage
                      src="/placeholder.svg?height=80&width=80"
                      alt="Graph icon"
                      width={80}
                      height={80}
                      className="rounded-md"
                    />
                  )}
                  {card.icon === "handshake" && (
                    <NextImage
                      src="/placeholder.svg?height=80&width=80"
                      alt="Handshake icon"
                      width={80}
                      height={80}
                      className="rounded-md"
                    />
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#033618] mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

