
// /* eslint-disable @typescript-eslint/no-explicit-any */
// "use client";

// import { useState } from "react";
// // import { useRouter } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   Calendar,
//   MessageSquare,
//   Facebook,
//   Twitter,
//   Linkedin,
// } from "lucide-react";
// import Sidebar from "../blog-sidebar";
// import CommentList from "../blog-list";
// import CommentForm from "../blog-form";
// import { getPostBySlug } from "@/lib/data";
// import type { Comment } from "@/lib/types";
// // import PageHero from "@/components/page-hero";

// interface BlogPostPageProps {
//   params: {
//     slug: string;
//   };
// }

// export default function BlogPostPage({ params }: BlogPostPageProps) {
//   //   const router = useRouter();
//   console.log(params)
//   const post: any = getPostBySlug(params.slug);

//   const [comments, setComments] = useState<Comment[]>(post?.comments || []);

//   if (!post) {
//     return (
//       <div className="container mx-auto px-4 py-16 text-center">
//         <h1 className="mb-4 text-3xl font-bold">Post not found</h1>
//         <p className="mb-8">The post you are looking for does not exist.</p>
//         <Link
//           href="/blog"
//           className="rounded-md bg-green-500 px-6 py-2 text-white transition-colors hover:bg-green-600"
//         >
//           Back to Blog
//         </Link>
//       </div>
//     );
//   }

//   const handleCommentSubmit = (
//     // name: string,
//     // email: string,
//     content: string,
//   ) => {
//     const newComment: Comment = {
//       id: `comment-${Date.now()}`,

//       content,
//       date: new Date().toLocaleDateString("en-US", {
//         year: "numeric",
//         month: "long",
//         day: "numeric",
//       }),
//     };

//     setComments((prevComments) => [newComment, ...prevComments]);
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
//         <div className="order-2 lg:order-1 lg:col-span-2">
//           <article>
//             <Image
//               src={post.image || "/placeholder.svg"}
//               alt={post.title}
//               width={800}
//               height={500}
//               className="mb-6 h-[400px] w-full rounded-lg object-cover"
//             />

//             <div className="mb-4 flex items-center gap-4">
//               <div className="flex items-center gap-1 text-green-500">
//                 <Calendar className="h-4 w-4" />
//                 <span>{post.date}</span>
//               </div>
//               <div className="flex items-center gap-1 text-gray-500">
//                 <MessageSquare className="h-4 w-4" />
//                 <span>{comments.length} Comments</span>
//               </div>
//             </div>

//             <h1 className="mb-6 text-3xl font-bold">{post.title}</h1>

//             <div
//               className="prose mb-8 max-w-none"
//               dangerouslySetInnerHTML={{ __html: post.content || "" }}
//             />

//             <div className="my-8 flex items-center justify-between border-b border-t border-gray-200 py-4">
//               {/* <div>
//                 <span className="mr-2 font-medium">Tag:</span>
//                 {(post.tags ?? []).map((tag: any) => (
//                   <Link
//                     key={tag}
//                     href={`/blog?tag=${encodeURIComponent(tag)}`}
//                     className="mr-2 rounded-md bg-gray-100 px-3 py-1 text-sm text-gray-800 transition-colors hover:bg-gray-200"
//                   >
//                     {tag}
//                   </Link>
//                 ))}
//               </div> */}

//               <div className="flex items-center gap-2">
//                 <span className="font-medium">Share:</span>
//                 <Link
//                   href="#"
//                   className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-blue-600 transition-colors hover:bg-blue-600 hover:text-white"
//                 >
//                   <Facebook className="h-4 w-4" />
//                 </Link>
//                 <Link
//                   href="#"
//                   className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-blue-400 transition-colors hover:bg-blue-400 hover:text-white"
//                 >
//                   <Twitter className="h-4 w-4" />
//                 </Link>
//                 <Link
//                   href="#"
//                   className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-blue-700 transition-colors hover:bg-blue-700 hover:text-white"
//                 >
//                   <Linkedin className="h-4 w-4" />
//                 </Link>
//               </div>
//             </div>

//             <div className="my-8 grid grid-cols-1 gap-6 md:grid-cols-2">
//               <Image
//                 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rectangle%2025-kAeWcpAcNpzVoCzL4q3WjgxJXH5yLM.png"
//                 alt="Business consultation"
//                 width={600}
//                 height={400}
//                 className="h-[200px] w-full rounded-md object-cover"
//               />
//               <Image
//                 src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rectangle%2026-9nR2sHrWRC9PMbeJFiezgvND1oeN7r.png"
//                 alt="Business consultation"
//                 width={600}
//                 height={400}
//                 className="h-[200px] w-full rounded-md object-cover"
//               />
//             </div>

//             <div id="comments">
//               <CommentList comments={comments} />
//               <CommentForm
//                 postSlug={post.slug || ""}
//                 onCommentSubmit={handleCommentSubmit}
//               />
//             </div>
//           </article>
//         </div>

//         <div className="order-1 lg:order-2">
//           <Sidebar />
//         </div>
//       </div>
//     </div>
//   );
// }
