// src/components/sections/AboutSection.tsx
'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

// --- SVG Icons Mới (giữ nguyên) ---
const TeamIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.084-1.283-.24-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.084-1.283.24-1.857m10.514-6.32a4.5 4.5 0 00-9.028 0m9.028 0a4.5 4.5 0 01-9.028 0M12 9a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" /></svg>;
const AdsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-2.236 9.168-5.584M5.436 13.683L5 15c0 4.418 3.582 8 8 8s8-3.582 8-8-3.582-8-8-8c-1.482 0-2.868.405-4.12.983" /></svg>;
const DataIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7a8 3 0 0116 0M12 11a8 3 0 00-8 3v1c0 2.21 3.582 4 8 4s8-1.79 8-4v-1a8 3 0 00-8-3z" /></svg>;
const CertificateIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>;
const TrophyIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const ChartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>;

export default function AboutSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="about" className="bg-zinc-900 py-20 text-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold hero-text-gradient">{t.aboutTitle}</h2>
          <p className="text-lg text-gray-400 mt-4">{t.aboutSubtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <div className="md:col-span-3 space-y-12">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">{t.coreCompetencies}</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <TeamIcon />
                  <div>
                    <h4 className="text-xl font-bold text-white">{t.teamManagementTitle}</h4>
                    <p className="text-lg text-gray-300 mt-1" dangerouslySetInnerHTML={{ __html: t.teamManagementDesc }} />
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <AdsIcon />
                  <div>
                    <h4 className="text-xl font-bold text-white">{t.adsExpertTitle}</h4>
                    <p className="text-lg text-gray-300 mt-1" dangerouslySetInnerHTML={{ __html: t.adsExpertDesc }} />
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <DataIcon />
                  <div>
                    <h4 className="text-xl font-bold text-white">{t.dataAnalysisTitle}</h4>
                    <p className="text-lg text-gray-300 mt-1" dangerouslySetInnerHTML={{ __html: t.dataAnalysisDesc }} />
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-3"><CertificateIcon /> {t.certificationsTitle}</h3>
              <p className="text-lg text-gray-300 mb-6" dangerouslySetInnerHTML={{ __html: t.certificationsDesc }} />
              <Image src="/about/strategycoast.jpg" alt="StrategyCoast Coaches" width={800} height={400} className="rounded-lg shadow-lg" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-3"><TrophyIcon /> {t.achievementsTitle}</h3>
              <div className="space-y-6">
                <div className="bg-zinc-800/50 p-6 rounded-lg">
                  <p className="text-lg text-gray-300" dangerouslySetInnerHTML={{ __html: t.achievementJNT }} />
                </div>
                <div className="bg-zinc-800/50 p-6 rounded-lg flex items-center gap-4">
                  <ChartIcon />
                  <p className="text-lg text-gray-300" dangerouslySetInnerHTML={{ __html: t.achievementIntermec }} />
                </div>
                <div className="bg-zinc-800/50 p-6 rounded-lg flex items-center gap-4">
                  <ChartIcon />
                  <p className="text-lg text-gray-300" dangerouslySetInnerHTML={{ __html: t.achievementBichNa }} />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="md:col-span-2 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <Image src="/about/meta-event-2.jpg" alt="Meta Event 2" width={500} height={400} className="rounded-lg shadow-2xl object-cover w-full" />
            <Image src="/about/meta-event-1.jpg" alt="Meta Event 1" width={500} height={400} className="rounded-lg shadow-2xl object-cover w-full" />
            <Image src="/about/meta-event-3.jpg" alt="Meta Event 3" width={500} height={400} className="rounded-lg shadow-2xl object-cover w-full" />
            <Image src="/about/meta-event-4.jpg" alt="Meta Event 4" width={500} height={400} className="rounded-lg shadow-2xl object-cover w-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}