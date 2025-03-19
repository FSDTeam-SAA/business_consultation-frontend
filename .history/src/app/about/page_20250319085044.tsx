import Navbar from "@/components/navbar";
import PageHero from "@/components/page-hero";
import Footer from "@/components/footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar currentRoute="about" />
      <PageHero title="About Us" breadcrumb="About Us" currentRoute="about" />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-2xl font-bold">Our Story</h2>
          <p>About us content goes here...</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
