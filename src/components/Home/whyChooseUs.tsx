// import { Award, BarChart2, DollarSign } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

export default function WhyChooseUsSection() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-6">
          <div className="inline-block rounded-md border border-green-500 px-3 py-1 text-sm font-medium text-green-600">
            • WHY CHOOSE US
          </div>

          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Why choose us
            <br />
          </h2>

          <p className="max-w-lg text-gray-600 md:text-base lg:text-lg">
            Because taking climate action should be straightforward. With our
            fast sign-up process and easy access to all our services, getting
            certified has never been simpler. We’ve designed every step to be
            efficient, user-friendly, and hassle-free—so you can start making an
            impact without unnecessary delays or complexity. Whether you&#39;re
            just beginning your net zero journey or looking to level up your
            climate commitments, we make it easy to get the recognition you
            deserve.
          </p>

          <div className="mt-5">
            <Link className="" href="/about">
              <button className="rounded-md bg-green-500 px-6 py-3 font-medium text-white transition-colors hover:bg-green-600">
                More About Us
              </button>
            </Link>
          </div>
        </div>

        <div className="relative order-first h-[300px] w-full overflow-hidden rounded-lg md:h-[400px] lg:order-last lg:h-[350px]">
          <Image
            src="/asset/figma3.png"
            alt="image"
            width={600}
            height={600}
            className="h-full w-full object-cover"
          />
          {/* <video className="h-full w-full object-cover" muted autoPlay>
            <source
              src="https://s3-figma-videos-production-sig.figma.com/video/TEAM/1461204755658353120/2720cb9358fdcd4909cebcb97d5ccbb1aa85378d?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=g5693EXf-WKw6pCsrwmEcWpSepIsIEa0H3Jexq~0iYcnZ52HRZ74gGU1YIEU1qsjc0MHpxFZqStXTP-2YmZboeC7TXtfIlyVCRNpQfhh76juJRwuZTTqKbFDE~dLimbrORSrm52fu9432o4V9drX4t~hyNeYEhoXf6ZQrgfG7iDnemvjd1-6tBPz53j~EAUOHkkQjCinLm1JT454n7ZWrjaz~xTCkzrE2PNi9RF~b~W-rqNPIGlGPiMxDeeuCuRcPqe2nZ56BWgs8UhXexCj3pRItraGm3muljSxAw9FRecAKJOZ~wXKhsHrg3-GGio48YoyFuh2atEC3og7UkmOmg__"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video> */}
        </div>
      </div>

      {/* card  */}
      {/* <div className="grid grid-cols-1 gap-8 pt-8 md:grid-cols-3">
        <div className="flex flex-col justify-between space-y-6 md:flex-row md:items-center md:space-y-0">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-500 p-5 transition duration-300 hover:bg-green-600 md:mx-0 md:mb-0">
            <DollarSign className="h-10 w-10 text-white" />
          </div>
          <div className="text-center md:ml-6 md:text-left">
            <h3 className="mb-2 text-2xl font-semibold text-gray-900">
              Cost Saving Ideas
            </h3>
            <p className="text-sm text-gray-700 md:text-base">
              Exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between space-y-6 md:flex-row md:items-center md:space-x-6 md:space-y-0">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-500 p-5 transition duration-300 hover:bg-green-600 md:mx-0 md:mb-0">
            <BarChart2 className="h-10 w-10 text-white" />
          </div>
          <div className="text-center md:ml-6 md:text-left">
            <h3 className="mb-2 text-2xl font-semibold text-gray-900">
              Grow Your Business
            </h3>
            <p className="text-sm text-gray-700 md:text-base">
              Exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-between space-y-6 md:flex-row md:items-center md:space-x-6 md:space-y-0">
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-500 p-5 transition duration-300 hover:bg-green-600 md:mx-0 md:mb-0">
            <Award className="h-10 w-10 text-white" />
          </div>
          <div className="text-center md:ml-6 md:text-left">
            <h3 className="mb-2 text-2xl font-semibold text-gray-900">
              Award Winning
            </h3>
            <p className="text-sm text-gray-700 md:text-base">
              Exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit. Amet nostrud
              consequat adipisicing excepteur.
            </p>
          </div>
        </div>
      </div> */}
    </section>
  );
}
