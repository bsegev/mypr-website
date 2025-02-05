"use client"

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { useRef } from 'react'

const features = [
  {
    title: "Public Relations & Communications",
    description: "Crafting compelling narratives and managing your public image through targeted media channels.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Digital & Social Strategy",
    description: "Managing your online presence through content creation, social media, and influencer collaborations.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Crisis Management",
    description: "Transforming challenges into opportunities by protecting and enhancing your reputation.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
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

const featureVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section 
      ref={sectionRef} 
      className="relative py-32 overflow-hidden bg-black-950 will-change-transform"
    >
      {/* Background fades in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-radial from-black-900/50 to-transparent opacity-50" />
        <div className="absolute inset-0 bg-diagonal-texture bg-[length:30px_30px] opacity-5" />
      </motion.div>

      <Container className="relative">
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div 
            variants={fadeInUp}
            className="text-center space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-light tracking-wide text-silver-100">
              Expertise
            </h2>
            <p className="text-silver-400 max-w-2xl mx-auto font-inter">
              End-to-end solutions to elevate your communications strategy
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={featureVariants}
                className="relative group"
                custom={index}
              >
                <div className="relative p-8 rounded-lg border border-silver-400/10 hover:border-silver-400/20 transition-all duration-300">
                  <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="w-12 h-12 mb-6 rounded-full bg-gradient-to-br from-silver-400/20 to-transparent flex items-center justify-center text-silver-300"
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-montserrat font-medium text-silver-100 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-silver-400 font-inter font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
} 