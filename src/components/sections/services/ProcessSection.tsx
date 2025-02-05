// How we work section
// - Step-by-step process visualization
// - Timeline or workflow diagram
// - Light theme (like About section)
// Shows:
// - Initial Consultation
// - Strategy Development
// - Implementation
// - Monitoring & Adjustment 

"use client"

import { motion, useInView, useScroll, useSpring, useTransform } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { useRef } from 'react'

const processes = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We discuss your goals and challenges. I analyze your current position and outline improvements.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    )
  },
  {
    number: "02",
    title: "Creating Your Plan",
    description: "I develop a focused plan for your business. Direct solutions aligned with your needs and budget.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    )
  },
  {
    number: "03",
    title: "Taking Action",
    description: "I execute the plan with regular updates. You stay informed about progress and impact.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    )
  },
  {
    number: "04",
    title: "Getting Results",
    description: "We measure impact and adapt. Clear reporting shows how our work drives your business growth.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    )
  }
]

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
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const processVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1]
    }
  }
}

export function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-silver-100"
    >
      {/* Background with fade in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-shirt-texture opacity-5" />
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-black-900/10 to-transparent" />
        <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-black-900/10 to-transparent" />
      </motion.div>

      <Container className="relative">
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div 
            variants={fadeInUp}
            className="text-center space-y-4 max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-light tracking-wide text-black-900">
              My Process
            </h2>
            <p className="text-lg text-black-900/60 font-inter font-light">
              Direct steps to strengthen your business communication
            </p>
          </motion.div>

          {/* Process Steps */}
          <motion.div 
            variants={fadeInUp}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {processes.map((process, index) => (
              <motion.div 
                key={process.number}
                variants={processVariants}
                custom={index}
                className="group relative"
              >
                {/* Connector Line */}
                {index < processes.length - 1 && (
                  <motion.div 
                    className="hidden lg:block absolute top-8 left-[60%] right-0 h-px bg-gradient-to-r from-black-900/20 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  />
                )}
                
                {/* Process Card */}
                <div className="relative p-8 rounded-lg bg-white shadow-sm border border-black-900/5 hover:border-black-900/10 transition-all duration-300">
                  {/* Number */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="absolute -top-4 left-8 bg-black-900 text-silver-100 text-sm font-montserrat tracking-wider px-3 py-1 rounded"
                  >
                    {process.number}
                  </motion.div>
                  
                  {/* Icon */}
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="w-12 h-12 mb-6 rounded-full bg-gradient-to-br from-black-900/10 to-transparent flex items-center justify-center text-black-900/60"
                  >
                    {process.icon}
                  </motion.div>
                  
                  {/* Content */}
                  <motion.div
                    variants={fadeInUp}
                    custom={index}
                  >
                    <h3 className="text-xl font-montserrat text-black-900 mb-3">
                      {process.title}
                    </h3>
                    <p className="text-black-900/60 font-inter font-light leading-relaxed">
                      {process.description}
                    </p>
                  </motion.div>

                  {/* Bottom Accent */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black-900/10 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
} 