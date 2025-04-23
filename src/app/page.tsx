"use client";

import AboutUsSection from "@/components/Home/AboutUsSection";
import HeroSection from "@/components/Home/hero-section";
import Services from "@/components/Home/Services";
import ServiceSection from "@/components/Home/ServiceSection";
import WhyChooseUsSection from "@/components/Home/whyChooseUs";
// import BlogSection from "@/components/blog/BlogSection";
// import { useAuth } from "@/hooks/useAuth";

export default function Home() {
  // const { user } = useAuth();

  return (
    <main className="">
      {" "}
      {/* Add padding to account for fixed navbar */}
      <HeroSection />
      <ServiceSection />
      <AboutUsSection />
      <Services />
      <WhyChooseUsSection />
      {/* Blog section with spacing */}
      {/* {!user?.hasActiveSubscription && (
        <div className="mt-12 border-t pt-8">
          <BlogSection />
        </div>
      )} */}
    </main>
  );
}
