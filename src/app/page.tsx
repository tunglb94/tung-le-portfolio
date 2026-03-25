'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Keyboard, Navigation } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion'; 

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Header from "@/components/common/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceContentSection from "@/components/sections/ExperienceContentSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TechBackground from "@/components/common/TechBackground";

export default function HomePage() {
  return (
    <main className="relative h-screen w-full overflow-hidden text-white bg-zinc-950">
      <TechBackground />
      <Header />

      {/* === THANH HƯỚNG DẪN NỔI (USER GUIDE) === */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }} 
        className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] pointer-events-none"
      >
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2.5 flex flex-col md:flex-row items-center gap-3 md:gap-6 shadow-2xl">
          
          {/* Hướng dẫn cuộn dọc */}
          <div className="flex items-center gap-2 text-gray-300 text-[10px] md:text-xs uppercase tracking-widest font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 animate-bounce">
              <rect width="14" height="20" x="5" y="2" rx="7"/>
              <path d="M12 6v4"/>
            </svg>
            <span>Cuộn dọc chi tiết</span>
          </div>
          
          <div className="hidden md:block w-[1px] h-4 bg-white/20"></div>

          {/* Hướng dẫn lướt ngang */}
          <div className="flex items-center gap-2 text-gray-300 text-[10px] md:text-xs uppercase tracking-widest font-semibold">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 animate-pulse">
              <path d="m15 18 6-6-6-6"/>
              <path d="M3 12h18"/>
              <path d="m9 6-6 6 6 6"/>
            </svg>
            <span>Lướt ngang chuyển trang</span>
          </div>
        </div>
      </motion.div>
      
      <Swiper
        direction={'horizontal'} 
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={{ forceToAxis: true }}
        keyboard={{ enabled: true }}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={true} 
        modules={[Mousewheel, Pagination, Keyboard, Navigation]}
        className="h-screen w-full"
        onSwiper={(swiper) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (window as any).mainSwiper = swiper;
        }}
      >
        <SwiperSlide><div className="slide-inner"><HeroSection /></div></SwiperSlide>
        <SwiperSlide><div className="slide-inner overflow-y-auto custom-scrollbar"><AboutSection /></div></SwiperSlide>
        <SwiperSlide><div className="slide-inner overflow-y-auto custom-scrollbar"><ExperienceContentSection /></div></SwiperSlide>
        <SwiperSlide><div className="slide-inner overflow-y-auto custom-scrollbar"><ExperienceSection /></div></SwiperSlide>
        <SwiperSlide><div className="slide-inner overflow-y-auto custom-scrollbar"><ProjectsSection /></div></SwiperSlide>
      </Swiper>

      <style jsx global>{`
        .swiper-slide {
          background: transparent !important;
          height: 100vh !important;
        }

        .slide-inner {
          height: 100vh;
          width: 100%;
          padding-top: 60px; /* Giảm bớt để header không đè */
          -webkit-overflow-scrolling: touch; 
        }

        /* Ẩn scrollbar nhưng vẫn cho phép cuộn */
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .custom-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .swiper-button-next, .swiper-button-prev {
          color: #22d3ee !important;
          opacity: 0.5;
          transition: opacity 0.3s;
        }
        .swiper-button-next:hover, .swiper-button-prev:hover {
          opacity: 1;
        }
        .swiper-pagination-bullet {
          background: #fff !important;
        }
        .swiper-pagination-bullet-active {
          background: #22d3ee !important;
        }
      `}</style>
    </main>
  );
}