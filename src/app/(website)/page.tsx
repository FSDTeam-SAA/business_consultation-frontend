"use client";

import AboutUsSection from "@/components/Home/AboutUsSection";
import DescrptionText from "@/components/Home/DescrptionText";
import HeroSection from "@/components/Home/hero-section";
import Services from "@/components/Home/Services";
import ServiceSection from "@/components/Home/ServiceSection";
import WhyChooseUsSection from "@/components/Home/whyChooseUs";
import NewsletterSection from "@/components/newsletter-section";
import SearchComponent from "@/components/search";
// import ProtectedRoute from "@/components/Auth/ProtectedRoute";
// import BlogSection from "@/components/blog/BlogSection";
// import { useAuth } from "@/hooks/useAuth";

export default function Home() {
  // const { user } = useAuth();

  return (
    <main className="">
      {" "}
      {/* Add padding to account for fixed navbar */}
    
      <HeroSection />
      <div>
        <DescrptionText />
      </div>
      <div className="">
        <SearchComponent />
      </div>
      <ServiceSection />
      <AboutUsSection />
      <Services />
      <WhyChooseUsSection />
      <NewsletterSection/>
    </main>
  );
}
