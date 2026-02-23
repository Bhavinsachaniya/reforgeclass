import Navbar from "@/components/Navbar";
import HeroImageSequence from "@/components/HeroImageSequence";
import HeroText from "@/components/HeroText";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import StatsAboutSection from "@/components/StatsAboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-brand selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full">
        {/* The HeroImageSequence handles its own scroll-tied height (400vh) and sticky canvas */}
        <HeroImageSequence mode="scroll" />

        {/* The Text overlay sits on top of the initial view */}
        <HeroText />
      </section>

      {/* Main Content Sections */}
      <div className="relative z-20 bg-background">
        <ServicesSection />
        <ProjectsSection />
        <StatsAboutSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
