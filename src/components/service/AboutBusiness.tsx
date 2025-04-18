// import Image from "next/image"
// import { Check } from "lucide-react"
// import { Button } from "@/components/ui/button"

// export default function AboutBusiness() {
//   return (
//     <section className="w-full py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
//         <div className="space-y-6">
//           <div className="inline-block">
//             <span className="inline-flex items-center px-4 py-1.5 rounded-md text-sm font-medium  text-green-600 border border-green-200">
//               • About Business
//             </span>
//           </div>

//           <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
//             Driving Business Success Through Innovation!
//           </h2>

//           <div className="space-y-4 pt-2">
//             <div className="flex items-start gap-3">
//               <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
//                 <Check className="w-4 h-4" />
//               </div>
//               <div>
//                 <span className="font-semibold">Growth Strategies</span> – Scalable solutions for sustainable expansion.
//               </div>
//             </div>

//             <div className="flex items-start gap-3">
//               <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
//                 <Check className="w-4 h-4" />
//               </div>
//               <div>
//                 <span className="font-semibold">Efficiency Optimization</span> – Streamlining operations for maximum
//                 productivity.
//               </div>
//             </div>

//             <div className="flex items-start gap-3">
//               <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
//                 <Check className="w-4 h-4" />
//               </div>
//               <div>
//                 <span className="font-semibold">Customer Engagement</span> – Building lasting relationships through
//                 value-driven.
//               </div>
//             </div>

//             <div className="flex items-start gap-3">
//               <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
//                 <Check className="w-4 h-4" />
//               </div>
//               <div>
//                 <span className="font-semibold">Market Trends</span> – Staying ahead with data-driven insights.
//               </div>
//             </div>

//             <div className="flex items-start gap-3">
//               <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
//                 <Check className="w-4 h-4" />
//               </div>
//               <div>
//                 <span className="font-semibold">Technology Integration</span> – Leveraging digital tools for competitive
//                 advantage.
//               </div>
//             </div>
//           </div>

//           <div className="pt-2">
//             <Button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md font-medium">
//               About Company
//             </Button>
//           </div>
//         </div>

//         <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
//           <Image
//             src="/asset/business.png"
//             alt="Business team in a planning meeting"
//             fill
//             className="object-cover"
//             sizes="(max-width: 768px) 100vw, 50vw"
//             priority
//           />
//         </div>
//       </div>
//     </section>
//   )
// }

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

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Driving Business Success Through Innovation!
          </h2>

          <div className="space-y-4 pt-2">
            <div className="flex items-start gap-1">
              <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-green-600">
                <BookmarkCheck className="h-5 w-5" />
              </div>
              <div>
                <span className="font-semibold">Growth Strategies</span> –
                Scalable solutions for sustainable expansion.
              </div>
            </div>

            <div className="flex items-start gap-1">
              <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-green-600">
                <BookmarkCheck className="h-5 w-5" />
              </div>
              <div>
                <span className="font-semibold">Efficiency Optimization</span> –
                Streamlining operations for maximum productivity.
              </div>
            </div>

            <div className="flex items-start gap-1">
              <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-green-600">
                <BookmarkCheck className="h-5 w-5" />
              </div>
              <div>
                <span className="font-semibold">Customer Engagement</span> –
                Building lasting relationships through value-driven.
              </div>
            </div>

            <div className="flex items-start gap-1">
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
            </div>
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
