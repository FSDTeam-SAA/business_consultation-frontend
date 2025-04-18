/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
// import {
//   Calendar,
//   MessageSquare,
//   Facebook,
//   Twitter,
//   Linkedin,
// } from "lucide-react";
import Sidebar from "@/components/blog/blog-sidebar";
// import CommentList from "@/components/blog/blog-list";
// import CommentForm from "@/components/blog/blog-form";
// import { getPostBySlug } from "@/lib/data";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Loading from "./loading";
// import type { Comment } from "@/lib/types";
interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  // const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  // const post = getPostBySlug(params.slug);
  // const pathName = useParams();
  // console.log(pathName);
  // console.log(params);

  const { slug } = useParams() as { slug: string };

  useEffect(() => {
    const storedToken = sessionStorage.getItem("authToken");
    setToken(storedToken);
  }, []);

  const {
    data: postData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["blogPost", slug],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs/${slug}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (!res.ok) throw new Error("Failed to fetch blog post");
      const data = await res.json();
      return data.data; // Adjust this line based on your API response structure
    },
    enabled: !!slug, // only run when slug is available
  });

  console.log(postData);

  if (isLoading) return (
    <Loading />
  );

  if (isError || !postData) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="mb-4 text-3xl font-bold">Post not found</h1>
        <p className="mb-8">The post you are looking for does not exist.</p>
        <Link
          href="/blog"
          className="rounded-md bg-green-500 px-6 py-2 text-white transition-colors hover:bg-green-600"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  if (!postData) {
    return (
      <div className="container mx-auto px-4 py-16 text-center ">
        <h1 className="mb-4 text-3xl font-bold">Post not found</h1>
        <p className="mb-8">The post you are looking for does not exist.</p>
        <Link
          href="/blog"
          className="rounded-md bg-green-500 px-6 py-2 text-white transition-colors hover:bg-green-600"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="order-2 lg:order-1 lg:col-span-2">
          <article>
            <Image
              src={postData.image || "/placeholder.svg"}
              alt={postData.title}
              width={800}
              height={500}
              className="mb-6 h-[400px] w-full rounded-lg object-cover"
            />

            <div className="mb-4 flex items-center gap-4">
              <div className="flex items-center gap-1 text-green-500">
                {/* <Calendar className="h-4 w-4" /> */}
                <span>{postData.date}</span>
                <p>By {postData?.authorName}</p>
              </div>
              <div className="flex items-center gap-1 text-gray-500">
                {/* <MessageSquare className="h-4 w-4" /> */}
                {/* <span>{comments.length} Comments</span> */}
              </div>
            </div>

            <h1 className="mb-6">{postData.description}</h1>

            <div
              className="prose mb-8 max-w-none"
              dangerouslySetInnerHTML={{ __html: postData.content || "" }}
            />

            {/* <div className="my-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              <Image
                src={postData}
                alt="Business consultation"
                width={600}
                height={400}
                className="h-[200px] w-full rounded-md object-cover"
              />
              
            </div> */}

            {postData?.subImages?.length ? (
              <div className="my-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                {postData.subImages.map((img: string, index: number) => (
                  <Image
                    key={index}
                    src={img}
                    alt={`Blog image ${index + 1}`}
                    width={600}
                    height={400}
                    className="h-[200px] w-full rounded-md object-cover"
                  />
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No gallery images available.</p>
            )}

            <div className="my-8 flex items-center justify-between border-b border-t border-gray-200 py-4">
              <div>
                <span className="mr-2 font-medium">Tag:</span>

                {(postData.tags ?? []).map((tag: any) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${encodeURIComponent(tag)}`}
                    className="mr-2 rounded-md bg-gray-100 px-3 py-1 text-sm text-gray-800 transition-colors hover:bg-gray-200"
                  >
                    {tag}
                  </Link>
                ))}
              </div>

              {/* <div className="flex items-center gap-2">
                <span className="font-medium">Share:</span>
                <Link
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-blue-600 transition-colors hover:bg-blue-600 hover:text-white"
                >
                  <Facebook className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-blue-400 transition-colors hover:bg-blue-400 hover:text-white"
                >
                  <Twitter className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-blue-700 transition-colors hover:bg-blue-700 hover:text-white"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
              </div> */}
            </div>
          </article>
        </div>

        <div className="order-1 lg:order-2">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
