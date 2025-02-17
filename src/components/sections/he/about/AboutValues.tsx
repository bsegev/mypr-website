// Core Values Section
// - Light theme (silver background)
// - Grid of values with icons
// - Value propositions
// - How these benefit clients
// - Interactive hover states
// - Staggered animations

"use client"

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { useRef } from 'react'

const values = [
  {
    title: "תקשורת ברורה",
    description: "דיאלוג ישיר ושקוף שבונה אמון ומוביל לתוצאות.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  {
    title: "חשיבה אסטרטגית",
    description: "הפיכת אתגרים להזדמנויות באמצעות ניתוח ותכנון קפדני.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    title: "גישה אישית",
    description: "פתרונות מותאמים אישית שמתמודדים עם האתגרים הייחודיים שלך.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "מומחיות במשברים",
    description: "יכולת מוכחת בניווט ופתרון מצבי משבר תקשורתיים.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    )
  },
  {
    title: "מוכוונות תוצאות",
    description: "התמקדות בהשגת השפעה מדידה ויתרון אסטרטגי.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: "שותף אמין",
    description: "בניית קשרים ארוכי טווח באמצעות אמינות ומצוינות.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
]

export function AboutValues() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section 
      ref={sectionRef} 
      className="relative py-32 bg-silver-100"
      aria-labelledby="values-heading"
      dir="rtl"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-diagonal-texture opacity-5" aria-hidden="true" />
      
      {/* Accent Lines */}
      <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-black-900/10 to-transparent" aria-hidden="true" />
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-black-900/10 to-transparent" aria-hidden="true" />

      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 id="values-heading" className="text-3xl md:text-4xl font-montserrat font-light tracking-wide text-black-900">
              הערכים שלנו
            </h2>
            <p className="text-lg md:text-xl font-inter font-light text-black-900/60 max-w-2xl mx-auto">
              העקרונות המנחים את הגישה שלנו להשגת תוצאות יוצאות דופן
            </p>
            <div className="mt-2 h-px w-24 mx-auto bg-gradient-to-l from-black-900/40 to-transparent" aria-hidden="true" />
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            role="list"
            aria-label="ערכי הליבה"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 rounded-lg bg-white border border-black-900/5 hover:border-black-900/10 transition-colors"
                role="listitem"
              >
                <div className="mb-6 text-black-900/40 group-hover:text-black-900/60 transition-colors" aria-hidden="true">
                  {value.icon}
                </div>
                <h3 className="text-lg md:text-xl font-montserrat font-medium text-black-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-body md:text-body-lg text-black-900/60 font-inter font-light leading-relaxed">
                  {value.description}
                </p>
                <div className="absolute bottom-0 right-0 left-0 h-px bg-gradient-to-l from-transparent via-black-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 right-0 left-0" aria-hidden="true">
        <div className="h-px bg-gradient-to-l from-transparent via-black-900/10 to-transparent" />
        <div className="h-px mt-2 bg-gradient-to-l from-transparent via-black-900/5 to-transparent" />
      </div>
    </section>
  )
} 