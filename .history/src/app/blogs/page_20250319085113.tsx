import Navbar from "@/components/navbar";
import PageHero from "@/components/page-hero";
import Footer from "@/components/footer";

export default function BlogsPage() {
  return (
    <main className="min-h-screen">
      <Navbar currentRoute="blogs" />
      <PageHero title="Blogs" breadcrumb="Blogs" currentRoute="blogs" />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-2xl font-bold">Latest Articles</h2>
          <p>Blog posts go here...</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
