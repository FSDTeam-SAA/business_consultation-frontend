"use client";
import { useAuth } from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import EmissionForm from "../_components/emission-form";

const Page = () => {
  const [token, setToken] = React.useState<string | null>(null);

  useEffect(() => {
    const storedToken = sessionStorage.getItem("authToken");
    const lstoredToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
    } else setToken(lstoredToken);
  }, []);

  const { user } = useAuth();

  // console.log(user?._id)

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["companydetails"],
    // enabled: token !== null, // Only run query when token is available
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/emissions/by-user/${user?._id}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        },
      );

      if (!res.ok) {
        throw new Error("Failed to fetch companies");
      }
      // setCompanies(res.json())
      return res.json();
    },
  });

  let content;

  if (isLoading) {
    content = (
      <div className="flex h-screen flex-col items-center justify-center bg-white">
        <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-green-500 border-t-transparent" />
        <p className="text-lg font-medium text-gray-600">
          Loading...
        </p>
      </div>
    );
  } else if (isError) {
    content = <p>{error.message}</p>;
  } else if (data?.data) {
    content = <EmissionForm initianData={data?.data} />;
  }

  return <div>{content}</div>;
};

export default Page;
