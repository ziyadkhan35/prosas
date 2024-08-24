import ContactCard from "@/components/cards/common/ContactCard";
import CompanyIntro from "@/components/cards/company-intoduction/CompanyIntro";
import Employees from "@/components/cards/employees/Employees";
import FeatureSection from "@/components/features/FeatureSection";
import Hero from "@/components/main/Hero";
import Partners from "@/components/partners/Partners";
import OurProjects from "@/components/projects/OurProjects";

export default function Home() {
  return (
    
    <main className="flex flex-col gap-12">

      {/* Hero section */}
      <Hero />

      {/* Features section */}
      <FeatureSection />

      {/* Contact us banner section */}
      <div className=" my-8 md:my-16">
        <ContactCard />
      </div>

      {/* About our company section */}
      <div id="about" className="my-5 lg:my-10">
        <CompanyIntro />
      </div>

      {/* Recent works section with carousel */}
      <div id="projects">
        <OurProjects />
      </div>

      {/* Employees section with carousel */}
      <div id="employees">
        <Employees />
      </div>

      {/* Our partners section */}
      <div className="mb-16" id="partners">
        <Partners />
      </div>
    
    </main>
  );
}
