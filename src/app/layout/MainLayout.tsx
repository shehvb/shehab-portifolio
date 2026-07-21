import { Header } from "./Header";
import { Footer } from "./Footer";
import { HeroSection } from "sections/Hero/HeroSection";
import { AboutSection } from "sections/About/AboutSection";
import { SkillsSection } from "sections/Skills/SkillsSection";
import { ProjectsSection } from "sections/Projects/ProjectsSection";
import { ContactSection } from "sections/Contact/ContactSection";

export const MainLayout = () => (
  <div className="min-h-screen  bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-500">
    <Header />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);
