"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
<<<<<<< HEAD
import { Menu, Search } from "lucide-react";
=======
import { Menu } from "lucide-react";
>>>>>>> b0172744cf09b7c39a82e0e4809be03d7ec75d43
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Hideon from "@/provider/Hideon";
// import { Input } from "./ui/input";
import { useAuth } from "@/hooks/useAuth";
<<<<<<< HEAD
import { useQuery } from "@tanstack/react-query";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { toast } from "sonner";
=======
// import { useQuery } from "@tanstack/react-query";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
// } from "./ui/dialog";
// import { toast } from "sonner";
>>>>>>> b0172744cf09b7c39a82e0e4809be03d7ec75d43
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

// interface NavbarProps {
//   currentRoute?: string;
// }

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathName = usePathname();
  const profileRef = useRef<HTMLDivElement>(null);
<<<<<<< HEAD
  const [searchResult, setSearchResult] = useState<string | null>(null);
  const { user, logout } = useAuth();
  const [token, setToken] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  useEffect(() => {
    const storedToken = sessionStorage.getItem("authToken");
    const lstoredToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
    } else setToken(lstoredToken);
  }, []);
=======
  // const [searchResult, setSearchResult] = useState<string | null>(null);
  const { user, logout } = useAuth();
  // const [token, setToken] = useState<string | null>(null);
  // const [isDialogOpen, setIsDialogOpen] = useState(false);
  // useEffect(() => {
  //   const storedToken = sessionStorage.getItem("authToken");
  //   const lstoredToken = localStorage.getItem("authToken");
  //   if (storedToken) {
  //     setToken(storedToken);
  //   } else setToken(lstoredToken);
  // }, []);
>>>>>>> b0172744cf09b7c39a82e0e4809be03d7ec75d43

  // console.log(user);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 10);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
