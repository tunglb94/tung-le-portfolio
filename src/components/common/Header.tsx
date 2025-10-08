// src/components/common/Header.tsx
'use client';

import { useLenis } from '@/lib/lenis';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Định nghĩa kiểu cho các bản dịch
interface Translations {
  nav_about: string;
  nav_experience_content: string;
  nav_experience_process: string;
  nav_projects: string;
}

// Props cho component Header
interface HeaderProps {
  lang: 'en' | 'vi';
  translations: Translations;
}

export default function Header({ lang, translations }: HeaderProps) {
  const lenis = useLenis();
  const pathname = usePathname();

  const redirectedPathname = (locale: 'en' | 'vi') => {
    if (!pathname) return '/';
    const segments = pathname.split('/');
    segments[1] = locale;
    return segments.join('/');
  };

  const navLinks = [
    { href: '#about', label: translations.nav_about },
    { href: '#experience', label: translations.nav_experience_content },
    { href: '#process', label: translations.nav_experience_process },
    { href: '#projects', label: translations.nav_projects },
  ];

  const handleScrollTo = (target: string) => {
    if (lenis) {
      lenis.scrollTo(target, {
        offset: -80,
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-zinc-900/80 backdrop-blur-sm shadow-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleScrollTo('#hero');
          }}
          className="text-2xl font-bold tracking-wider text-white"
        >
          Tùng Lê Portfolio
        </a>

        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo(link.href);
              }}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          
          {/* === NÚT CHUYỂN NGÔN NGỮ === */}
          <div className="flex items-center space-x-2 border-l border-gray-600 pl-6">
            <Link href={redirectedPathname('vi')} className={`font-semibold ${lang === 'vi' ? 'text-cyan-400' : 'text-gray-400 hover:text-white'}`}>
              VI
            </Link>
            <span className="text-gray-600">/</span>
            <Link href={redirectedPathname('en')} className={`font-semibold ${lang === 'en' ? 'text-cyan-400' : 'text-gray-400 hover:text-white'}`}>
              EN
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}