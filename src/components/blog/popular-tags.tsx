"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { popularTags } from "@/lib/data";

export default function PopularTags() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentTag = searchParams.get("tag");

  const handleTagClick = (tag: string) => {
    router.push(`/blog?tag=${encodeURIComponent(tag)}`);
  };

  return (
    <div className="rounded-md bg-gray-100 p-6">
      <h3 className="mb-4 text-xl font-bold">Popular Tags</h3>
      <div className="flex flex-wrap gap-2">
        {popularTags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={`rounded-md px-3 py-1 text-sm ${
              currentTag === tag
                ? "bg-green-500 text-white"
                : "bg-white text-gray-800 hover:bg-gray-200"
            } transition-colors`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
