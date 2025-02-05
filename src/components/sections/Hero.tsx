"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { useRef } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const videoOpacity = useTransform(scrollY, 
    [0, 100, 300], // scroll values
    [0.3, 0.15, 0] // opacity values
  )
  
  return (
    <section ref={sectionRef} className="relative min-h-[90vh] flex items-center overflow-hidden bg-black-900 bg-pinstripe">
      {/* Video Background with suit texture overlay */}
      <div className="absolute inset-0 z-0">
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
      </div>

      {/* Silver accent lines with subtle hover effect */}
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-silver-400/10 to-transparent 
        before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:via-silver-200/20 before:to-transparent before:opacity-0 before:transition-opacity hover:before:opacity-100" />
      <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-silver-400/10 to-transparent 
        before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-transparent before:via-silver-200/20 before:to-transparent before:opacity-0 before:transition-opacity hover:before:opacity-100" />
      
      {/* Refined cufflink elements */}
      {['top-20 left-8', 'top-20 right-8', 'bottom-20 left-8', 'bottom-20 right-8'].map((position, index) => (
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

      {/* Main content */}
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="space-y-12"
            initial="initial"
            animate="animate"
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {/* Main Headline */}
            <motion.div 
              className="relative inline-block w-full max-w-5xl"
              variants={fadeInUp}
            >
              <h1 className="font-montserrat tracking-tight text-silver-100">
                <span className="text-2xl md:text-3xl tracking-[0.2em] font-light block mb-8">
                  MYPR
                </span>
                <div className="text-5xl md:text-6xl lg:text-7xl uppercase leading-tight">
                  <div className="mb-4">Strategic PR</div>
                  <div className="font-light">
                    <span className="font-semibold">&amp; Digital</span> Consulting
                    <motion.span 
                      className="text-silver-300 font-thin ml-1 inline-block"
                      animate={{ rotate: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >.</motion.span>
                  </div>
                </div>
              </h1>
              <motion.div 
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-silver-400/30 to-transparent"
                whileHover={{ width: '8rem', opacity: 0.8 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Subheading */}
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-silver-400 max-w-2xl mx-auto font-inter font-light leading-relaxed"
            >
              Full-service public relations, crisis management, and digital strategy for business owners, CEOs, and communications leaders.
            </motion.p>

            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8"
            >
              <Button 
                size="lg"
                href="/contact"
                className="min-w-[240px] bg-silver-100 hover:bg-silver-200 text-navy-950 font-montserrat font-medium tracking-wide uppercase text-sm transition-all duration-300
                  hover:shadow-lg hover:shadow-silver-500/10 hover:-translate-y-0.5"
              >
                Schedule a Consultation
                <span className="ml-2 text-lg group-hover:translate-x-1 transition-transform">→</span>
              </Button>
              <Link 
                href="/about"
                className="group text-silver-400 hover:text-silver-200 transition-colors duration-300 text-sm uppercase font-montserrat tracking-widest flex items-center gap-2"
              >
                Learn More About MYPR
                <motion.span 
                  className="text-xl"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >→</motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </Container>

      {/* Refined bottom hem accent */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
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
      </div>
    </section>
  )
} 