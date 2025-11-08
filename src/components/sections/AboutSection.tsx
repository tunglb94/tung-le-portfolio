// src/components/sections/AboutSection.tsx
'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { 
    ExternalLink, Users, Zap, Database, Award, TrendingUp 
} from 'lucide-react'; 


// Dữ liệu Chứng Chỉ (Giữ nguyên)
const certifications = [
  // Google
  { src: '/about/google-search-cert.png', alt: 'Google Ads Search Certification', link: 'https://skillshop.credential.net/449524fe-376f-44b5-847f-281172716840#acc.Dkm0drOX' },
  { src: '/about/google-display-cert.png', alt: 'Google Ads Display Certification', link: 'https://skillshop.credential.net/9e3f0309-ea8e-4df0-bd95-efe37028f0d0#acc.x7GOIcHd' },
  { src: '/about/google-shopping-cert.png', alt: 'AI-Powered Shopping Ads Certification', link: 'https://skillshop.credential.net/1855207d-761f-4be7-945d-c1588312aa4b#acc.clvXwCjO' },
  { src: '/about/google-measurement-cert.png', alt: 'Google Ads Measurement Certification', link: 'https://skillshop.credential.net/090a9aa8-2e5e-45c0-b7c0-e758a7d20f39#acc.MVNtD4mx' },
  // Meta
  { src: '/about/meta-community-cert.png', alt: 'Meta Community Strategies', link: 'https://certifications.facebookblueprint.com/student/award/nRs3ocTCrauNgbgAurkjhovB' },
  { src: '/about/meta-instagram-cert.png', alt: 'Meta Instagram Business Presence', link: 'https://www.facebookblueprint.com/student/award/QbYt9fksupzExXzSVbbh8imA' },
  { src: '/about/meta-facebook-cert.png', alt: 'Meta Facebook Page Presence', link: 'https://www.facebookblueprint.com/student/award/gyYk7aSoyPb4DF8GVJ7pfVtF' },
  // CHỨNG CHỈ MỚI: Google AI Essentials
  { src: '/about/google-ai-essentials-cert.png', alt: 'Google AI Essentials', link: 'https://www.facebookblueprint.com/student/award/8cQjNDGzUh4NtE3RKH3kyc7x' },
];

const CertImage = ({ src, alt, link, index }: { src: string, alt: string, link: string, index: number }) => (
    <motion.div
        className="relative bg-zinc-800 rounded-lg overflow-hidden group border border-white/10 shadow-xl flex items-center justify-center w-full aspect-square"
        // Animation được giữ nguyên
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
    >
        <a href={link} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative">
            <Image 
                src={src} 
                alt={alt} 
                fill={true} 
                style={{ objectFit: 'contain' }}
                className="p-2 sm:p-4 transition-opacity duration-300 group-hover:opacity-80" 
                unoptimized
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExternalLink size={30} className="text-cyan-400" />
            </div>
        </a>
    </motion.div>
)


export default function AboutSection() {
  const { language } = useLanguage();
  const t = translations[language];

  // Icons
  const TeamIcon = () => <Users className="h-8 w-8 text-cyan-400" />;
  const AdsIcon = () => <Zap className="h-8 w-8 text-cyan-400" />; 
  const DataIcon = () => <Database className="h-8 w-8 text-cyan-400" />; 
  const CertificateIcon = () => <Award className="h-6 w-6 text-cyan-400" />; 
  const TrophyIcon = () => <Award className="h-6 w-6 text-cyan-400" />; 
  const ChartIcon = () => <TrendingUp className="h-6 w-6 text-cyan-400" />; 

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

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* CỘT BÊN TRÁI: NỘI DUNG CHÍNH */}
          <div className="space-y-12">
            
            {/* KHỐI 1: CORE COMPETENCIES (Delay 0.0) */}
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
            
            {/* KHỐI 2: ACHIEVEMENTS (Delay 0.2) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
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
            
            {/* KHỐI 3: CERTIFICATIONS (CHỨNG CHỈ GOOGLE/META) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-3"><CertificateIcon /> {t.certificationsTitle}</h3>
              <p className="text-lg text-gray-300 mb-6" dangerouslySetInnerHTML={{ __html: t.certificationsDesc }} />
              
              <div className="grid grid-cols-2 gap-4"> 
                  {certifications.map((cert, index) => (
                      <CertImage 
                          key={index} 
                          src={cert.src}
                          alt={cert.alt} 
                          link={cert.link} 
                          index={index}
                      />
                  ))}
              </div>
            </motion.div>
          </div>

          {/* CỘT BÊN PHẢI: ẢNH VÀ STRATEGYCOAST */}
          {/* KHẮC PHỤC LỖI RENDER: ĐẶT MẶC ĐỊNH LÀ HIỂN THỊ */}
          <div 
            className="space-y-6 pt-1 md:pt-0" 
          >
            
            {/* StrategyCoast (Thêm lại motion để giữ hiệu ứng animation) */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <h3 className="text-xl font-bold text-white mb-4">Hoàn thành khóa học chuyên sâu StrategyCoast</h3>
                <Image src="/about/strategycoast.jpg" alt="StrategyCoast Coaches" width={800} height={400} className="rounded-lg shadow-2xl object-cover w-full h-auto" />
            </motion.div>
            
            {/* Các ảnh Meta Event (Có thể thêm motion cho từng ảnh nếu muốn) */}
            <Image src="/about/meta-event-2.jpg" alt="Meta Event 2" width={500} height={400} className="rounded-lg shadow-2xl object-cover w-full" />
            <Image src="/about/meta-event-1.jpg" alt="Meta Event 1" width={500} height={400} className="rounded-lg shadow-2xl object-cover w-full" />
            <Image src="/about/meta-event-3.jpg" alt="Meta Event 3" width={500} height={400} className="rounded-lg shadow-2xl object-cover w-full" />
            <Image src="/about/meta-event-4.jpg" alt="Meta Event 4" width={500} height={400} className="rounded-lg shadow-2xl object-cover w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}