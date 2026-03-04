'use client'

import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export default function Header() {
  const { language, switchLanguage } = useLanguage();
  const t = translations[language];

  const navLinks = [
    { label: t.navAbout, index: 1 },      // Slide About
    { label: t.navExperience, index: 2 }, // Slide Năng lực
    { label: t.navProcess, index: 3 },    // Slide Timeline
    { label: t.navProjects, index: 4 },   // Slide Dự án
  ]

  const handleSlideTo = (index: number) => {
    // Tìm thực thể Swiper đang chạy trên trang và nhảy đến slide index
    const swiperEl = document.querySelector('.swiper')?.shadowRoot ? 
                     (document.querySelector('.swiper') as any).swiper : 
                     (document.querySelector('.swiper') as any)?.swiper;
    
    if (swiperEl) {
      swiperEl.slideTo(index, 800); // Nhảy đến slide với tốc độ 800ms
    }
  }

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 
                 bg-zinc-900/80 backdrop-blur-md shadow-md"
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <button 
          onClick={() => handleSlideTo(0)} // Về slide đầu tiên (Hero)
          className="text-2xl font-bold tracking-wider text-white hover:text-cyan-400 transition-colors"
        >
          Tùng Lê Portfolio
        </button>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.index}
              onClick={() => handleSlideTo(link.index)}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              {link.label}
            </button>
          ))}

          {/* === NÚT CHUYỂN NGÔN NGỮ === */}
          <div className="flex items-center gap-2 ml-4 border-l border-zinc-700 pl-6">
            <button
              onClick={() => switchLanguage('vi')}
              className={`px-2 py-1 text-xs font-bold rounded transition-all duration-200 ${
                language === 'vi' 
                ? 'bg-cyan-500 text-white' 
                : 'text-gray-500 hover:text-white'
              }`}
            >
              VN
            </button>
            <button
              onClick={() => switchLanguage('en')}
              className={`px-2 py-1 text-xs font-bold rounded transition-all duration-200 ${
                language === 'en' 
                ? 'bg-cyan-500 text-white' 
                : 'text-gray-500 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}