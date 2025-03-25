"use client";

import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

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
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real application, you would fetch from an API
    // For demo purposes, we're using mock data
    const fetchPosts = async () => {
      try {
        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Mock data based on the screenshot
        const mockPosts = [
          {
            id: 1,
            title: "How to improve employees skill",
            excerpt:
              "The great explore of the truth, the master builder of human happiness. No_",
            date: "09 Dec",
            author: "Admin",
            category: "Blog 01",
            image: "/asset/blog1.jpg",
          },
          {
            id: 2,
            title: "How to improve employees skill",
            excerpt:
              "The great explore of the truth, the master builder of human happiness. No_",
            date: "12 Dec",
            author: "Admin",
            category: "Blog 01",
            image: "/asset/blog2.jpg",
          },
          {
            id: 3,
            title: "How to improve employees skill",
            excerpt:
              "The great explore of the truth, the master builder of human happiness. No_",
            date: "29 Dec",
            author: "Admin",
            category: "Blog 01",
            image: "/asset/blog3.jpg",
          },
        ];

        setPosts(mockPosts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

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
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}
