import PageHero from "@/components/page-hero";

export default function AccountPage() {
  return (
    <main className="min-h-screen">
      <PageHero title="Account" breadcrumb="Account" currentRoute="account" />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-2xl font-bold">Your Account</h2>
          <p>Account information and settings go here...</p>
        </div>
      </div>
    </main>
  );
}
