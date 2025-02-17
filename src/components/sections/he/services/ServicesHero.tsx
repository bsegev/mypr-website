"use client"

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { useRef } from 'react'
import { useCalendar } from '@/lib/providers/CalendarProvider'

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
  const { openScheduler } = useCalendar();

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

  const scrollToFeaturedService = () => {
    if (typeof window === 'undefined') return;
    const element = document.getElementById('featured-service');
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-black-950 pt-20"
      aria-labelledby="services-hero-heading"
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
          {/* Base video layer */}
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
              <source src="/videos/service-hero-bg.mp4" type="video/mp4" />
            </video>
          </motion.div>

          {/* Dark overlay with animation */}
          <div className="absolute inset-0 bg-black-950/80 backdrop-blur-sm mix-blend-overlay" aria-hidden="true" />
          
          {/* Bespoke pattern overlay */}
          <div className="absolute inset-0 opacity-5" aria-hidden="true">
            <div className="w-full h-full bg-diagonal-texture bg-[length:30px_30px]" />
          </div>
        </motion.div>
      </motion.div>

      {/* Silver accent lines */}
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-silver-400/10 to-transparent" aria-hidden="true" />
      <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-silver-400/10 to-transparent" aria-hidden="true" />

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
            className="flex flex-wrap justify-center gap-4 text-overline font-montserrat tracking-widest uppercase"
            role="doc-subtitle"
          >
            <span className="text-silver-400">יחסי ציבור ותקשורת</span>
            <span className="text-silver-400/30" aria-hidden="true">•</span>
            <span className="text-silver-400">אסטרטגיה דיגיטלית</span>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={fadeInUp} className="mt-8 md:mt-12">
            <h1 id="services-hero-heading" className="font-montserrat tracking-tight text-silver-100">
              <span className="text-display-sm md:text-display-md lg:text-display-lg uppercase leading-[1.1] block">
                יחסי ציבור
              </span>
              <span className="text-display-sm md:text-display-md lg:text-display-lg uppercase leading-[1.1] font-light block mt-2 md:mt-4">
                ודיגיטל
              </span>
            </h1>
            <motion.div 
              className="mt-6 md:mt-8 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-silver-400/30 to-transparent"
              whileHover={{ width: '8rem', opacity: 0.8 }}
              transition={{ duration: 0.3 }}
              aria-hidden="true"
            />
          </motion.div>

          {/* Subheading */}
          <motion.p 
            variants={fadeInUp}
            className="text-body md:text-body-lg text-silver-400 max-w-2xl mx-auto font-inter font-light leading-relaxed mt-6 md:mt-8 px-4 md:px-0"
          >
            מתכנון אסטרטגי ועד ביצוע מושלם, אנחנו מגדירים ומעצימים את התדמית שלך באמצעות תקשורת ממוקדת ונוכחות דיגיטלית חדשנית.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-8 md:pt-12 px-4 sm:px-0"
            role="navigation"
            aria-label="ניווט שירותים"
          >
            <Button 
              onClick={scrollToFeaturedService}
              className="w-full sm:w-auto group text-silver-400 hover:text-silver-200 !important transition-colors duration-300 text-body-sm uppercase font-montserrat tracking-widest flex items-center justify-center gap-2"
              aria-label="צפה בשירותים שלנו"
            >
              גלה את השירותים
              <span className="mr-2 text-lg group-hover:translate-x-1 transition-transform text-silver-400 hover:text-silver-200" aria-hidden="true">↓</span>
            </Button>
            <Button 
              onClick={openScheduler}
              className="w-full sm:w-auto min-w-[240px] bg-white hover:bg-silver-50 [color:black] hover:[color:black] font-montserrat font-medium tracking-wide text-sm transition-all duration-300 rounded-full
                hover:shadow-lg hover:shadow-silver-500/10 hover:-translate-y-0.5 border border-transparent hover:border-silver-200/20"
              aria-label="קביעת פגישת ייעוץ"
            >
              לקביעת פגישת ייעוץ
              <motion.span 
                className="mr-2 text-lg [color:black]"
                animate={{ x: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                aria-hidden="true"
              >←</motion.span>
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
        aria-hidden="true"
      >
        <div className="h-px bg-gradient-to-r from-transparent via-silver-400/20 to-transparent" />
        <div className="h-px mt-2 bg-gradient-to-r from-transparent via-silver-400/10 to-transparent" />
      </motion.div>
    </section>
  )
} 