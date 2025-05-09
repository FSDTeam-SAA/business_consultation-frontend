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
import { useAuth } from "@/hooks/useAuth";

export default function SubscriptionPage() {
  const [token, setToken] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Show 10 items per page

  useEffect(() => {
    const storedToken =
      sessionStorage.getItem("authToken") || localStorage.getItem("authToken");
    setToken(storedToken);
  }, []);
  const { user } = useAuth();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["subscriptions", currentPage, user],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/dashboard/${user?._id}`,
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

  const subscriptions = Array.isArray(data?.data) ? data.data : [];
  const totalPages = data?.pagination?.totalPages || 1;
  const totalItems = data?.pagination?.totalItems || 0;

  return (
    <>
      {subscriptions.length === 0 ? (
        <div>
          <h1 className="mb-6 border-b border-[#CECECE] pb-4 text-2xl font-bold">
            View Current Plan
          </h1>
          <p className="text-center">No subscription has been made. </p>
        </div>
      ) : (
        <div>
          <h1 className="mb-6 border-b border-[#CECECE] pb-4 text-2xl font-bold">
            View Current Plan
          </h1>

          <div className="overflow-hidden rounded-lg bg-white shadow-md">
            <Table>
              <TableHeader className="border-b bg-[#f4f4f4]">
                <TableRow>
                  <TableHead className="px-6 py-4 text-sm font-semibold text-gray-700">
                    Subscription Type
                  </TableHead>
                  <TableHead className="px-6 py-4 text-sm font-semibold text-gray-700">
                    Status
                  </TableHead>
                  <TableHead className="px-6 py-4 text-sm font-semibold text-gray-700">
                    Amount
                  </TableHead>
                  <TableHead className="px-6 py-4 text-sm font-semibold text-gray-700">
                    Payment Date
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
                  subscriptions.map((sub: any, index: number) => (
                    <TableRow key={index} className="border-b hover:bg-gray-50">
                      <TableCell className="px-6 py-4 text-sm text-gray-800">
                        {sub?.subscriptionType || "N/A"}
                      </TableCell>
                      <TableCell className="px-6 py-4 text-sm text-gray-800">
                        Paid
                      </TableCell>
                      <TableCell className="px-6 py-4 text-sm text-gray-800">
                        ${sub?.amount || 0}
                      </TableCell>
                      <TableCell className="px-6 py-4 text-sm text-gray-800">
                        {new Date(
                          sub?.paymentDate || sub?.createdAt,
                        ).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
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
              onPageChange={(page: number) => setCurrentPage(page)}
              totalItems={totalItems}
              itemsPerPage={itemsPerPage}
            />
          </div>
        </div>
      )}
    </>
  );
}
