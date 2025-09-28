// src/components/common/Header.tsx
'use client'

import { useLenis } from '@/lib/lenis'

const navLinks = [
  { href: '#about', label: 'Tùng Lê là ai?' },
  { href: '#experience', label: 'Kinh nghiệm làm việc' },
  { href: '#process', label: 'Quá trình làm việc' },
  { href: '#projects', label: 'Dự án đã làm' },
]

export default function Header() {
  const lenis = useLenis()

  const handleScrollTo = (target: string) => {
    if (lenis) {
      lenis.scrollTo(target, {
        offset: -80,
        duration: 1.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      })
    }
  }

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 
                 bg-zinc-900/80 backdrop-blur-sm shadow-md"
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <a 
          href="#" 
          onClick={() => handleScrollTo('#hero')}
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
        </nav>
      </div>
    </header>
  )
}