import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AboutSection from "./components/AboutSection";
import CertificationsSection from "./components/CertificationsSection";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import ProjectsSection from "./components/ProjectsSection";
import SapModulesSection from "./components/SapModulesSection";
import SkillsSection from "./components/SkillsSection";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Fixed full-page PPC background */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage:
            "url('/assets/generated/ppc-background.dim_1920x1080.jpg')",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
        aria-hidden="true"
      />
      {/* Dark overlay for readability — lightened so background shows through */}
      <div
        className="fixed inset-0 -z-10"
        style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
        aria-hidden="true"
      />

      <div
        className="min-h-screen font-sans"
        style={{ background: "transparent" }}
      >
        <NavBar />
        <main>
          <HeroSection />
          <div style={{ background: "transparent" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
              <AboutSection />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <SkillsSection />
                <ExperienceSection />
              </div>
              <SapModulesSection />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <ProjectsSection />
                <div className="space-y-8">
                  <CertificationsSection />
                  <ContactSection />
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}
