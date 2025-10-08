// src/app/[lang]/page.tsx
import Header from "@/components/common/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceContentSection from "@/components/sections/ExperienceContentSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

// Hàm để lấy file dịch
async function getTranslations(lang: 'en' | 'vi') {
  const translations = await import(`@/locales/${lang}.json`);
  return translations.default;
}

export default async function HomePage({ params: { lang } }: { params: { lang: 'en' | 'vi' } }) {
  const t = await getTranslations(lang);

  return (
    <main className="bg-zinc-950 min-h-screen text-white">
      <Header lang={lang} translations={t.header} />
      
      <HeroSection translations={t.hero} />
      <AboutSection />
      <ExperienceContentSection /> 
      <ExperienceSection />
      <ProjectsSection />
      
    </main>
  );
}