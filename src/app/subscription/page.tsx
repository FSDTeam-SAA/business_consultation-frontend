"use client";

import Link from "next/link";
// import AnnualPlan from "../(website)/account/_components/annualPlan";
import OneMonthPlan from "../(website)/account/_components/oneMonthPlan";

/**
 * Renders the pricing plan selection page with available subscription options and a login prompt.
 *
 * Displays the one-month plan and provides a link for users who have already completed the process to navigate to the login page.
 */
export default function PricingPlanPage() {
  return (
    <div className="relative mt-10  min-h-screen  items-center justify-center gap-20 md:flex-row md:gap-0">
     <div className="md:flex-row flex flex-col gap-10 md:gap-0  items-center justify-center">
       <div className="px-4 md:px-0 ">
        <OneMonthPlan />
      </div>
      {/* <div className="px-4 md:px-0">
        <AnnualPlan />
      </div> */}
     </div>

      {/* Fixed bottom login text */}
      <div className=" py-7  text-center">
        Already Completed? Go to{" "}
        <Link href="/login" className="text-green-500 underline">
          Login
        </Link>
      </div>
    </div>
  );
}
