"use client"

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { LottieMenuButton } from './LottieMenuButton'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

const menuVariants = {
  closed: {
    x: "100%",
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    }
  },
  open: {
    x: "0%",
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    }
  }
}

const backdropVariants = {
  closed: {
    opacity: 0,
    transition: {
      duration: 0.2
    }
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.2
    }
  }
}

const navItemVariants = {
  closed: {
    x: 50,
    opacity: 0
  },
  open: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1],
    }
  })
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const lottieRef = useRef<any>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      lottieRef.current?.playSegments([0, 54], true)
    } else {
      document.body.style.overflow = 'unset'
      lottieRef.current?.playSegments([54, 0], true)
    }
    return () => {
      if (typeof window !== 'undefined') {
        document.body.style.overflow = 'unset'
      }
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
          isScrolled || isMobileMenuOpen ? 'bg-black-950/95 backdrop-blur-md shadow-lg shadow-black-950/5' : 'bg-transparent'
        }`}
      >
        <Container>
          <nav className="relative flex items-center justify-between h-20">
            {/* Wordmark Logo */}
            <Link 
              href="/"
              className="group flex items-baseline space-x-2 text-silver-100 font-montserrat py-2 relative z-[60]"
            >
              <span className="text-body-lg tracking-[0.2em] font-light">
                MICHAEL YEMINI
              </span>
              <span className="hidden sm:inline text-body tracking-[0.15em] text-silver-400 group-hover:text-silver-200 transition-colors duration-300">
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
                  <span className={`text-body-sm font-montserrat tracking-wide transition-colors ${
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
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center text-silver-100 hover:text-silver-200 transition-colors z-[60]"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
            >
              <LottieMenuButton isOpen={isMobileMenuOpen} />
            </button>
          </nav>
        </Container>

        {/* Bottom accent line */}
        <div className="h-px bg-gradient-to-r from-transparent via-silver-400/10 to-transparent" />
      </header>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="md:hidden">
            {/* Backdrop */}
            <motion.div
              variants={backdropVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-0 bg-black-950/80 backdrop-blur-sm z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Side Drawer */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 w-[min(100vw,400px)] bg-black-950/95 backdrop-blur-md pt-24 px-8 z-50 overflow-y-auto shadow-xl"
            >
              {/* Menu Title */}
              <div className="mb-8 pb-8 border-b border-silver-400/10">
                <h2 className="text-silver-100 font-montserrat text-sm tracking-[0.2em] uppercase">
                  Menu
                </h2>
              </div>

              <div className="flex flex-col items-start gap-8">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.path}
                    custom={i}
                    variants={navItemVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="w-full"
                  >
                    <Link
                      href={item.path}
                      className="relative group py-2 block w-full"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className={`text-h3 font-montserrat tracking-wide transition-colors ${
                        pathname === item.path ? 'text-silver-100' : 'text-silver-400'
                      }`}>
                        {item.name}
                      </span>
                      {pathname === item.path && (
                        <motion.div
                          layoutId="mobile-underline"
                          className="absolute left-0 right-0 h-px bg-gradient-to-r from-silver-400/30 via-silver-400/30 to-transparent bottom-0"
                        />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Contact Info */}
              <motion.div
                variants={navItemVariants}
                custom={navItems.length}
                className="mt-12 pt-12 border-t border-silver-400/10"
              >
                <p className="text-silver-400 font-inter text-sm">
                  Based in Tel Aviv, Israel
                </p>
                <p className="text-silver-400 font-inter text-sm mt-1">
                  Operating Internationally
                </p>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
} 