import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function ServiceSection() {
  const services = [
    {
      title: "About Business",
      description: "We have built enviable reputation in all the consumer goods, Heavy industry, hightech",
      image: "/asset/about.png",
    },
    {
      title: "Advance Analytics",
      description:
        "Business analytics (BA) is the practice of iterative, methodical exploration of our organization's data emphasis.",
      image: "/asset/advance.png",
    },
    {
      title: "Customer Insights",
      description:
        "Customer Insight Analytics solution deliver targeted and actionable customer analysis that help financial.",
      image: "/asset/customer.png",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-600 max-w-5xl mx-auto">
        At Going2Zero, we help businesses take real action toward achieving net zero. Through our innovative AI-powered platform, we provide businesses with the tools to measure, track, and reduce their carbon footprint. Our three-step approach—emissions tracking, personalized consulting, and carbon offsetting—makes sustainability simple, accessible, and effective.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {services.map((service, index) => (
          <Card key={index} className="overflow-hidden rounded-none shadow-none border-none flex flex-col h-full">
           <div className="relative h-64 w-full max-w-[370px] mx-auto overflow-hidden group">
      <Image
        src={service.image || "/placeholder.svg"}
        alt={service.title}
        fill
        className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
      />
    </div>
           <div className="z-40 border-2 max-w-[340px] mx-auto mt-[-20px] border-t-0">
           <div className="border-t-4 border-green-500 max-w-[340px] mx-auto  z-40 bg-white">
           <CardHeader className="pb-2 ">
              <CardTitle className="text-xl text-center">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center flex-grow">
              <p className="text-gray-600">{service.description}</p>
            </CardContent>
           </div>
           </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

