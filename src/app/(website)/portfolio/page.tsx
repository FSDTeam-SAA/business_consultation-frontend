import PageHero from "@/components/page-hero";
import PortfolioPage from "@/components/portfolio/portfolio-page";
import React from "react";

export default function page() {
  return (
    <div>
      <PageHero
        title={"Portfolio"}
        breadcrumb={"Portfolio"}
        currentRoute={"portfolio"}
      />
      <PortfolioPage />
    </div>
  );
}
