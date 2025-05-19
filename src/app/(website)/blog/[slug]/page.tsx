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

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
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
      return data.data;
    },
    enabled: !!slug,
  });

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
            <h1 className="mb-5 text-2xl font-bold">{postData?.title}</h1>
            <article className="rounded-md p-4 shadow">
              <Image
                src={postData.image || "/placeholder.svg"}
                alt={postData.title}
                width={800}
                height={500}
                className="mb-6 h-[400px] w-full rounded-lg object-cover"
              />

              <div className="mb-4">
                <div className="flex justify-between">
                  <p className="my-2 text-green-400">
                    By <span>{postData.authorName}</span>
                  </p>
                  <div className="flex items-center gap-2">
                    <Calendar />
                    <p>
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

              <div
                className="prose prose-green mb-6 max-w-none"
                dangerouslySetInnerHTML={{ __html: postData.description }}
              />

              <div
                className="prose prose-green mb-8 max-w-none"
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
