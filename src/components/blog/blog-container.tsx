"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import BlogCard from "./BlogCard";
import Sidebar from "./blog-sidebar";
import { posts, getPostsByTag, searchPosts } from "@/lib/data";
import type { Post } from "@/lib/types";

export default function BlogPage() {
  const searchParams = useSearchParams();
  const tagParam = searchParams.get("tag");
  const searchParam = searchParams.get("search");

  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  useEffect(() => {
    if (tagParam) {
      setFilteredPosts(getPostsByTag(tagParam));
    } else if (searchParam) {
      setFilteredPosts(searchPosts(searchParam));
    } else {
      setFilteredPosts(posts);
    }
    setCurrentPage(1);
  }, [tagParam, searchParam]);

  // Calculate pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="order-2 lg:order-1 lg:col-span-2">
          {searchParam && (
            <h2 className="mb-6 text-2xl font-bold">
              Search results for: &quot;{searchParam}&quot;
            </h2>
          )}

          {tagParam && (
            <h2 className="mb-6 text-2xl font-bold">
              Posts tagged with: {tagParam}
            </h2>
          )}

          {currentPosts.length === 0 ? (
            <div className="py-12 text-center">
              <h3 className="text-xl font-medium">No posts found</h3>
              <p className="mt-2 text-gray-600">
                Try a different search term or tag
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {currentPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-8 flex justify-center">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 disabled:opacity-50"
                >
                  &lt;
                </button>

                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      currentPage === index + 1
                        ? "bg-green-500 text-white"
                        : "border border-gray-300"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 disabled:opacity-50"
                >
                  &gt;
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="order-1 lg:order-2">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
