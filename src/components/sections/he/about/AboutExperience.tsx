// Professional Experience Section
// - Dark theme
// - Key achievements
// - Areas of expertise
// - Industry experience
// - Notable projects/clients
// - Animated statistics
// - Testimonials/endorsements

"use client"

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { useRef } from 'react'

const achievements = [
  {
    title: "קמפיינים מובילים",
    description: "ניהול מהלכים אסטרטגיים עבור מותגים וארגונים מובילים",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "תקשורת פוליטית",
    description: "עבודה מול דמויות מפתח בפוליטיקה הישראלית בבניית מסרים אסטרטגיים",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    )
  },
  {
    title: "הובלה אסטרטגית",
    description: "ניהול מהלכים אסטרטגיים במשרדי יח״צ מובילים ותפקידי ניהול דיגיטל בכירים",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
]

export function AboutExperience() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section 
      ref={sectionRef} 
      className="relative py-32 bg-black-950"
      aria-labelledby="experience-heading"
      dir="rtl"
    >
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 id="experience-heading" className="text-4xl md:text-5xl font-montserrat font-light tracking-wide text-silver-100 mb-6">
              ניסיון
            </h2>
            <p className="text-xl text-silver-400 font-inter font-light max-w-3xl mx-auto">
              עבודה עם מובילי תעשייה בתחומי התקשורת והאסטרטגיה הדיגיטלית
            </p>
            <div className="mt-2 h-px w-24 mx-auto bg-gradient-to-l from-silver-400/40 to-transparent" aria-hidden="true" />
          </motion.div>

          {/* Achievements Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
            role="list"
            aria-label="הישגים מרכזיים"
          >
            {achievements.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-8 rounded-lg bg-black-900/50 border border-silver-400/10 hover:border-silver-400/20 transition-colors group"
                role="listitem"
              >
                <div className="mb-6 text-silver-400 group-hover:text-silver-300 transition-colors" aria-hidden="true">
                  {item.icon}
                </div>
                <h3 className="text-xl font-montserrat font-medium text-silver-100 mb-3">
                  {item.title}
                </h3>
                <p className="text-base text-silver-400 font-inter font-light leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 right-0 left-0" aria-hidden="true">
        <div className="h-px bg-gradient-to-l from-transparent via-silver-400/20 to-transparent" />
        <div className="h-px mt-2 bg-gradient-to-l from-transparent via-silver-400/10 to-transparent" />
      </div>
    </section>
  )
} 