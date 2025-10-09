// src/components/sections/HeroSection.tsx
'use client'; 
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext'; // Import hook
import { translations } from '@/lib/translations'; // Import nội dung

const clientLogos = [
  { src: '/logos/GNG.png', alt: 'Bernard Healthcare', url: 'https://bernard.vn/' },
  { src: '/logos/intermec.png', alt: 'InterMec', url: 'https://intermec.vn/' },
  { src: '/logos/jnt-express.png', alt: 'J&T Express', url: 'https://jtexpress.vn/' },
  { src: '/logos/meta.png', alt: 'Meta', url: 'https://business.facebook.com/' },
  { src: '/logos/tiktok.png', alt: 'TikTok', url: 'https://www.tiktok.com/business/' },
  { src: '/logos/USAC.png', alt: 'USAC Chiropractic', url: 'https://usac.vn/' },
  { src: '/logos/Vinamilk.png', alt: 'Vinamilk', url: 'https://www.vinamilk.com.vn/' },
  { src: '/logos/bichna.png', alt: 'Bichna Clinic', url: 'https://bichnabeautyvn.com/' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6 } }, 
};

export default function HeroSection() {
  const { language } = useLanguage(); // Lấy ngôn ngữ hiện tại
  const t = translations[language]; // Lấy bộ text tương ứng

  // Cập nhật lại contactLinks để dùng text từ file dịch
  const contactLinks = [
    { 
      label: t.heroCTAEmail, 
      href: 'mailto:tunglb94@gmail.com', 
      icon: Mail, 
      color: 'bg-cyan-600 hover:bg-cyan-500',
      target: '_self'
    },
    { 
      label: t.heroCTAZalo, 
      href: 'https://zalo.me/0946328867', 
      icon: MessageSquare, 
      color: 'bg-blue-600 hover:bg-blue-500',
      target: '_blank'
    },
    { 
      label: t.heroCTACall, 
      href: 'tel:0946328867', 
      icon: Phone, 
      color: 'bg-green-600 hover:bg-green-500',
      target: '_self'
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden bg-zinc-950 text-white"
    >
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-end">
        {/* === Cột bên trái: Nội dung văn bản === */}
        <div className="flex flex-col justify-center order-2 md:order-1 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 hero-text-gradient">
            {t.heroTitle}
          </h1>
          <p
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto md:mx-0"
            dangerouslySetInnerHTML={{ __html: t.heroDescription }}
          />
          
          <motion.div
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-x-8 gap-y-4 mb-8 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center md:justify-start">
              <Mail size={20} className="mr-2 text-cyan-400" />
              <a href="mailto:tunglb94@gmail.com" className="text-gray-300 hover:text-white">
                tunglb94@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Phone size={20} className="mr-2 text-cyan-400" />
              <a href="tel:0946328867" className="text-gray-300 hover:text-white">
                094.632.8867
              </a>
            </div>
          </motion.div>

          {/* === Contact Buttons (CTA) === */}
          <motion.div
            className="flex flex-wrap justify-center md:justify-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.target}
                rel="noopener noreferrer"
                className={`flex items-center gap-2 ${link.color} text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg`}
              >
                <link.icon size={20} />
                {link.label}
              </a>
            ))}
          </motion.div>

          {/* === Logo khách hàng === */}
          <div className="mt-12 md:mt-16 text-gray-400">
            <h3 className="text-xl font-semibold mb-6">{t.heroClients}</h3>
            
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 justify-items-center md:justify-items-start"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
            >
              {clientLogos.map((logo, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="w-full"
                >
                  <a
                    href={logo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/5 p-4 rounded-lg h-24 w-full flex items-center justify-center
                               transition-all duration-300 hover:bg-white/10 hover:scale-105"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={180}
                      height={70}
                      className="h-full w-auto object-contain"
                    />
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* === Cột bên phải: Hình ảnh === */}
        <div className="flex justify-center md:justify-end order-1 md:order-2 relative mt-8 md:mt-0">
          <div className="absolute inset-0 bg-gradient-to-tl from-cyan-500 to-transparent opacity-30 rounded-full blur-3xl scale-125 animate-pulse-slow"></div>
          <Image
            src="/tung-le-portrait.png"
            alt="Tùng Lê Portfolio Portrait"
            width={700}
            height={900}
            priority
            unoptimized
            className="relative z-10 max-w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}