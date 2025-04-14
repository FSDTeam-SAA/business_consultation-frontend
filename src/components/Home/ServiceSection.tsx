import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function ServiceSection() {
  const services = [
    {
      title: "About Business",
      description:
        "We have built enviable reputation in all the consumer goods, Heavy industry, hightech",
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
  ];

  return (
    <section className="container mx-auto px-4 py-12">
<<<<<<< HEAD
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Welcome to the Consultive</h1>
        <p className="mx-auto max-w-3xl text-lg text-gray-600">
          We are experts in this industry with over 100 years experience. What
          that means is you are going to get right solution. Please find our
          services.
=======
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-600 max-w-5xl mx-auto">
        At Going2Zero, we help businesses take real action toward achieving net zero. Through our innovative AI-powered platform, we provide businesses with the tools to measure, track, and reduce their carbon footprint. Our three-step approach—emissions tracking, personalized consulting, and carbon offsetting—makes sustainability simple, accessible, and effective.
>>>>>>> 6acee5d5d733e770c8ccbae519ec218b1a2f10d0
        </p>
      </div>

      {/* <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
<<<<<<< HEAD
          <Card
            key={index}
            className="flex h-full flex-col overflow-hidden rounded-none border-none shadow-none"
          >
            <div className="relative mx-auto h-64 w-full max-w-[370px]">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="z-40 mx-auto mt-[-20px] max-w-[340px] border-2 border-t-0">
              <div className="z-40 mx-auto max-w-[340px] border-t-4 border-green-500 bg-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-center text-xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow text-center">
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div> */}

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Card
            key={index}
            className="flex h-full flex-col overflow-hidden rounded-none border-none shadow-none"
          >
            <div className="group relative mx-auto h-64 w-full max-w-[370px]">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                fill
                className="object-cover"
              />

              {/* Slide-up content on hover */}
              <div className="absolute bottom-0 left-0 right-0 z-40 mx-auto max-w-[340px] translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-hover:shadow-xl">
                <div className="border-t-4 border-green-500 bg-white ">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-center text-xl">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow text-center">
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </div>
              </div>
            </div>
=======
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
>>>>>>> 6acee5d5d733e770c8ccbae519ec218b1a2f10d0
          </Card>
        ))}
      </div>
    </section>
  );
}
