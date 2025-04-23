/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Image from "next/image";
import Link from "next/link";

import Sidebar from "@/components/blog/blog-sidebar";

import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Loading from "./loading";
import { Calendar } from "lucide-react";
import PageHero from "@/components/page-hero";
// import type { Comment } from "@/lib/types";
interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  // const router = useRouter();
  const [token, setToken] = useState<string | null>(null);

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

  if (isLoading) return <Loading />;

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

  return (
    <div>
      <PageHero
        title="Blog"
        breadcrumb="Blog Details"
        currentRoute="Blog-detais"
      />
      <div className="container mx-auto mt-10 px-4 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="order-2 lg:order-1 lg:col-span-2">
          <h1 className="text-2xl font-bold mb-5">{postData?.title}</h1>
            <article className="shadow rounded-md p-4">
              
              <Image
                src={postData.image || "/placeholder.svg"}
                alt={postData.title}
                width={800}
                height={500}
                className="mb-6 h-[400px] w-full rounded-lg object-cover"
              />

              <div className="mb-4">
                <div className="">
                  <div className="flex justify-between">
                    <p className="my-2 text-green-400">
                      By <span>{postData.authorName}</span>
                    </p>

                    <div className="flex items-center gap-2">
                      <Calendar />
                      <p className="">
                        {postData?.createdAt
                          ? new Date(postData.createdAt).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              },
                            )
                          : "Unknown Date"}
                      </p>
                    </div>
                  </div>
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

              {/* <div className="my-8 flex items-center justify-between border-b border-t border-gray-200 py-4">
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
              </div> */}
            </article>
          </div>

          <div className="order-1 lg:order-2">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
}
