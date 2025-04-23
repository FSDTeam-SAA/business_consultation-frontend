<<<<<<< HEAD
// /* eslint-disable @typescript-eslint/no-unused-vars */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import Link from "next/link";
// import Image from "next/image";
// import { Calendar } from "lucide-react";
// import { recentPosts } from "@/lib/data";
// import { useEffect, useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// // import clsx from "clsx";

// export default function RecentPosts() {

// const [token, setToken] = useState<string | null>(null);

//   useEffect(() => {
//     const storedToken = sessionStorage.getItem("authToken");
//     setToken(storedToken);
//   }, []);

//   const {
//     data: postsResponse,
//     isLoading,
//     isError,
//   } = useQuery({
//     queryKey: ["blogs", token],
//     queryFn: async () => {
//       const res = await fetch(
//         `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs`,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       if (!res.ok) {
//         throw new Error("Failed to fetch blogs");
//       }
//       return res.json();
//     },
//     enabled: !!token,
//   });

//   // eslint-disable-next-line react-hooks/exhaustive-deps
//   const posts = postsResponse?.data || [];

//   console.log(posts);
  
//   return (
//     <div className="rounded-md bg-gray-100 p-6">
//       <h3 className="mb-4 text-xl font-bold">Recent Posts</h3>
//       <div className="space-y-4">
//         {recentPosts.map((postData: any) => (
//           <Link
//             href={`/blog/${postData.id}`}
//             key={postData.id}
//             className="group flex items-center gap-3"
//           >
//             <div className="h-20 w-20 flex-shrink-0">
//               <Image
//                 src={postData.mainImage || "/placeholder.svg"}
//                 alt={postData.title}
//                 width={80}
//                 height={80}
//                 className="h-full w-full rounded-md object-cover"
//               />
//             </div>
//             <div>
//               <div className="mb-1 flex items-center gap-1 text-sm text-green-500">
//                 <Calendar className="h-4 w-4" />
//                 <p className="text-center text-sm leading-tight text-white">
//                   {new Date(postData.createdAt).toLocaleDateString("en-US", {
//                     day: "2-digit",
//                     month: "short",
//                   })}
//                   <br />
//                   {new Date(postData.createdAt).toLocaleDateString("en-US", {
//                     year: "numeric",
//                   })}
//                 </p>
//               </div>
//               <h4 className="font-medium transition-colors group-hover:text-green-500">
//                 {postData.title}
//               </h4>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

=======
>>>>>>> b0172744cf09b7c39a82e0e4809be03d7ec75d43


/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Link from "next/link";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

export default function RecentPosts() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = sessionStorage.getItem("authToken");
    setToken(storedToken);
  }, []);

  const {
    data: postsResponse,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["blogs", token],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!res.ok) {
        throw new Error("Failed to fetch blogs");
      }
      return res.json();
    },
    enabled: !!token,
  });

  const posts = postsResponse?.data || [];

  // Sort posts by newest first
  const sortedPosts = posts.sort(
    (a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

<<<<<<< HEAD
  const latestPosts = sortedPosts.slice(0, 2); // Only take the latest 2 posts
=======
  const latestPosts = sortedPosts.slice(0, 3); // Only take the latest 3 posts
>>>>>>> b0172744cf09b7c39a82e0e4809be03d7ec75d43

  return (
    <div className="rounded-md bg-gray-100 p-6">
      <h3 className="mb-4 text-xl font-bold">Recent Posts</h3>
      <div className="space-y-4">
        {latestPosts.map((postData: any) => (
          <Link
            href={`/blog/${postData.slug}`}
<<<<<<< HEAD
            key={postData.id}
=======
            key={postData._id}
>>>>>>> b0172744cf09b7c39a82e0e4809be03d7ec75d43
            className="group flex items-center gap-3"
          >
            <div className="h-20 w-20 flex-shrink-0">
              <Image
                src={postData.image || "/placeholder.svg"}
                alt={postData.title}
                width={80}
                height={80}
                className="h-full w-full rounded-md object-cover"
              />
            </div>
            <div>
              <div className="mb-1 flex items-center gap-1 text-sm text-black">
                <Calendar className="h-4 w-4" />
                <p className="text-center text-sm leading-tight text-black">
                  {new Date(postData.createdAt).toLocaleDateString("en-US", {
                    day: "2-digit",
                    month: "short",
                  })}
                  {new Date(postData.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                  })}
                </p>
              </div>
              <h4 className="font-medium transition-colors group-hover:text-green-500">
                {postData.title}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
