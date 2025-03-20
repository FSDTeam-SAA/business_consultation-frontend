"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/blog?search=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex">
      <input
        type="text"
        placeholder="Search..."
        className="w-full rounded-l-md border border-gray-200 px-4 py-2 focus:outline-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-md bg-green-500 px-4 py-2 text-white transition-colors hover:bg-green-600"
      >
        <Search className="h-5 w-5" />
      </button>
    </form>
  );
}
