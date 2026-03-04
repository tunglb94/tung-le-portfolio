'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, Keyboard, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion'; 

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
    <main className="relative h-screen w-full overflow-hidden text-white">
      <TechBackground />
      <Header />

      {/* === THANH HƯỚNG DẪN NỔI (USER GUIDE) === */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }} 
        className="fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-[100] pointer-events-none"
      >
        <div className="bg-zinc-900/60 backdrop-blur-md border border-cyan-500/30 rounded-full px-4 py-2 md:px-6 md:py-3 flex flex-col md:flex-row items-center gap-2 md:gap-6 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
          
          {/* Hướng dẫn cuộn dọc */}
          <div className="flex items-center gap-2 text-gray-300 text-xs md:text-sm font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 animate-bounce">
              <rect width="14" height="20" x="5" y="2" rx="7"/>
              <path d="M12 6v4"/>
            </svg>
            <span>Cuộn dọc để xem chi tiết</span>
          </div>
          
          {/* Vạch chia (Chỉ hiện trên máy tính) */}
          <div className="hidden md:block w-[1px] h-4 bg-gray-600"></div>

          {/* Hướng dẫn lướt ngang */}
          <div className="flex items-center gap-2 text-gray-300 text-xs md:text-sm font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-400 animate-pulse">
              <path d="m15 18 6-6-6-6"/>
              <path d="M3 12h18"/>
              <path d="m9 6-6 6 6 6"/>
            </svg>
            <span>Lướt ngang / Click mũi tên để qua trang</span>
          </div>

        </div>
      </motion.div>
      {/* ======================================= */}
      
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
        <SwiperSlide><div className="slide-inner overflow-y-auto"><AboutSection /></div></SwiperSlide>
        <SwiperSlide><div className="slide-inner overflow-y-auto"><ExperienceContentSection /></div></SwiperSlide>
        <SwiperSlide><div className="slide-inner overflow-y-auto"><ExperienceSection /></div></SwiperSlide>
        <SwiperSlide><div className="slide-inner overflow-y-auto"><ProjectsSection /></div></SwiperSlide>
      </Swiper>

      <style jsx global>{`
        .swiper-slide, .swiper-wrapper, .swiper {
          background: transparent !important;
        }

        .slide-inner {
          height: 100vh;
          width: 100%;
          padding-top: 80px; 
          -webkit-overflow-scrolling: touch; 
          touch-action: pan-y; 
        }

        section {
          min-height: auto !important;
          padding-bottom: 120px !important; 
          background: radial-gradient(circle at center, rgba(0,0,0,0.4) 0%, transparent 100%);
        }

        .overflow-y-auto::-webkit-scrollbar {
          display: none;
        }
        .overflow-y-auto {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .swiper-button-next, .swiper-button-prev {
          color: #22d3ee !important;
          transform: scale(0.5);
        }
      `}</style>
    </main>
  );
}