import Services from "@/components/Home/Services";
import NewsletterSection from "@/components/newsletter-section";
import PageHero from "@/components/page-hero";
import AboutBusiness from "@/components/service/AboutBusiness";
import Pricing from "@/components/service/Pricing";

export default function ServicePage() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Our Services"
        breadcrumb="Our Services"
        currentRoute="service"
      />
      <AboutBusiness />

      <Services />
      <Pricing />
      <NewsletterSection/>
    </main>
  );
}
