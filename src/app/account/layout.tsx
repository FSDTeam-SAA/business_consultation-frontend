<<<<<<< HEAD
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
=======
import React from "react";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
>>>>>>> 928e76c2e57d7c45a050bba8b60035e6274a6b95
}
