// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import Image from "next/image";
// import SearchComponent from "../search";

export default function ServiceSection() {
  // const services = [
  //   {
  //     title: "About Business",
  //     description:
  //       "We have built enviable reputation in all the consumer goods, Heavy industry, hightech",
  //     image: "/asset/about.png",
  //   },
  //   {
  //     title: "Advance Analytics",
  //     description:
  //       "Business analytics (BA) is the practice of iterative, methodical exploration of our organization's data emphasis.",
  //     image: "/asset/advance.png",
  //   },
  //   {
  //     title: "Customer Insights",
  //     description:
  //       "Customer Insight Analytics solution deliver targeted and actionable customer analysis that help financial.",
  //     image: "/asset/customer.png",
  //   },
  // ];

  return (
    <section className="container mx-auto px-4 py-10">
      {/* <SearchComponent /> */}
      <div className="mb-6 mt-10 flex items-center justify-center">
        <span className="inline-block rounded-md border border-green-500 px-3 py-1 text-[16px] font-semibold text-green-500">
          • ABOUT US
        </span>
      </div>
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Welcome to Going 2 Zero</h1>
        <p className="text-center text-lg font-normal text-[#595959]">
          At Going 2 Zero, we help businesses take real action toward achieving
          net zero. Through our innovative AI-powered platform, we provide
          businesses with the tools to measure, track, and reduce their carbon
          footprint. Our three-step approach—emissions tracking, personalized
          consulting, and carbon offsetting—makes sustainability simple,
          accessible, and effective. We believe that every business, no matter
          its size, can play a role in fighting climate change. By staying ahead
          of green regulations and offering tailored solutions, we empower
          companies to make meaningful progress while unlocking opportunities
          for growth and compliance.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <h1 className="text-[32px] font-semibold">Our mission</h1>
          <p className="text-[16px] font-normal">
            We believe in a future where business and climate action go hand in
            hand. Our mission is to help protect the planet by driving real
            commitments to net zero. We’re motivated by the urgency of the
            climate crisis and the belief that every company has a role to play.
            By supporting bold, science-based action today, we aim to create a
            more sustainable, resilient world for generations to come.
          </p>
        </div>
        {/* <div className="flex flex-col gap-3">
          <h1 className="text-[32px] font-semibold">Our Goal</h1>
          <p className="text-[16px] font-normal">
            To become the leading force in accelerating the global shift to net
            zero by certifying and empowering businesses that are truly
            committed to climate action
          </p>
        </div> */}
      </div>

      {/* <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
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
      {/* <div className="absolute bottom-0 left-0 right-0 z-40 mx-auto max-w-[340px] translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-hover:shadow-xl">
                <div className="border-t-4 border-green-500 bg-white">
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
          </Card>
        ))}
      </div>  */}
    </section>
  );
}
