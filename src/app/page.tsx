"use client";

import HeroSection from "@/components/Home/hero-section";
import ServiceSection from "@/components/Home/ServiceSection";
import AboutUsSection from "@/components/Home/AboutUsSection";
import Services from "@/components/Home/Services";
import WhyChooseUsSection from "@/components/Home/whyChooseUs";
<<<<<<< HEAD
import BlogSection from "@/components/blog/BlogSection";
import { useAuth } from "@/hooks/useAuth";

export default function Home() {
  const { user } = useAuth();

  console.log("aaskjldfasfdsaflsdflsd",user); // You can remove this in production
=======
// import BlogSection from "@/components/blog/BlogSection";
// import { useAuth } from "@/hooks/useAuth";

export default function Home() {
  // const { user } = useAuth();
>>>>>>> b0172744cf09b7c39a82e0e4809be03d7ec75d43

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
<<<<<<< HEAD
      {!user?.hasActiveSubscription && (
        <div className="mt-12 border-t pt-8">
          <BlogSection />
        </div>
      )}
=======
      {/* {!user?.hasActiveSubscription && (
        <div className="mt-12 border-t pt-8">
          <BlogSection />
        </div>
      )} */}
>>>>>>> b0172744cf09b7c39a82e0e4809be03d7ec75d43
    </main>
  );
}
