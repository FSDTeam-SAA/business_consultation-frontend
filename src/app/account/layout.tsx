import type React from "react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AccountSidebar } from "./_components/account-sidebar";
import PageHero from "@/components/page-hero";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <PageHero title="Account" breadcrumb="Account" currentRoute="account" />
      <SidebarProvider>
        <div className="container mx-auto mt-[40px] flex min-h-screen">
          <AccountSidebar />
          <SidebarInset className="flex-1">
            <main className="flex-1 p-6">{children}</main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
