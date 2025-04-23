"use client";

import HeroSection from "@/components/Home/hero-section";
import ServiceSection from "@/components/Home/ServiceSection";
import AboutUsSection from "@/components/Home/AboutUsSection";
import Services from "@/components/Home/Services";
import WhyChooseUsSection from "@/components/Home/whyChooseUs";
import SearchComponent from "@/components/search";
// import BlogSection from "@/components/blog/BlogSection";
// import { useAuth } from "@/hooks/useAuth";

export default function Home() {
  // const { user } = useAuth();

  return (
    <main className="">
      {" "}
      {/* Add padding to account for fixed navbar */}
      <HeroSection />
      <div className="">
        <SearchComponent />
      </div>
      <ServiceSection />
      <AboutUsSection />
      <Services />
      <WhyChooseUsSection />
    </main>
  );
}
