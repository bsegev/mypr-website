// About Hero Section
// - Light theme (silver background)
// - Personal brand statement
// - Professional headline
// - Scroll-triggered animations
// - Background texture
// - Navigation to story section

"use client"

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { useRef } from 'react'
import { FloatingIcons } from './FloatingIcons'
import { scrollToSection } from '@/lib/utils'

export function AboutHero() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const y = useTransform(smoothProgress, [0, 1], [0, 150])

  const scrollToStory = () => {
    if (typeof window === 'undefined') return;
    const storySection = document.getElementById('story')
    const offset = storySection?.offsetTop || 0
    const headerOffset = 80
    window.scrollTo({
      top: offset - headerOffset,
      behavior: 'smooth'
    })
  }

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-black-950"
      aria-labelledby="about-hero-heading"
    >
      {/* Background Elements - pointer-events-none */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div style={{ y }} className="absolute inset-0">
          <div className="absolute inset-0 bg-black-950/95 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-diagonal-texture opacity-5" />
        </motion.div>
      </div>

      {/* Silver accent lines - pointer-events-none */}
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-silver-400/10 to-transparent pointer-events-none" aria-hidden="true" />
      <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-silver-400/10 to-transparent pointer-events-none" aria-hidden="true" />

      {/* Floating Icons Layer */}
      <div 
        className="absolute inset-0 z-40 pointer-events-none" 
        aria-hidden="true"
      >
        <FloatingIcons />
      </div>

      {/* Main Content */}
      <Container 
        className="relative z-30"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* Intro Text */}
            <div className="text-center space-y-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-sm uppercase tracking-widest text-silver-400 font-montserrat"
                role="doc-subtitle"
              >
                Crafting Distinctive Public Images
              </motion.div>
              <h1 id="about-hero-heading" className="font-montserrat tracking-tight text-silver-100">
                <span className="text-display-sm md:text-display-md lg:text-display-lg uppercase leading-[1.1] block">
                  Michael
                </span>
              </h1>
            </div>

            {/* Main Description */}
            <motion.p 
              className="text-xl md:text-2xl text-silver-400 font-inter font-light max-w-3xl mx-auto text-center leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              A communications consultant with proven expertise in public relations, 
              crisis management, and digital strategy. Working with senior figures 
              in Israeli politics, leading brands, and large organizations.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              role="navigation"
              aria-label="About page navigation"
            >
              <Button 
                onClick={scrollToStory}
                className="group min-w-[200px] text-silver-400 hover:text-silver-200 transition-colors duration-300 text-sm uppercase font-montserrat tracking-widest flex items-center justify-center gap-2"
                aria-label="Read my professional story"
              >
                My Story
                <span className="ml-2 text-lg group-hover:translate-x-1 transition-transform" aria-hidden="true">↓</span>
              </Button>
              <Button 
                href="/contact"
                className="min-w-[200px] bg-silver-100 hover:bg-silver-200 text-navy-950 font-montserrat font-medium tracking-wide uppercase text-sm transition-all duration-300
                  hover:shadow-lg hover:shadow-silver-500/10 hover:-translate-y-0.5"
                aria-label="Contact Michael Yemini"
              >
                Get in Touch
                <span className="ml-2 text-lg group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Bottom Accent - pointer-events-none */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pointer-events-none" aria-hidden="true">
        <div className="h-px bg-gradient-to-r from-transparent via-silver-400/20 to-transparent" />
        <div className="h-px mt-2 bg-gradient-to-r from-transparent via-silver-400/10 to-transparent" />
      </div>
    </section>
  )
} 