<<<<<<< HEAD
import { redirect } from "next/navigation";

export default function AccountPage() {
  redirect("/account/personal-information");
=======
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
>>>>>>> 928e76c2e57d7c45a050bba8b60035e6274a6b95
}
