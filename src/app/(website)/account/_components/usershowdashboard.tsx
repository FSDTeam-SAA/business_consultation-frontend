"use client";
import React from "react";
import { useAuth } from "@/hooks/useAuth";
import { AccountSidebar } from "./account-sidebar";
import { useRouter } from "next/navigation";
const Usershowdashboard = () => {
    const router = useRouter();
  const { user } = useAuth();

  
  if (user && (user.role === "Admin" || user.role === "SuperAdmin")) {
    router.push("/");
  }
  return (
    <div>
      {user && !(user.role === "Admin" || user.role === "SuperAdmin") && (
        <AccountSidebar />
      )}
    </div>
  );
};

export default Usershowdashboard;
