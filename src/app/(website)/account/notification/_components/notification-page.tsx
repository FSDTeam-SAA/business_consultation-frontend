/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useQuery } from "@tanstack/react-query";
import { Bell } from "lucide-react";
import { useEffect, useState } from "react";
import { Pagination } from "@/components/pagination";

export default function NotificationPage() {
  const [token, setToken] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const storedToken =
      sessionStorage.getItem("authToken") || localStorage.getItem("authToken");
    setToken(storedToken);
  }, []);

  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["notifications", currentPage, token],
    queryFn: async () => {
      if (!token || !backendUrl) return null;

      const res = await fetch(
        `${backendUrl}/api/notification/?page=${currentPage}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!res.ok) {
        if (res.status === 404) {
          return {
            data: [],
            pagination: {
              totalPages: 1,
              currentPage: 1,
              totalNotifications: 0,
            },
          };
        }
        throw new Error("Failed to fetch notifications");
      }

      return res.json();
    },
    enabled: !!token && !!backendUrl,
  });

  const notifications = data?.data || [];
  const paginationData = data?.pagination || {
    totalPages: 1,
    currentPage: 1,
    totalNotifications: 0,
  };

  const totalPages = Number(paginationData.totalPages);
  const totalItems = Number(paginationData.totalNotifications);
  const currentApiPage = Number(paginationData.currentPage);
  const itemsPerPage = notifications.length || 2;

  return (
    <div className="px-4 py-6 sm:px-6 md:px-8 lg:px-10 w-full max-w-5xl mx-auto">
      <h1 className="mb-6 border-b border-[#CECECE] pb-4 text-2xl font-bold">
        Notifications
      </h1>

      {isLoading ? (
        <p className="text-center py-6">Loading...</p>
      ) : isError ? (
        <p className="text-center text-red-500 py-6">
          Failed to load notifications.
        </p>
      ) : notifications.length === 0 ? (
        <p className="text-center py-6">No notifications found.</p>
      ) : (
        <>
          <div className="space-y-4">
            {notifications.map((notification: any) => (
              <div
                key={notification._id}
                className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b p-4 rounded-lg shadow-sm bg-white"
              >
                <div className="flex gap-4 items-start">
                  <div className="flex min-w-[36px] sm:min-w-[42px] h-9 sm:h-10 items-center justify-center rounded-full bg-[#282828]">
                    <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-medium text-[#000000]">
                      {notification.title}
                    </h3>
                    <p className="text-sm text-[#595959]">
                      {notification.message}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-end sm:justify-start">
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {new Date(notification.createdAt).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      }
                    )}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center sm:justify-end">
            <Pagination
              totalPages={totalPages}
              currentPage={currentApiPage}
              onPageChange={(page: any) => setCurrentPage(page)}
              totalItems={totalItems}
              itemsPerPage={itemsPerPage}
            />
          </div>
        </>
      )}
    </div>
  );
}
