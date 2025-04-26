import type React from "react";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import PageHero from "@/components/page-hero";
import ProtectedRoute from "@/components/Auth/ProtectedRoute";
import Usershowdashboard from "./_components/usershowdashboard";



export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div>
      <ProtectedRoute>
        <PageHero title="Account" breadcrumb="Account" currentRoute="account" />
        <SidebarProvider>
          <div className="container mx-auto mt-[40px] flex min-h-screen">
           <Usershowdashboard/>
            <SidebarInset className="flex-1">
              <main className="flex-1 p-6">
                <div className="mb-4 md:hidden">
                  <SidebarTrigger className="h-10 w-10 bg-[#09b850] text-white" />
                </div>
                {children}
              </main>
            </SidebarInset>
          </div>
        </SidebarProvider>
      </ProtectedRoute>
    </div>
  );
}
