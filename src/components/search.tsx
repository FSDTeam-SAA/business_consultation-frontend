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
import { Input } from "./ui/input";
import { toast } from "sonner";

const SearchComponent = () => {
  const [searchResult, setSearchResult] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const storedToken = sessionStorage.getItem("authToken");
    const lstoredToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
    } else setToken(lstoredToken);
  }, []);

  // console.log(user);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 10);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  const { data, refetch } = useQuery({
    queryKey: ["companySearch", searchResult],
    queryFn: ({ queryKey }) =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/profile/search?uniqueCode=${encodeURIComponent(queryKey[1] ?? "")}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      )
        .then((res) => {
          if (!res.ok) throw new Error("Company not found");
          return res.json();
        })
        .catch((error) => {
          toast.error(error.message);
        }),
    enabled: false, // disable automatic fetching :contentReference[oaicite:2]{index=2}
    refetchOnWindowFocus: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchResult) return;

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
    <div>
      {/* search bar  */}
      <form
        onSubmit={handleSubmit}
        className="relative hidden items-center lg:flex"
      >
        <button type="submit" className="absolute left-2">
          <Search className={`w-5 text-gray-800`} />
        </button>
        <Input
          onChange={(e) => setSearchResult(e.target.value)}
          value={searchResult || ""}
          type="text"
          placeholder="Search Company by Unique Code"
          className={`rounded-xl border border-gray-400 px-8 text-center text-gray-800`}
        />
      </form>
      {/* model   */}

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
              <span className="font-medium text-gray-700 dark:text-gray-300">
                Business Name:
              </span>
              <span className="text-gray-900 dark:text-gray-100">
                {data?.data.companyLegalName}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-700 dark:text-gray-300">
                Entry Complete:
              </span>
              <span
                className={`font-semibold ${
                  data?.data.isEntryComplete ? "text-green-600" : "text-red-600"
                }`}
              >
                {data?.data.isEntryComplete ? "Completed" : "Not Completed"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium text-gray-700 dark:text-gray-300">
                Active Subscription:
              </span>
              <span
                className={`font-semibold ${
                  data?.data.hasActiveSubscription
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {data?.data.hasActiveSubscription ? "Active" : "Inactive"}
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
