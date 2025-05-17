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
import Link from "next/link";
import Image from "next/image";

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
            <div className=" flex justify-center">
              <div className="flex items-center">
                <Link href="/" className="flex items-center">
                  <Image
                    src={"/asset/logo.png"}
                    width={500}
                    height={500}
                    alt="logo"
                    className="w-[150px]"
                  />
                  <p className="-ml-[30px] text-[14px] font-medium text-[#09B850]">
                    {" "}
                    Going 2{"  "}
                    <span className={"text-white"}>Zero</span>
                  </p>
                </Link>
                {/* <Image
              src="/asset/fomrLogo.png"
              alt="Business Consultation Logo"
              width={140}
              height={140}
              className="mr-2"
            /> */}
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
