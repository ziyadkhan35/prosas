import AboutUs from "@/components/about-us/AboutUs";
import ContactCard from "@/components/cards/common/ContactCard";
import FeatureSection from "@/components/features/FeatureSection";
import Hero from "@/components/main/Hero";
import Partners from "@/components/partners/Partners";
import OurProjects from "@/components/projects/OurProjects";
import Services from "@/components/services/Services";

export default function Home() {
  return (
    
    <main className="flex flex-col gap-12">

      {/* Hero section */}
      <div id="main">
        <Hero />
      </div>

      {/* About our company section */}
      <div id="about" className="my-5 lg:my-10">
        <AboutUs />
      </div>

      {/* Features section */}
      <FeatureSection />

      {/* Contact us banner section */}
      <div className="my-8 md:my-16">
        <ContactCard />
      </div>

      {/* Services */}
      <div id="services" className="my-8 md:my-16">
        <Services />
      </div>
      
      {/* Recent works section with carousel */}
      <div id="projects" className="md:my-16">
        <OurProjects />
      </div>

      {/* Our partners section */}
      <div className="mb-16" id="partners">
        <Partners />
      </div>

    </main>
  );
}