<<<<<<< HEAD
  const { data, refetch } = useQuery({
    queryKey: ["companySearch", searchResult],
    queryFn: ({ queryKey }) =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/company/search?id=${encodeURIComponent(queryKey[1] ?? "")}`,
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
=======
  // const { data, refetch } = useQuery({
  //   queryKey: ["companySearch", searchResult],
  //   queryFn: ({ queryKey }) =>
  //     fetch(
  //       `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/user/profile/search?uniqueCode=${encodeURIComponent(queryKey[1] ?? "")}`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //           "Content-Type": "application/json",
  //         },
  //       },
  //     )
  //       .then((res) => {
  //         if (!res.ok) throw new Error("Company not found");
  //         return res.json();
  //       })
  //       .catch((error) => {
  //         toast.error(error.message);
  //       }),
  //   enabled: false, // disable automatic fetching :contentReference[oaicite:2]{index=2}
  //   refetchOnWindowFocus: false,
  // });

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (!searchResult) return;

  //   try {
  //     const result = await refetch();
  //     if (result.isSuccess && result.data) {
  //       setIsDialogOpen(true);
  //     }
  //   } catch (error) {
  //     console.error("Search failed", error);
  //   }
  // };
>>>>>>> b0172744cf09b7c39a82e0e4809be03d7ec75d43

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    // Call it once immediately on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Hideon
      routes={[
        "/sign-up",
        "/login",
        "/reset-password",
        "/subscription",
        "/forget-password",
      ]}
    >
      <header
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/90 shadow-sm backdrop-blur-sm"
            : "bg-transparent",
        )}
      >
        <div className="container relative mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="mr-2">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="4" fill="transparent" />
                <path
                  d="M10 10H22V14H10V10ZM10 16H22V20H10V16ZM10 22H22V26H10V22ZM10 28H22V32H10V28ZM24 10H30V14H24V10ZM24 16H30V32H24V16Z"
                  fill="#09B850"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold leading-none text-[#09B850]">
                BUSINESS
              </span>
              <span
                className={cn(
                  "text-sm font-medium leading-none",
                  isScrolled ? "text-gray-800" : "text-white",
                )}
              >
                CONSULTATION
              </span>
            </div>
          </Link>

          {/* Mobile Menu Toggle with Sheet */}
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <button className="z-50 md:hidden" aria-label="Toggle menu">
                <Menu
                  className={cn(
                    "h-6 w-6",
                    isScrolled ? "text-gray-800" : "text-white",
                  )}
                />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[80%] border-l border-gray-800 bg-black/95 sm:w-[350px]"
            >
              <nav className="flex h-full flex-col items-center justify-center space-y-6">
                <Link
                  href="/"
                  className={cn(
                    "text-xl font-medium transition-colors",
                    pathName === "/"
                      ? "text-[#09B850]"
                      : "text-white hover:text-[#09B850]",
                  )}
                  onClick={() => setIsSheetOpen(false)}
                >
                  HOME
                </Link>
                <Link
                  href="/service"
                  className={cn(
                    "text-xl font-medium transition-colors",
                    pathName === "/service"
                      ? "text-[#09B850]"
                      : "text-white hover:text-[#09B850]",
                  )}
                  onClick={() => setIsSheetOpen(false)}
                >
                  SERVICE
                </Link>
                <Link
                  href="/about"
                  className={cn(
                    "text-xl font-medium transition-colors",
                    pathName === "/about"
                      ? "text-[#09B850]"
                      : "text-white hover:text-[#09B850]",
                  )}
                  onClick={() => setIsSheetOpen(false)}
                >
                  ABOUT US
                </Link>
                {/* <Link
                  href="/blog"
                  className={cn(
                    "text-xl font-medium transition-colors",
                    pathName === "/blog"
                      ? "text-[#09B850]"
                      : "text-white hover:text-[#09B850]",
                  )}
                  onClick={() => setIsSheetOpen(false)}
                >
                  BLOGS
                </Link> */}
                <Link
                  href="/contact"
                  className={cn(
                    "text-xl font-medium transition-colors",
                    pathName === "/contact"
                      ? "text-[#09B850]"
                      : "text-white hover:text-[#09B850]",
                  )}
                  onClick={() => setIsSheetOpen(false)}
                >
                  CONTACT US
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            <Link
              href="/"
              className={cn(
                "transition-colors",
                pathName === "/"
                  ? "text-[#09B850]" // Active link style
                  : isScrolled
                    ? "text-gray-800 hover:text-[#09B850]"
                    : "text-white hover:text-[#09B850]",
              )}
            >
              HOME
            </Link>

            <Link
              href="/service"
              className={cn(
                "transition-colors",
                pathName === "/service"
                  ? "text-[#09B850]"
                  : isScrolled
                    ? "text-gray-800 hover:text-[#09B850]"
                    : "text-white hover:text-[#09B850]",
              )}
            >
              SERVICE
            </Link>

            <Link
              href="/about"
              className={cn(
                "transition-colors",
                pathName === "/about"
                  ? "text-[#09B850]"
                  : isScrolled
                    ? "text-gray-800 hover:text-[#09B850]"
                    : "text-white hover:text-[#09B850]",
              )}
            >
              ABOUT US
            </Link>

            {/* <Link
              href="/blog"
              className={cn(
                "transition-colors",
                pathName === "/blog"
                  ? "text-[#09B850]"
                  : isScrolled
                    ? "text-gray-800 hover:text-[#09B850]"
                    : "text-white hover:text-[#09B850]",
              )}
            >
              BLOGS
            </Link> */}

            <Link
              href="/contact"
              className={cn(
                "transition-colors",
                pathName === "/contact"
                  ? "text-[#09B850]"
                  : isScrolled
                    ? "text-gray-800 hover:text-[#09B850]"
                    : "text-white hover:text-[#09B850]",
              )}
            >
              CONTACT US
            </Link>
          </nav>
          {/* search bar  */}
<<<<<<< HEAD
          <form
=======
       
          {/* <form
>>>>>>> b0172744cf09b7c39a82e0e4809be03d7ec75d43
            onSubmit={handleSubmit}
            className="relative hidden items-center lg:flex"
          >
            <button type="submit" className="absolute left-2">
              <Search
                className={`${isScrolled ? "text-gray-800" : "text-white"} w-5`}
              />
            </button>
            <Input
              onChange={(e) => setSearchResult(e.target.value)}
              value={searchResult || ""}
              type="text"
              placeholder="Search"
              className={`rounded-xl px-8 ${
                isScrolled ? "border border-black text-gray-800" : "text-white"
              }`}
            />
<<<<<<< HEAD
          </form>
          {/* model   */}

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
=======
          </form> */}
          {/* model   */}

          {/* <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
>>>>>>> b0172744cf09b7c39a82e0e4809be03d7ec75d43
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
<<<<<<< HEAD
                    {data?.data.businessName}
=======
                    {data?.data.companyLegalName}
>>>>>>> b0172744cf09b7c39a82e0e4809be03d7ec75d43
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    Entry Complete:
                  </span>
                  <span
                    className={`font-semibold ${
                      data?.data.isEntryComplete
                        ? "text-green-600"
                        : "text-red-600"
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
<<<<<<< HEAD
          </Dialog>
=======
          </Dialog> */}
>>>>>>> b0172744cf09b7c39a82e0e4809be03d7ec75d43

          {/* User Profile */}
          {user ? (
            <div className="relative" ref={profileRef}>
              <div
                className="flex cursor-pointer items-center"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-[#09B850]">
                  {/* <User className="h-6 w-6 text-white" /> */}
                  <Avatar>
<<<<<<< HEAD
                    <AvatarImage src={user?.profileImage}/>
=======
                    <AvatarImage src={user?.profileImage} />
>>>>>>> b0172744cf09b7c39a82e0e4809be03d7ec75d43
                    <AvatarFallback>PR</AvatarFallback>
                  </Avatar>
                </div>
                <div className="ml-2 hidden sm:block">
                  <div
                    className={cn(
                      "text-sm",
                      isScrolled ? "text-gray-800" : "text-white",
                    )}
                  >
                    {user?.fullName}
                  </div>
                  <div
                    className={cn(
                      "text-xs",
                      isScrolled ? "text-gray-600" : "text-white/70",
                    )}
                  >
                    {user?.email}
                  </div>
                </div>
              </div>

              {/* Profile Dropdown */}
              {isProfileOpen && (
                <div className="absolute right-0 z-50 mt-2 w-48 rounded-md bg-white py-1 shadow-lg">
                  <Link
                    href="/account"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsProfileOpen(false)}
                  >
                    Settings
                  </Link>
                  <div className="my-1 border-t border-gray-100"></div>
                  <button
                    className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100"
                    onClick={() => {
                      // Add logout logic here
                      setIsProfileOpen(false);
                      logout();
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/login"
              className={`rounded-lg bg-primary px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-primary/90`}
            >
              Login
            </Link>
          )}
        </div>
      </header>
    </Hideon>
  );
}
