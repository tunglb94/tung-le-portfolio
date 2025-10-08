// src/lib/lenis.tsx
'use client' 

import { createContext, useContext, useEffect, useRef } from 'react'
import Lenis from 'lenis' // <-- Dòng này đã được sửa

const LenisContext = createContext<Lenis | null>(null)

export const LenisProvider = ({ children }: { children: React.ReactNode }) => {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis()
    lenisRef.current = lenis

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  return (
    <LenisContext.Provider value={lenisRef.current}>
      {children}
    </LenisContext.Provider>
  )
}

export const useLenis = () => {
  return useContext(LenisContext)
}