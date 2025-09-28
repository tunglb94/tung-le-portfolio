// src/app/page.tsx
import Header from "@/components/common/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceContentSection from "@/components/sections/ExperienceContentSection";
import ExperienceSection from "@/components/sections/ExperienceSection"; // Đây là timeline "Quá trình làm việc"
import ProjectsSection from "@/components/sections/ProjectsSection"; // <-- Import section mới

export default function HomePage() {
  return (
    <main className="bg-zinc-950 min-h-screen text-white">
      <Header />
      
      <HeroSection />
      <AboutSection />
      <ExperienceContentSection /> 
      <ExperienceSection />
      <ProjectsSection /> {/* <-- SỬ DỤNG SECTION MỚI Ở ĐÂY */}
      
    </main>
  );
}