// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { Network } from "lucide-react";

// interface StrategyData {
//   name: string;
//   percentage: number;
// }

// export default function AboutUsSection() {

//   const strategyData: StrategyData[] = [
//     { name: "Business Strategy", percentage: 60 },
//   ];

//   const tabs: Array<keyof typeof tabContent> = [
//     "Discover",
//     "Planning",
//     "Marketing",
//   ];
//   const tabContent = {
//     Discover:
//       "We see our clients as strategic partners. This means in close cooperation. We see our Clients as strategic partners. This means in close cooperation..",
//     Planning: "Here are the details of our amazing product...",
//     Marketing: "See what our customers have to say...",
//   };

//   const [activeTab, setActiveTab] = useState<keyof typeof tabContent>(tabs[0]);

//   return (
//     <section className="w-full overflow-hidden py-12 md:py-16 lg:py-20">
//       <div className="container mx-auto px-4 md:px-6">
//         <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-12">
//           {/* Left side - Images */}
//           <div className="relative mx-auto w-full max-w-[800px] overflow-hidden rounded-lg">
//             <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
//               <Image
//                 src="/asset/aboutperson.png"
//                 alt="Business professionals discussing strategy"
//                 className="h-full w-full rounded-lg object-cover"
//                 fill
//                 sizes="(max-width: 768px) 100vw, 50vw"
//                 priority
//               />
//             </div>

//             {/* Experience Card */}
//             <div className="relative z-20 mx-auto mt-[-30px] mb-5  flex w-full max-w-[330px] items-center gap-4 rounded-lg bg-white shadow-lg lg:max-w-[450px]">
//               <Image
//                 width={200}
//                 height={100}
//                 src="/asset/expcard.png"
//                 alt="Experience"
//                 className=""
//               />
//               <div className="flex-shrink-0 text-green-500">
//                 <Network size={32} />
//               </div>
//               <div>
//                 <h4 className="text-xl font-bold">01 Years</h4>
//                 <p className="text-gray-600">Working Experience</p>
//               </div>
//             </div>
//           </div>

//           {/* Right side - Content */}
//           <div className="space-x-6 lg:mb-28 lg:space-y-10 ">
//             {/* <div className="ml-6 inline-block">
//               <span className="inline-flex items-center rounded-md border border-green-500 px-4 py-1 font-medium text-green-500">
//                 • ABOUT US
//               </span>
//             </div> */}

//             <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-3 mt-3">
//               Your Partner in
//               <br />
//               corporate strategy
//             </h2>

//             {/* Tabs */}
//             <div className="flex flex-wrap gap-6">
//               {tabs.map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`pb-2 text-lg font-medium ${
//                     activeTab === tab
//                       ? "border-b-[1px] border-green-500 text-green-500"
//                       : "text-gray-600 hover:text-gray-900"
//                   }`}
//                 >
//                   {tab}
//                 </button>
//               ))}
//             </div>

//             {/* Dynamic Tab Content */}
//             <div className="py-4">
//               <p className="text-gray-700">{tabContent[activeTab]}</p>
//             </div>

//             {/* Progress bars */}
//             <div className="space-y-6">
//               {strategyData.map((item, index) => (
//                 <div key={index} className="space-y-2">
//                   <div className="flex justify-between">
//                     <span className="font-medium">{item.name}</span>
//                     <span className="font-medium">{item.percentage}%</span>
//                   </div>
//                   <div className="h-2.5 w-full rounded-full bg-gray-200">
//                     <div
//                       className="h-2.5 rounded-full bg-green-500 transition-all duration-700 ease-in-out"
//                       style={{ width: `${item.percentage}%` }}
//                     ></div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Team member */}
//             <div className="flex items-center gap-4 pt-4">
//               <div className="relative h-16 w-16 overflow-hidden rounded-full">
//                 <Image
//                   src="/asset/profile.png"
//                   alt="Martony Mehari"
//                   className="object-cover"
//                   fill
//                   sizes="64px"
//                 />
//               </div>
//               <div>
//                 <h4 className="text-lg font-bold">Martony Mehari</h4>
//                 <p className="text-gray-600">Head of Corporate</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import React from "react";

const AboutUsSection = () => {
  return (
    <div className="relative my-10 flex h-[400px] container mx-auto flex-col items-center justify-center overflow-hidden rounded-lg text-center text-white">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          width={500}
          height={500}
          src="/image-20.jpg"
          alt="Nature background"
          className="h-full w-full bg-slate-500 object-cover brightness-50 saturate-150"
        />
      </div>

      {/* Content */}
      <div className="z-10 px-4">
        <h1 className="mb-4 text-5xl font-bold ">Our Goal</h1>
        <p className="max-w-lg text-lg font-light leading-relaxed">
          To become the leading force in accelerating
          <br />
          the global shift to net zero by certifying and
          <br />
          empowering businesses that are truly
          <br />
          committed to climate action
        </p>
      </div>
    </div>
  );
};

export default AboutUsSection;
