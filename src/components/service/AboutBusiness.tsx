import Image from "next/image";
import { BookmarkCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutBusiness() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-6">
          <div className="inline-block">
            <span className="inline-flex items-center rounded-md border border-green-200 px-4 py-1.5 text-sm font-medium text-green-600">
              • About Business
            </span>
          </div>

          <h2 className="text-3xl lg:leading-[60px] font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Empowering  Businesses to Achieve Net Zero
          </h2>

          <div className="space-y-4 pt-2">
            <div className="flex items-start gap-1">
              <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-green-600">
                <BookmarkCheck className="h-5 w-5" />
              </div>
              <div>
                <span className="font-semibold">
                  Carbon Reduction Certification
                </span>{" "}
                – Guiding your journey to verified net zero emissions with
                confidence
              </div>
            </div>

            <div className="flex items-start gap-1">
              <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-green-600">
                <BookmarkCheck className="h-5 w-5" />
              </div>
              <div>
                <span className="font-semibold"> Sustainability Strategy</span>{" "}
                – Crafting actionable plans tailored to your industry and goals.
              </div>
            </div>

            <div className="flex items-start gap-1">
              <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-green-600">
                <BookmarkCheck className="h-5 w-5" />
              </div>
              <div>
                <span className="font-semibold">Green Badge Recognition</span> –
                Showcasing your climate commitment with our trusted Going 2 Zero
                Badge.
              </div>
            </div>

            {/* <div className="flex items-start gap-1">
              <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-green-600">
                <BookmarkCheck className="h-5 w-5" />
              </div>
              <div>
                <span className="font-semibold">Market Trends</span> – Staying
                ahead with data-driven insights.
              </div>
            </div>

            <div className="flex items-start gap-1">
              <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-green-600">
                <BookmarkCheck className="h-5 w-5" />
              </div>
              <div>
                <span className="font-semibold">Technology Integration</span> –
                Leveraging digital tools for competitive advantage.
              </div>
            </div> */}
          </div>

          <div className="pt-2">
            <Button className="rounded-md bg-green-500 px-6 py-2 font-medium text-white hover:bg-green-600">
              <Link href="/about" className="text-white">
                About Company
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative h-[300px] w-full overflow-hidden rounded-lg sm:h-[400px] lg:h-[500px]">
          <Image
            src="/asset/business.png"
            alt="Business team in a planning meeting"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}
