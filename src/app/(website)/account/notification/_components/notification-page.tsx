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
  console.log(notifications)
  const paginationData = data?.pagination || {
    totalPages: 1,
    currentPage: 1,
    totalNotifications: 0,
  };




  const totalPages = Number(paginationData.totalPages);
  const totalItems = Number(paginationData.totalNotifications);
  const currentApiPage = Number(paginationData.currentPage);
  const itemsPerPage = notifications.length || 10; // fallback to 10

  return (
    <div>
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
                className="flex items-start justify-between border-b p-4"
              >
                <div className="flex gap-4">
                  <div className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#282828]">
                    <Bell className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-[500] text-[#000000]">
                      {notification.title}
                    </h3>
                    <p className="text-[16px] text-[#595959]">
                      {notification.message}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-end">
                  <span className="text-xs text-muted-foreground">
                  {new Date(notification.createdAt).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      }
                    )}
                  </span>
                  {/* <Button
                    variant="ghost"
                    className="h-6 p-2 text-[16px] font-[500] text-red-500 hover:bg-red-50 hover:text-red-700"
                  >
                    Delete
                  </Button> */}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="mt-6 flex justify-end">
            <Pagination
              totalPages={totalPages}
              currentPage={currentApiPage}
              onPageChange={(page:any) => setCurrentPage(page)}
              totalItems={totalItems}
              itemsPerPage={itemsPerPage}
            />
          </div>
        </>
      )}
    </div>
  );
}
