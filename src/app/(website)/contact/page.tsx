import PageHero from "@/components/page-hero";
import ContactForm from "@/components/contact/ContactForm";
import NewsletterSection from "@/components/newsletter-section";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Contact Us"
        breadcrumb="Contact Us"
        currentRoute="contact"
      />
    
    <ContactForm/>
    <NewsletterSection/>
    </main>
  );
}
