"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/ui/Container'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy-950/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <Container>
        <nav className="flex items-center justify-between h-20">
          {/* Updated Wordmark Logo */}
          <Link 
            href="/"
            className="group flex items-baseline space-x-2 text-silver-100 font-montserrat py-2"
          >
            <span className="text-lg tracking-[0.2em] font-light">
              MICHAEL YEMINI
            </span>
            <span className="text-base tracking-[0.15em] text-silver-400 group-hover:text-silver-200 transition-colors duration-300">
              <span className="font-medium">PR</span>
              <span className="mx-1 text-silver-300 font-light">&</span>
              <span className="font-light">DIGITAL</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="relative group"
              >
                <span className={`text-sm font-montserrat tracking-wide transition-colors ${
                  pathname === item.path ? 'text-silver-100' : 'text-silver-400 hover:text-silver-200'
                }`}>
                  {item.name}
                </span>
                {pathname === item.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-silver-400/30 to-transparent bottom-0"
                  />
                )}
                <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-silver-400/30 to-transparent bottom-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-silver-400 hover:text-silver-200 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>

          {/* Mobile Navigation Menu (can be expanded later) */}
          <AnimatePresence />
        </nav>
      </Container>

      {/* Bottom accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-silver-400/10 to-transparent" />
    </header>
  )
} 