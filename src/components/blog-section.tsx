// import NextImage from "next/image"
// import Link from "next/link"

// const blogPosts = [
//   {
//     id: 1,
//     title: "How to improve employees skill",
//     excerpt:
//       "The great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself...",
//     image: "/placeholder.svg?height=200&width=400",
//     author: "By Admin",
//     date: "Blog 01",
//   },
//   {
//     id: 2,
//     title: "How to improve employees skill",
//     excerpt:
//       "The great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself...",
//     image: "/placeholder.svg?height=200&width=400",
//     author: "By Admin",
//     date: "Blog 02",
//   },
//   {
//     id: 3,
//     title: "How to improve employees skill",
//     excerpt:
//       "The great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself...",
//     image: "/placeholder.svg?height=200&width=400",
//     author: "By Admin",
//     date: "Blog 03",
//   },
// ]

// export default function BlogSection() {
//   return (
//     <section className="py-16 bg-white">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <div className="inline-block bg-white px-4 py-1 rounded-full border border-[#09B850] mb-6">
//             <span className="text-[#09B850] text-sm font-medium">BLOG</span>
//           </div>
//           <h2 className="text-2xl md:text-3xl font-bold text-[#033618]">Latest From Blog</h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {blogPosts.map((post) => (
//             <div
//               key={post.id}
//               className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
//             >
//               <div className="relative">
//                 <NextImage
//                   src={post.image || "/placeholder.svg"}
//                   alt={post.title}
//                   width={400}
//                   height={200}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="absolute top-4 right-4 bg-[#09B850] text-white text-xs font-medium px-3 py-1 rounded-md">
//                   NEW
//                 </div>
//               </div>
//               <div className="p-6">
//                 <div className="flex items-center text-sm text-gray-500 mb-2">
//                   <span>{post.author}</span>
//                   <span className="mx-2">•</span>
//                   <span>{post.date}</span>
//                 </div>
//                 <h3 className="text-lg font-semibold text-[#033618] mb-2">{post.title}</h3>
//                 <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
//                 <Link
//                   href={`/blog/${post.id}`}
//                   className="text-[#09B850] hover:text-[#033618] font-medium flex items-center"
//                 >
//                   Read More
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }




