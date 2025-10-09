// src/components/common/Header.tsx
'use client'

import { useLenis } from '@/lib/lenis'
import { useLanguage } from '@/contexts/LanguageContext'; // Import hook ngôn ngữ
import { translations } from '@/lib/translations'; // Import nội dung dịch

export default function Header() {
  const lenis = useLenis()
  const { language, switchLanguage } = useLanguage(); // Lấy state ngôn ngữ
  const t = translations[language]; // Lấy đúng bộ text theo ngôn ngữ

  // Dữ liệu navLinks giờ sẽ lấy từ file dịch
  const navLinks = [
    { href: '#about', label: t.navAbout },
    { href: '#experience', label: t.navExperience },
    { href: '#process', label: t.navProcess },
    { href: '#projects', label: t.navProjects },
  ]

  const handleScrollTo = (target: string) => {
    // Luôn kiểm tra instance trước khi cuộn
    if (lenis) { 
      // Sử dụng target là selector CSS (ví dụ: '#about')
      lenis.scrollTo(target, {
        offset: -80, 
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      })
    } else {
        // Nếu Lenis chưa sẵn sàng, dùng cuộn mặc định của trình duyệt 
        window.location.hash = target;
    }
  }

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 
                 bg-zinc-900/80 backdrop-blur-sm shadow-md"
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <a 
          href="#hero" // Đảm bảo trỏ về ID #hero
          onClick={(e) => {
             e.preventDefault();
             handleScrollTo('#hero'); // Cuộn về HeroSection
          }}
          className="text-2xl font-bold tracking-wider text-white"
        >
          Tùng Lê Portfolio
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault()
                handleScrollTo(link.href) 
              }}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}

          {/* === NÚT CHUYỂN NGÔN NGỮ === */}
          <div className="flex items-center gap-2 ml-4">
            <button
              onClick={() => switchLanguage('vi')}
              className={`px-2 py-1 text-sm font-semibold rounded-md transition-all duration-200 ${
                language === 'vi' 
                ? 'bg-cyan-500 text-white ring-2 ring-cyan-300' 
                : 'text-gray-400 hover:bg-zinc-700 hover:text-white'
              }`}
            >
              VN
            </button>
            <span className="text-gray-600">/</span>
            <button
              onClick={() => switchLanguage('en')}
              className={`px-2 py-1 text-sm font-semibold rounded-md transition-all duration-200 ${
                language === 'en' 
                ? 'bg-cyan-500 text-white ring-2 ring-cyan-300' 
                : 'text-gray-400 hover:bg-zinc-700 hover:text-white'
              }`}
            >
              EN
            </button>
          </div>
          {/* ============================= */}
        </nav>
      </div>
    </header>
  )
}