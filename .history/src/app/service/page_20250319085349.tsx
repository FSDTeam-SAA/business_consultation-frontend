import Navbar from "@/components/navbar";
import PageHero from "@/components/page-hero";
import Footer from "@/components/footer";

export default function ServicePage() {
  return (
    <main className="min-h-screen">
      <Navbar currentRoute="service" />
      <PageHero
        title="Our Services"
        breadcrumb="Our Services"
        currentRoute="service"
      />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-2xl font-bold">Services We Offer</h2>
          <p>Services content goes here...</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
