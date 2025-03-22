"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
// import { X } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface LogoutDialogProps {
  children?: React.ReactNode;
}

export function LogoutDialog({ children }: LogoutDialogProps) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    // Handle logout logic here
    setOpen(false);
    router.push("/login"); // Redirect to login page after logout
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children || <Button variant="ghost">Log Out</Button>}
      </DialogTrigger>
      <DialogContent className="border-0 p-0 outline-none focus:outline-none focus:ring-0 focus-visible:ring-0 sm:max-w-md">
        <div className="rounded-lg bg-[#004d33] p-6 text-white">
          {/* <div className="absolute right-4 top-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(false)}
              className="text-white hover:bg-[#003d29] hover:text-white"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div> */}
          <div className="mb-4 flex justify-center">
            <div className="flex items-center gap-2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z"
                  fill="#10B981"
                />
              </svg>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-[#10B981]">
                  BUSINESS
                </span>
                <span className="font-semibold text-white">CONSULTATION</span>
              </div>
            </div>
          </div>

          <DialogHeader className="text-center">
            <DialogTitle className="text-2xl font-bold text-white">
              Are Your Sure to log out?
            </DialogTitle>
            <DialogDescription className="mt-2 text-center text-white">
              Stay ahead with the latest security, updates, and expert insights.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6 flex flex-col gap-3">
            <Button
              variant="destructive"
              onClick={() => setOpen(false)}
              className="bg-[#d9534f] text-white hover:bg-[#c9302c]"
            >
              No
            </Button>
            <Button
              onClick={handleLogout}
              className="bg-[#10B981] text-white hover:bg-[#0ea271]"
            >
              Yes
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
