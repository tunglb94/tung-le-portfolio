// src/components/sections/ProjectsSection.tsx
'use client';
import { motion } from 'framer-motion';
import { 
  Layers, Github, ExternalLink, HeartPulse, MapPin, Building, Bot, Wrench 
} from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export default function ProjectsSection() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="projects" className="bg-zinc-950 py-20 text-white">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold hero-text-gradient">
            {t.projectsTitle}
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
            {t.projectsSubtitle}
          </p>
        </motion.div>

        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-bold text-cyan-400 mb-4">
                {t.bjfTitle}
              </h3>
              <p className="text-lg text-gray-300 mb-4" dangerouslySetInnerHTML={{ __html: t.bjfDescription }}/>

              <div className="text-gray-400 text-base mb-6 space-y-2">
                <p><strong>{t.company}:</strong> BJF Group</p>
                <p className="flex items-center"><MapPin size={16} className="mr-2 text-cyan-400"/>{t.address}: 77 Đ. Nguyễn Duy Dương, Phường 9, Quận 5, Hồ Chí Minh</p>
                <p><strong>{t.website}:</strong> <a href="https://bjf.com.vn/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">bjf.com.vn</a></p>
              </div>

              <div className="flex items-center gap-4 mb-8">
                <a href="https://tunglb941.pythonanywhere.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                  <ExternalLink size={20} />
                  {t.viewLive}
                </a>
                <a href="https://github.com/tunglb94/bjf-jewelry-store" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-zinc-700 hover:bg-zinc-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                  <Github size={20} />
                  {t.sourceCode}
                </a>
              </div>
              <Image
                src="/projects/bjf-backend.png"
                alt="BJF Backend System"
                width={1200}
                height={800}
                className="rounded-lg shadow-2xl border border-white/10 w-full h-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-[600px] w-full bg-zinc-800 rounded-xl p-2 border border-white/10 shadow-2xl group"
            >
              <div className="h-6 bg-zinc-900 rounded-t-lg flex items-center px-2">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-1.5"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-1.5"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              
              <a href="https://tunglb941.pythonanywhere.com/" target="_blank" rel="noopener noreferrer" className="relative block h-full w-full">
                 <Image
                    src="/projects/bjf-frontend.png"
                    alt="BJF Frontend Screenshot"
                    fill={true} 
                    style={{ objectFit: 'cover' }}
                    className="rounded-b-lg"
                 />
                 <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center text-white">
                       <ExternalLink size={40} />
                       <p className="mt-2 text-xl font-bold">{t.clickViewLive}</p>
                    </div>
                 </div>
              </a>
            </motion.div>
          </div>
        </div>

        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              // Điều chỉnh grid và kích thước ảnh tại đây
              className="grid grid-cols-2 gap-3 max-w-sm mx-auto p-4 bg-zinc-800/50 rounded-lg shadow-inner border border-white/10" // Thêm padding và background cho khung
            >
              <Image src="/projects/doctor-ai-1.jpg" alt="Doctor AI Screen 1" width={100} height={200} className="rounded-xl shadow-lg transform rotate-3 border-2 border-white/10 mx-auto w-full h-auto" />
              <Image src="/projects/doctor-ai-2.jpg" alt="Doctor AI Screen 2" width={100} height={200} className="rounded-xl shadow-lg transform -rotate-3 mt-4 border-2 border-white/10 mx-auto w-full h-auto" /> {/* Giảm mt-8 xuống mt-4 */}
              <Image src="/projects/doctor-ai-3.jpg" alt="Doctor AI Screen 3" width={100} height={200} className="rounded-xl shadow-lg transform -rotate-2 border-2 border-white/10 mx-auto w-full h-auto" />
              <Image src="/projects/doctor-ai-4.jpg" alt="Doctor AI Screen 4" width={100} height={200} className="rounded-xl shadow-lg transform rotate-2 mt-4 border-2 border-white/10 mx-auto w-full h-auto" /> {/* Giảm mt-8 xuống mt-4 */}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className="lg:pl-12"
            >
              <HeartPulse size={40} className="text-cyan-400 mb-4" />
              <h3 className="text-3xl font-bold text-cyan-400 mb-4">
                {t.doctorAiTitle}
              </h3>
              <p className="text-lg text-gray-300 mb-6" dangerouslySetInnerHTML={{ __html: t.doctorAiDescription }}/>
              <ul className="space-y-4 text-lg text-gray-300 list-disc list-inside">
                <li dangerouslySetInnerHTML={{ __html: t.doctorAiPoint1 }}/>
                <li dangerouslySetInnerHTML={{ __html: t.doctorAiPoint2 }}/>
                <li dangerouslySetInnerHTML={{ __html: t.doctorAiPoint3 }}/>
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <Building size={40} className="text-cyan-400 mb-4" />
              <h3 className="text-3xl font-bold text-cyan-400 mb-4">
                {t.nankyTitle}
              </h3>
              <p className="text-lg text-gray-300 mb-6" dangerouslySetInnerHTML={{ __html: t.nankyDescription }} />
              
              {/* THÊM WEBSITE CỦA NANKY BEAUTY */}
              <div className="text-gray-400 text-base mb-6 space-y-2">
                <p><strong>{t.website}:</strong> <a href="http://nankybeauty.com/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">http://nankybeauty.com/</a></p>
              </div>
              
              <div className="flex items-center gap-4">
                <a href="https://www.instagram.com/nanky.beauty" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 text-white font-semibold py-2 px-4 rounded-lg transition-opacity">
                  Instagram
                </a>
                <a href="https://www.facebook.com/nanky.beaute" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                  Facebook
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src="/projects/nanky-beauty.jpg"
                alt="Nanky Beauty Storefront"
                width={800}
                height={1000}
                className="rounded-lg shadow-2xl border border-white/10 w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            className="bg-zinc-800/50 p-6 rounded-lg border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Bot size={28} className="text-cyan-400 mb-3" />
            <h4 className="text-xl font-bold text-white mb-2">{t.landPriceToolTitle}</h4>
            <p className="text-gray-300 mb-4">{t.landPriceToolDesc}</p>
            <div className="flex items-center gap-4">
                <a href="https://bjf-group-app.onrender.com/" target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
                  <ExternalLink size={16} /> {t.viewLive}
                </a>
                <a href="https://github.com/tunglb94/bjf" target="_blank" rel="noopener noreferrer" className="text-sm flex items-center gap-2 text-cyan-400 hover:text-cyan-300">
                  <Github size={16} /> {t.sourceCode}
                </a>
              </div>
          </motion.div>
          
          <motion.div
            className="bg-zinc-800/50 p-6 rounded-lg border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Wrench size={28} className="text-cyan-400 mb-3" />
            <h4 className="text-xl font-bold text-white mb-2">{t.nankyCrmTitle}</h4>
            <p className="text-gray-300">{t.nankyCrmDesc}</p>
          </motion.div>

          <motion.div
            className="bg-zinc-800/50 p-6 rounded-lg border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Layers size={28} className="text-cyan-400 mb-3" />
            <h4 className="text-xl font-bold text-white mb-2">{t.otherSystemsTitle}</h4>
            <p className="text-gray-300">{t.otherSystemsDesc}</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}