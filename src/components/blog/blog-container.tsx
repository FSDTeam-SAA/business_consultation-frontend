"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Sidebar from "./blog-sidebar";
import { useQuery } from "@tanstack/react-query";
// import BlogCard from "./BlogCard";
import BlogCard from "./BlogCard";
import { Post } from "@/lib/types";
import { useAuth } from "@/hooks/useAuth";

export default function BlogPage() {
  const searchParams = useSearchParams();
  const tagParam = searchParams.get("tag");
  const searchParam = searchParams.get("search");
  const [token, setToken] = useState<string | null>(null);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;
  const { isSubscriptionExpiredGracePeriod } = useAuth();

  useEffect(() => {
    const storedToken = sessionStorage.getItem("authToken");
    setToken(storedToken);
  }, []);
  //
  const {
    data: postsResponse,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["blogs", token],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs?page=${currentPage}&limit=${postsPerPage}&search=${searchParam}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (!res.ok) {
        throw new Error("Failed to fetch blogs");
      }
      return res.json();
    },
    enabled: !!token,
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const posts = postsResponse?.data || [];


  // console.log(posts);

  function scrollToTop() {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }

  useEffect(() => {
    if (!posts.length) return;

    const filtered = posts.filter((post: Post) => {
      if (tagParam) {
        return post.tags?.includes(tagParam);
      } else if (searchParam) {
        return post.title.toLowerCase().includes(searchParam.toLowerCase());
      }
      return true;
    });

    setFilteredPosts(filtered);
    setCurrentPage(1);
  }, [tagParam, searchParam, posts]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);


  if (isLoading) return <p className="text-center">Loading...</p>;
  if (isError)
    return <p className="text-center text-red-500">Failed to load blogs.</p>;

  return (
    <>
      {isSubscriptionExpiredGracePeriod ? (
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

              {filteredPosts.length === 0 ? (
                <div className="py-12 text-center">
                  <h3 className="text-xl font-medium">No posts found</h3>
                  <p className="mt-2 text-gray-600">
                    Try a different search term or tag
                  </p>
                </div>
              ) : (
                <div className="space-y-8">
                  {currentPosts.map((post: Post) => (
                    <BlogCard key={post._id} post={post} />
                  ))}
                </div>
              )}

              {totalPages > 1 && (
                <div className="mt-8 flex justify-center">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => {
                        setCurrentPage((prev) => Math.max(prev - 1, 1));
                        scrollToTop();
                      }}
                      disabled={currentPage === 1}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 disabled:opacity-50"
                    >
                      &lt;
                    </button>

                    {Array.from({ length: totalPages }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentPage(index + 1);
                          scrollToTop();
                        }}
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
                      onClick={() => {
                        setCurrentPage((prev) =>
                          Math.min(prev + 1, totalPages),
                        );
                        scrollToTop();
                      }}
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
      ) : (
        <div className="rounded-lg bg-gray-50 p-6 text-center">
          <p className="mb-3 text-xl">
            Don&apos;t miss out! Subscribe to our blog and get the latest
            updates, tips, and insights delivered straight to your inbox.
          </p>
          <a href="/service" className="font-medium text-blue-600 underline">
            Subscribe Now
          </a>
        </div>
      )}
    </>
  );
}
