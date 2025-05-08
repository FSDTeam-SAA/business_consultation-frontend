
import BlogPage from "@/components/blog/blog-container";
import PageHero from "@/components/page-hero";
import React from "react";
import { Suspense } from "react";

export default function page() {
  
 
  
  return (
    <div>
      <PageHero title={"Blogs"} breadcrumb={"Blogs"} currentRoute={"blogs"} />
      <Suspense fallback={<div>Loading...</div>}>
        <BlogPage />
      </Suspense>
    </div>
  );
}
