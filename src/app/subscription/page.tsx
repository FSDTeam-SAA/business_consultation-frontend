"use client";

import AnnualPlan from "../account/_components/annualPlan";
import OneMonthPlan from "../account/_components/oneMonthPlan";

export default function PricingPlanPage() {
  return (
    <div className="mt-10 flex flex-col gap-20 md:gap-0 items-center justify-center md:flex-row">
      <div className="px-4 md:px-0">
        <OneMonthPlan />
      </div>
      <div className="px-4 md:px-0">
        <AnnualPlan />
      </div>
    </div>
  );
}
