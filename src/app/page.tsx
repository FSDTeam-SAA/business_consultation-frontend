
import BlogSection from "@/components/blog/BlogSection";
import AboutUsSection from "@/components/Home/AboutUsSection";
import HeroSection from "@/components/Home/hero-section";
import Services from "@/components/Home/Services";
import ServiceSection from "@/components/Home/ServiceSection";
import WhyChooseUsSection from "@/components/Home/whyChooseUs";
export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServiceSection/>
      <AboutUsSection/>
      <Services/>
      <WhyChooseUsSection/>

    <BlogSection/>

 
      
    </main>
  );
}
