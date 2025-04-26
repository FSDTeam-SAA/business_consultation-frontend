"use client";

import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Search } from "lucide-react";
import { toast } from "sonner";

const SearchComponent = () => {
  const [searchResult, setSearchResult] = useState<string>("");
  const [token, setToken] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const storedToken = sessionStorage.getItem("authToken") || localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const { data, refetch } = useQuery({
    queryKey: ["companySearch", searchResult],
    queryFn: ({ queryKey }) =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/profile/search?uniqueCode=${encodeURIComponent(
          queryKey[1] ?? ""
        )}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
          if (!res.ok) throw new Error("Company not found");
          return res.json();
        })
        .catch((error) => {
          toast.error(error.message);
        }),
    enabled: false,
    refetchOnWindowFocus: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchResult.trim()) return;

    try {
      const result = await refetch();
      if (result.isSuccess && result.data) {
        setIsDialogOpen(true);
      }
    } catch (error) {
      console.error("Search failed", error);
    }
  };

  return (
    <div className="absolute lg:left-[25%] lg:top-[90%] top-[87%] z-10 lg:w-[948px] w-full">
      <form
        onSubmit={handleSubmit}
        className="bg-white h-[156px] p-6 rounded-md shadow-md flex flex-col justify-center gap-4"
      >
        <input
          type="text"
          value={searchResult}
          onChange={(e) => setSearchResult(e.target.value)}
          placeholder="Enter company name or ID"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-green-300"
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
        >
          <div className="flex items-center justify-center gap-2">
            <Search className="w-5" />
            <span>Search</span>
          </div>
        </button>
      </form>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl dark:bg-gray-800">
          <DialogHeader className="mb-4">
            <DialogTitle className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Search Result
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-600 dark:text-gray-400">
              Here’s the company info we found for you:
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="font-medium text-gray-700 dark:text-gray-300">Business Name:</span>
              <span className="text-gray-900 dark:text-gray-100">{data?.data?.companyLegalName}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-700 dark:text-gray-300">Entry Complete:</span>
              <span
                className={`font-semibold ${
                  data?.data?.isEntryComplete ? "text-green-600" : "text-red-600"
                }`}
              >
                {data?.data?.isEntryComplete ? "Completed" : "Not Completed"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-700 dark:text-gray-300">Active Subscription:</span>
              <span
                className={`font-semibold ${
                  data?.data?.hasActiveSubscription ? "text-green-600" : "text-red-600"
                }`}
              >
                {data?.data?.hasActiveSubscription ? "Active" : "Inactive"}
              </span>
            </div>
          </div>

          <DialogFooter className="mt-6">
            <button
              className="rounded-md border-none bg-green-600 px-4 py-2 text-white outline-none transition hover:bg-green-700"
              onClick={() => setIsDialogOpen(false)}
            >
              Close
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SearchComponent;


