"use client";

import { LogoutDialog } from "@/components/shared/logout-dialog";
import { useEffect } from "react";

export default function LogoutPage() {
  useEffect(() => {
    // Automatically open the dialog when the page loads
    const dialogTrigger = document.querySelector(
      "[data-dialog-trigger]",
    ) as HTMLButtonElement;
    if (dialogTrigger) {
      dialogTrigger.click();
    }
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <LogoutDialog>
        <button data-dialog-trigger className="hidden">
          Logout
        </button>
      </LogoutDialog>
    </div>
  );
}
