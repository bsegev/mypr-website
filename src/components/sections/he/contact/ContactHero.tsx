"use client"

import React from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { useRef } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
}

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5
    }
  }
}

export function ContactHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const videoOpacity = useTransform(scrollY, 
    [0, 100, 300],
    [0.3, 0.15, 0]
  )
  
  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-black-950"
      aria-labelledby="contact-hero-heading"
      dir="rtl"
    >
      {/* Background with fade in */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
        aria-hidden="true"
      >
        <motion.div style={{ y }} className="absolute inset-0">
          <div className="absolute inset-0 bg-black-950/80 backdrop-blur-sm mix-blend-overlay" aria-hidden="true" />
          {/* Bespoke pattern overlay */}
          <div className="absolute inset-0 opacity-5" aria-hidden="true">
            <div className="w-full h-full bg-diagonal-texture bg-[length:30px_30px]" />
          </div>
          <motion.div 
            style={{ opacity: videoOpacity }}
            className="absolute inset-0"
            aria-hidden="true"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
              aria-hidden="true"
            >
              <source src="/videos/contact_hero.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Silver accent lines */}
      <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-silver-400/10 to-transparent" aria-hidden="true" />
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-silver-400/10 to-transparent" aria-hidden="true" />

      {/* Main content with staggered animations */}
      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto text-center -mt-16"
        >
          {/* Main headline rises up */}
          <motion.div variants={fadeInUp}>
            <h1 id="contact-hero-heading" className="font-montserrat tracking-tight text-silver-100">
              <span className="text-[4rem] md:text-[5rem] lg:text-[6rem] uppercase leading-[1.1] block mb-8">
                צור קשר
              </span>
              <span className="text-2xl md:text-3xl lg:text-4xl font-light block text-silver-400">
                יחד נעשה דברים גדולים
              </span>
            </h1>
          </motion.div>
        </motion.div>
      </Container>

      {/* Bottom accent */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-0 right-0 left-0 z-10"
        aria-hidden="true"
      >
        <div className="h-px bg-gradient-to-l from-transparent via-silver-400/20 to-transparent" />
        <div className="h-px mt-2 bg-gradient-to-l from-transparent via-silver-400/10 to-transparent" />
      </motion.div>
    </section>
  )
} 