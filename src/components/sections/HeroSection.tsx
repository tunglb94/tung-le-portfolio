'use client'; 
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext'; 
import { translations } from '@/lib/translations'; 

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
    transition: { staggerChildren: 0.05, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }, 
};

export default function HeroSection() {
  const { language } = useLanguage(); 
  const t = translations[language]; 

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
      className="relative min-h-screen flex items-center justify-center py-12 md:py-20 overflow-hidden"
    >
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* === LEFT CONTENT === */}
        <div className="flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left">
          <motion.h1 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
          >
            {t.heroTitle}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t.heroDescription }}
          />
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6 mb-10 text-sm font-medium"
          >
            <a href="mailto:tunglb94@gmail.com" className="flex items-center justify-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors">
              <Mail size={18} /> tunglb94@gmail.com
            </a>
            <a href="tel:0946328867" className="flex items-center justify-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors">
              <Phone size={18} /> 094.632.8867
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center lg:justify-start gap-3"
          >
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.target}
                rel="noopener noreferrer"
                className={`flex items-center gap-2 ${link.color} text-white text-sm font-bold py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-cyan-500/20`}
              >
                <link.icon size={18} />
                {link.label}
              </a>
            ))}
          </motion.div>

          {/* Client Logos */}
          <div className="mt-16">
            <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 mb-6">{t.heroClients}</h3>
            <motion.div
              className="grid grid-cols-3 md:grid-cols-4 gap-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {clientLogos.map((logo, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <a
                    href={logo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white/[0.03] border border-white/5 p-3 rounded-xl h-16 w-full flex items-center justify-center transition-all hover:bg-white/[0.08] hover:border-cyan-500/30"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={120}
                      height={50}
                      className="h-full w-auto object-contain opacity-50 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all"
                    />
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* === RIGHT IMAGE === */}
        <div className="flex justify-center lg:justify-end order-1 lg:order-2 relative mt-10 lg:mt-0">
          <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-[120px] scale-110 animate-pulse"></div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 w-full max-w-[500px]"
          >
            <Image
              src="/tung-le-portrait.png"
              alt="Tùng Lê Portfolio"
              width={700}
              height={900}
              priority
              unoptimized
              className="w-full h-auto drop-shadow-[0_0_50px_rgba(34,211,238,0.2)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}