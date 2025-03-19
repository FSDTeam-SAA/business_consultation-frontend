import PageHero from "@/components/page-hero";
import Footer from "@/components/footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Contact Us"
        breadcrumb="Contact Us"
        currentRoute="contact"
      />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-2xl font-bold">Get in Touch</h2>
          <p>Contact form and information goes here...</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
