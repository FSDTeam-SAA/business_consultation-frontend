// /* eslint-disable react/no-unescaped-entities */
// "use client";

// import { useState } from "react";
// import Image from "next/image";

// interface Testimonial {
//   id: number;
//   quote: string;
//   name: string;
//   title: string;
//   image: string;
// }

// const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     quote:
//       "Business is exactly what I've been looking for. I have tried a lot of similar products and business is the best! I have tried a few software of this kind and business is the best by far! I'm glad i found business.",
//     name: "Alex Richard",
//     title: "Business Advisor",
//     image: "/placeholder.svg?height=80&width=80",
//   },
//   {
//     id: 2,
//     quote:
//       "of similar products and business is the best! I have tried a few software of this kind and business is the best by far! I'm glad i found business.",
//     name: "Sarah Johnson",
//     title: "Marketing Director",
//     image: "/placeholder.svg?height=80&width=80",
//   },
//   {
//     id: 3,
//     quote: "Business is exactly what I've been lookingess.",
//     name: "Michael Chen",
//     title: "CEO, TechStart",
//     image: "/placeholder.svg?height=80&width=80",
//   },
// ];

// export function TestimonialsCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToPrevious = () => {
//     const isFirstSlide = currentIndex === 0;
//     const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToNext = () => {
//     const isLastSlide = currentIndex === testimonials.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   return (
//     <section className="bg-[#004225] py-16 text-white">
//       <div className="mx-auto max-w-7xl px-4">
//         <div className="mb-6 flex justify-center">
//           <div className="inline-block rounded-full border border-green-400 px-3 py-1 text-sm font-medium text-green-400">
//             • Testimonials
//           </div>
//         </div>

//         <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
//           Customer testimonial is
//           <br />
//           simply sn existing user
//         </h2>

//         <div className="relative mx-auto max-w-3xl">
//           <div className="mb-8 flex items-center justify-between">
//             <button
//               onClick={goToPrevious}
//               className="text-white transition-colors hover:text-green-300"
//               aria-label="Previous testimonial"
//             >
//               prev
//             </button>           

//             <button
//               onClick={goToNext}
//               className="text-white transition-colors hover:text-green-300"
//               aria-label="Next testimonial"
//             >
//               Next
//             </button>

//           </div>

//           <div className="mb-12 text-center">
//             <p className="mb-10 px-4 text-lg md:px-16 md:text-xl">
//               "{testimonials[currentIndex].quote}"
//             </p>

//             <div className="flex items-center justify-center">
//               <div className="mr-4">
//                 <Image
//                   src={testimonials[currentIndex].image || "/placeholder.svg"}
//                   alt={testimonials[currentIndex].name}
//                   width={60}
//                   height={60}
//                   className="rounded-full"
//                 />
//               </div>
//               <div className="text-left">
//                 <p className="text-lg font-bold">
//                   {testimonials[currentIndex].name}
//                 </p>
//                 <p className="text-green-400">
//                   {testimonials[currentIndex].title}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import Image from "next/image";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Business is exactly what I've been looking for. I have tried a lot of similar products and business is the best! I have tried a few software of this kind and business is the best by far! I'm glad i found business.",
    name: "Alex Richard",
    title: "Business Advisor",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    quote:
      "of similar products and business is the best! I have tried a few software of this kind and business is the best by far! I'm glad i found business.",
    name: "Sarah Johnson",
    title: "Marketing Director",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    quote: "Business is exactly what I've been lookingess.",
    name: "Michael Chen",
    title: "CEO, TechStart",
    image: "/placeholder.svg?height=80&width=80",
  },
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <section className="bg-[#004225] py-16 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 flex justify-center">
          <div className="inline-block rounded-full border border-green-400 px-3 py-1 text-sm font-medium text-green-400">
            • Testimonials
          </div>
        </div>

        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          Customer testimonial is
          <br />
          simply sn existing user
        </h2>

        <div className="relative mx-auto max-w-5xl">
          <div className="mb-8 flex items-center justify-between relative">
            <button
              onClick={goToPrevious}
              className="text-white transition-colors hover:text-green-300"
              aria-label="Previous testimonial"
            >
              prev
            </button>
            <div className="absolute h-[100px] w-[2px] bg-gray-400 left-24 hidden lg:block"></div>   


            <div className="absolute h-[100px] w-[2px] bg-gray-400 right-24 hidden lg:block"></div>       

            <button
              onClick={goToNext}
              className="text-white transition-colors hover:text-green-300"
              aria-label="Next testimonial"
            >
              Next
            </button>

          </div>

          <div className="mb-12 text-center max-w-3xl mx-auto">
            <p className="mb-10 px-4 text-lg md:px-16 md:text-xl">
              "{testimonials[currentIndex].quote}"
            </p>

            <div className="flex items-center justify-center">
              <div className="mr-4">
                <Image
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
              </div>
              <div className="text-left">
                <p className="text-lg font-bold">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-green-400">
                  {testimonials[currentIndex].title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
