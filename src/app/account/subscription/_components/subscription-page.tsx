"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Pagination } from "@/components/pagination";

export default function SubscriptionPage() {
  const [token, setToken] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const storedToken =
      sessionStorage.getItem("authToken") || localStorage.getItem("authToken");
    setToken(storedToken);
  }, []);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["subscriptions", currentPage],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/dashboard/get-subscriptions?page=${currentPage}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );
      if (!res.ok) throw new Error("Failed to fetch subscriptions");
      return res.json();
    },
    enabled: !!token,
  });

  // ✅ Extract subscriptions safely from nested structure
  const subscriptions = Array.isArray(data?.data?.subscriptions)
    ? data.data.subscriptions
    : [];

  console.log("subscriptions",subscriptions);

  const totalPages = data?.pagination?.totalPages || 1;

  return (
    <div>
      <h1 className="mb-6 border-b border-[#CECECE] pb-4 text-2xl font-bold">
        View Current Plan
      </h1>

      <div className="overflow-hidden rounded-lg bg-white shadow-md">
        <Table>
          <TableHeader className="border-b bg-[#f4f4f4]">
            <TableRow>
              <TableHead className="px-6 py-4 text-sm font-semibold text-gray-700">
                package Type
              </TableHead>
              <TableHead className="px-6 py-4 text-sm font-semibold text-gray-700">
                Status
              </TableHead>
              <TableHead className="px-6 py-4 text-sm font-semibold text-gray-700">
                SubscriptionType
              </TableHead>
              <TableHead className="px-6 py-4 text-sm font-semibold text-gray-700">
                Date
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={4} className="py-6 text-center">
                  Loading...
                </TableCell>
              </TableRow>
            ) : isError ? (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="py-6 text-center text-red-500"
                >
                  Failed to load subscriptions.
                </TableCell>
              </TableRow>
            ) : subscriptions.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="py-6 text-center">
                  No subscriptions found.
                </TableCell>
              </TableRow>
            ) : (
              subscriptions.map((sub: { packageId: string; status?: string; subscriptionType?: string; createdAt: string }, index: number) => (
                <TableRow key={index} className="border-b hover:bg-gray-50">
                  <TableCell className="px-6 py-4 text-sm text-gray-800">
                    {sub?.packageId}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-sm text-gray-800">
                    {sub?.status || "No Status"}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-sm text-gray-800">
                    {sub?.subscriptionType || "N/A"}
                  </TableCell>
                  <TableCell className="px-6 py-4 text-sm text-gray-800">
                    {/* {sub?.phoneNumber || "N/A"} */}
                    <p>
                      {new Date(sub?.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination Controls */}
      <div className="mt-4 flex justify-end">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
          totalItems={0}
          itemsPerPage={0}
        />
      </div>
    </div>
  );
}
