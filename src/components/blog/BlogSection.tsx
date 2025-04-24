/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import { useQuery } from "@tanstack/react-query";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

export default function BlogSection() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = sessionStorage.getItem("authToken");
    setToken(storedToken);
  }, []);

  const {
    data: postsResponse, isLoading,
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

  const posts: BlogPost[] = postsResponse?.data || [];

  return (
    <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <div className="mb-6 flex items-center">
        <span className="inline-block rounded-md border border-green-500 px-3 py-1 text-sm font-medium text-green-500">
          • BLOG
        </span>
      </div>

      <h2 className="mb-8 text-2xl font-bold md:text-3xl">Latest From Blog</h2>

      {isLoading ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-80 animate-pulse rounded-lg bg-gray-100"
            ></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-10 md:grid-cols-1 lg:grid-cols-3">
          {posts.slice(0, 3).map((post: any,) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}

