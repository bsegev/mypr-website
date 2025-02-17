"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
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
      delayChildren: 0.5
    }
  }
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const videoOpacity = useTransform(scrollY, 
    [0, 100, 300],
    [0.3, 0.15, 0]
  )
  
  const { openScheduler } = useCalendar();
  
  return (
    <section ref={sectionRef} className="relative min-h-[90vh] flex items-center overflow-hidden bg-black-900 bg-pinstripe" dir="rtl">
      {/* Background with fade in */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
      >
        <motion.div style={{ y }} className="absolute inset-0">
          <div className="absolute inset-0 bg-black-950/90 backdrop-blur-sm mix-blend-overlay" />
          {/* Bespoke pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full bg-diagonal-texture bg-[length:30px_30px]" />
          </div>
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
              <source src="/videos/hero-bg.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Silver accent lines with subtle hover effect */}
      <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-silver-400/10 to-transparent 
        before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:via-silver-200/20 before:to-transparent before:opacity-0 before:transition-opacity hover:before:opacity-100" />
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-silver-400/10 to-transparent 
        before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:via-silver-200/20 before:to-transparent before:opacity-0 before:transition-opacity hover:before:opacity-100" />
      
      {/* Refined cufflink elements */}
      {['top-20 right-8', 'top-20 left-8', 'bottom-20 right-8', 'bottom-20 left-8'].map((position, index) => (
        <motion.div
          key={position}
          className={`absolute ${position} group cursor-pointer`}
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.2 }}
        >
          <div className="w-3 h-3 rounded-full bg-silver-400/10 group-hover:bg-silver-300/20 transition-colors duration-300" />
          <div className="absolute inset-0 rounded-full border border-silver-400/20 group-hover:border-silver-300/30 transition-colors duration-300" />
        </motion.div>
      ))}

      {/* Main content with staggered children */}
      <Container className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Logo fade in first */}
          <motion.span 
            variants={fadeInUp}
            className="text-3xl md:text-4xl lg:text-5xl tracking-[0.2em] font-extralight block mb-12 md:mb-16 text-silver-100"
          >
            MICHAEL YEMINI
          </motion.span>

          {/* Main headline rises up */}
          <motion.div variants={fadeInUp}>
            <h1 className="font-montserrat tracking-tight text-silver-100">
              <div className="leading-[1.1] space-y-2">
                <div className="text-[1.25rem] md:text-[1.5rem] lg:text-[1.75rem] leading-[1.1] text-silver-400">PR & DIGITAL</div>
                <div className="text-display-sm md:text-display-md lg:text-display-lg font-medium leading-[1.1]">
                  Your Brand, Our Strategy
                </div>
              </div>
            </h1>
          </motion.div>

          {/* Subheading fades in */}
          <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-silver-400 max-w-2xl mx-auto font-inter font-light leading-relaxed mt-8"
          >
            יחסי ציבור מקיפים, ניהול משברים ואסטרטגיה דיגיטלית לבעלי עסקים, מנכ״לים ומנהלי תקשורת.
          </motion.p>

          {/* Buttons fade in last */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8"
          >
            <Button 
              size="lg"
              onClick={openScheduler}
              className="min-w-[240px] bg-white hover:bg-silver-50 [color:black] hover:[color:black] font-montserrat font-medium tracking-wide text-sm transition-all duration-300 rounded-full
                hover:shadow-lg hover:shadow-silver-500/10 hover:-translate-y-0.5 border border-transparent hover:border-silver-200/20"
            >
              קביעת פגישת ייעוץ
              <span className="mr-2 text-lg group-hover:translate-x-1 transition-transform [color:black]">←</span>
            </Button>
            <Link 
              href="/he/about"
              className="group text-silver-400 hover:text-silver-200 !important transition-colors duration-300 text-sm font-montserrat tracking-widest flex items-center gap-2"
            >
              למידע נוסף על MYPR
              <motion.span 
                className="text-xl text-silver-400 group-hover:text-silver-200"
                animate={{ x: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >←</motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </Container>

      {/* Bottom accent slides in */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-0 left-0 right-0 z-10"
      >
        <motion.div 
          className="h-px bg-gradient-to-r from-transparent via-silver-400/20 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.div 
          className="h-px mt-2 bg-gradient-to-r from-transparent via-silver-400/10 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        />
      </motion.div>
    </section>
  )
} 