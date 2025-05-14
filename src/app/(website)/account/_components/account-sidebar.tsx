"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";
import { LogoutDialog } from "@/components/shared/logout-dialog";

export function AccountSidebar() {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const { setOpenMobile } = useSidebar();

  const navItems = [
    { title: "Dashboard", href: "/account/dashboard" },
    { title: "Emission Form", href: "/account/emission-form" },
    { title: "Personal Information", href: "/account/personal-information" },
    { title: "Blogs", href: "/account/blog" },
    { title: "Subscription", href: "/account/subscription" },
    { title: "Notification", href: "/account/notification" },
    { title: "Email Consultation", href: "/account/email-consaltaion" },
    { title: "Video Consultation", href: "/account/video-consaltaion" },
    { title: "Privacy Policy", href: "/account/privacy-policy" },
    { title: "Terms & Condition", href: "/account/terms-condition" },
  ];

  // Function to handle navigation and close sidebar on mobile
  const handleNavigation = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  return (
    <Sidebar
      side="left"
      variant="sidebar"
      collapsible={isMobile ? "offcanvas" : "none"}
      className="w-[235px] bg-white"
    >
      <SidebarContent>
        <div className="px-2 py-4">
          <h2 className="mb-4 text-xl font-bold">Navigation</h2>
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  asChild
                  className={cn(
                    "mb-2 h-10 w-full justify-start pl-3 text-[18px] font-[500] text-primary shadow-[0px_0px_6px_0px_#00000040] hover:text-primary/80",
                    pathname === item.href &&
                      "text-primary-foreground hover:text-white",
                  )}
                  style={
                    pathname === item.href
                      ? {
                          background:
                            "linear-gradient(170.68deg, #09B850 -11.25%, #033618 43.6%, #062814 80.6%)",
                        }
                      : undefined
                  }
                >
                  <Link href={item.href} onClick={handleNavigation}>
                    {item.title}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
            <SidebarMenuItem>
              <LogoutDialog>
                <SidebarMenuButton
                  className="mb-2 h-10 w-full justify-start pl-3 text-[18px] font-[500] text-red-500 shadow-[0px_0px_6px_0px_#00000040] hover:text-primary/80"
                  onClick={() => isMobile && setOpenMobile(false)}
                >
                  Log Out
                </SidebarMenuButton>
              </LogoutDialog>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
