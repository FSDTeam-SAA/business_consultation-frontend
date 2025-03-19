import PageHero from "@/components/page-hero";
import Footer from "@/components/footer";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Portfolio"
        breadcrumb="Portfolio"
        currentRoute="portfolio"
      />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-2xl font-bold">Our Portfolio</h2>
          <p>Portfolio content goes here...</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
