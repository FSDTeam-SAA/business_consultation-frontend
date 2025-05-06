// import Image from "next/image";
import AboutUsSection from "../Home/AboutUsSection";
import ServiceSection from "../Home/ServiceSection";
// import { Button } from "@/components/ui/button";

export function AboutBusiness() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      {/* <div className="mb-16 flex flex-col gap-8 lg:flex-row">
        <div className="lg:w-1/2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rectangle%2020-avmv2FIrFBEiYyL7l3EtY7EQ0eg7Dq.png"
            alt="Business meeting"
            width={500}
            height={500}
            className="h-auto w-full rounded-md object-cover"
          />
        </div>
        <div className="lg:w-1/2">
          <div className="mb-4 inline-block rounded-full border border-green-500 px-3 py-1 text-sm font-medium text-emerald-600">
            • About Business
          </div>
          <h2 className="mb-4 text-4xl font-bold">
            Creative agency and their best solution
          </h2>
          <p className="mb-6 text-gray-600 text-justify">
          At Going2Zero, we help businesses take real action toward achieving net zero. Through our innovative AI-powered platform, we provide businesses with the tools to measure, track, and reduce their carbon footprint. Our three-step approach—emissions tracking, personalized consulting, and carbon offsetting—makes sustainability simple, accessible, and effective. We believe that every business, no matter its size, can play a role in fighting climate change. By staying ahead of green regulations and offering tailored solutions, we empower companies to make meaningful progress while unlocking opportunities for growth and compliance.
          </p>
          <Button className="rounded-md bg-emerald-500 px-6 text-white hover:bg-emerald-600">
            Read More
          </Button>
        </div>
      </div> */}
      <div>
        <ServiceSection />
      </div>
      <div>
        <AboutUsSection />
      </div>
      {/* <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 text-2xl">
              <Image
                width={64}
                height={64}
                src="/asset/number1.png"
                alt="number image"
              />
            </div>
            <h3 className="mb-2 text-xl font-bold">Business Planning</h3>
          </div>
          <div>
            <p className="text-gray-600">
              Duis aute irure dolor in rere henderit in volua sintocaecat
              cupidatat non proent sun irem frinillamassa dignssim noner manis
              denis
            </p>
          </div>
        </div>

        <div className="">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 text-2xl">
              <Image
                width={64}
                height={64}
                src="/asset/numbere2.png"
                className=""
                alt="number image"
              />
            </div>
            <h3 className="mb-2 mr-6 text-xl font-bold">Business Planning</h3>
          </div>
          <div>
            <p className="text-gray-600">
              Duis aute irure dolor in rere henderit in volua sintocaecat
              cupidatat non proent sun irem frinillamassa dignssim noner manis
              denis
            </p>
          </div>
        </div>

        <div className="">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 text-2xl">
              <Image
                width={64}
                height={64}
                src="/asset/number.png"
                alt="number image"
              />
            </div>
            <h3 className="mb-2 text-xl font-bold">Business Planning</h3>
          </div>
          <div>
            <p className="text-gray-600">
              Duis aute irure dolor in rere henderit in volua sintocaecat
              cupidatat non proent sun irem frinillamassa dignssim noner manis
              denis
            </p>
          </div>
        </div>
      </div> */}
    </section>
  );
}
