import PageHero from "@/components/page-hero";
import { AboutBusiness } from "@/components/about/AboutBusiness";
import NewsletterSection from "@/components/newsletter-section";
// import { TestimonialsCarousel } from "@/components/about/TestimonialsCarousel";
// import FlexiblePricing from "@/components/about/FlexiblePricing";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <PageHero title="About Us" breadcrumb="About Us" currentRoute="about" />
      <AboutBusiness />
      {/* <TestimonialsCarousel /> */}
      {/* <FlexiblePricing /> */}
      <NewsletterSection/>
    </main>
  );
}
