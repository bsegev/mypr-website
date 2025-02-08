"use client"

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
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
      delayChildren: 0.6
    }
  }
}

export function ServicesHero() {
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
  const videoOpacity = useTransform(smoothProgress, [0, 1], [0.3, 0])

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-black-950"
    >
      {/* Background with fade in */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <motion.div style={{ y }} className="absolute inset-0">
          {/* Base video layer */}
          <motion.div 
            style={{ opacity: videoOpacity }}
            className="absolute inset-0"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            >
              <source src="/videos/service-hero-bg.mp4" type="video/mp4" />
            </video>
          </motion.div>

          {/* Dark overlay with animation */}
          <div className="absolute inset-0 bg-black-950/80 backdrop-blur-sm mix-blend-overlay" />
          
          {/* Bespoke pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full bg-diagonal-texture bg-[length:30px_30px]" />
          </div>
        </motion.div>
      </motion.div>

      {/* Silver accent lines */}
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-silver-400/10 to-transparent" />
      <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-silver-400/10 to-transparent" />

      {/* Main content with staggered animations */}
      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Service Categories */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 text-sm font-montserrat tracking-widest uppercase"
          >
            <span className="text-silver-400">Public Relations & Communications</span>
            <span className="text-silver-400/30">•</span>
            <span className="text-silver-400">Digital Strategy</span>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={fadeInUp} className="mt-12">
            <h1 className="font-montserrat tracking-tight text-silver-100">
              <div className="text-5xl md:text-6xl lg:text-7xl uppercase leading-[1.1] space-y-0">
                <div className="leading-[1.1]">Bespoke PR & Digital</div>
                <div className="font-light leading-[1.1]">
                  From <span className="font-semibold">Strategy</span> to Execution
                </div>
              </div>
            </h1>
            <motion.div 
              className="mt-8 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-silver-400/30 to-transparent"
              whileHover={{ width: '8rem', opacity: 0.8 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Subheading */}
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-silver-400 max-w-2xl mx-auto font-inter font-light leading-relaxed mt-8"
          >
            A full-spectrum approach to define, shape, and elevate your image through targeted communications and strategic digital presence.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8"
          >
            <Button 
              href="#services"
              className="min-w-[240px] bg-silver-100 hover:bg-silver-200 text-black-950 font-montserrat font-medium tracking-wide uppercase text-sm transition-all duration-300
                hover:shadow-lg hover:shadow-silver-500/10 hover:-translate-y-0.5"
            >
              Explore Services
              <span className="ml-2 text-lg group-hover:translate-x-1 transition-transform">↓</span>
            </Button>
            <Button 
              href="/contact"
              className="group text-silver-400 hover:text-silver-200 transition-colors duration-300 text-sm uppercase font-montserrat tracking-widest flex items-center gap-2"
            >
              Schedule a Consultation
              <motion.span 
                className="text-xl"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >→</motion.span>
            </Button>
          </motion.div>
        </motion.div>
      </Container>

      {/* Bottom accent */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 z-10"
      >
        <div className="h-px bg-gradient-to-r from-transparent via-silver-400/20 to-transparent" />
        <div className="h-px mt-2 bg-gradient-to-r from-transparent via-silver-400/10 to-transparent" />
      </motion.div>
    </section>
  )
} 