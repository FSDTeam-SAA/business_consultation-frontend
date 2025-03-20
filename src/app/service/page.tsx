import Services from "@/components/Home/Services";
import PageHero from "@/components/page-hero";
import AboutBusiness from "@/components/service/AboutBusiness";
import ChoosePlan from "@/components/service/ChoosePlan";

export default function ServicePage() {
  return (
    <main className="min-h-screen">
      <PageHero
        title="Our Services"
        breadcrumb="Our Services"
        currentRoute="service"
      />
      <AboutBusiness/>
   
  <Services/>
  <ChoosePlan/>
    </main>
  );
}
