"use client"

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import Image from 'next/image'

const features = [
  {
    title: "ניתוח מגמות",
    description: "זיהוי וניתוח מגמות בזמן אמת לקבלת החלטות מושכלות",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    )
  },
  {
    title: "אינטגרציית AI",
    description: "שימוש בבינה מלאכותית לייעול וטיוב תהליכים תקשורתיים",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "תובנות מבוססות דאטה",
    description: "הפקת תובנות עמוקות מניתוח נתונים לשיפור אפקטיביות",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
]

export function AboutTechnology() {
  return (
    <section className="relative py-24 bg-black-950" dir="rtl">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-diagonal-texture opacity-5" />
        <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-silver-400/10 to-transparent" />
        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-silver-400/10 to-transparent" />
      </div>

      <Container>
        <div className="relative max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-[1fr,1.5fr] gap-16 items-center"
          >
            {/* Image Side */}
            <div className="relative group/image max-w-2xl mx-auto md:mx-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative aspect-[4/5] rounded-lg overflow-hidden"
              >
                <div className="relative w-full h-full transform-gpu transition-transform duration-1000 ease-out will-change-transform
                  group-hover/image:translate-y-[-8px]">
                  <Image
                    src="/images/tech-data.jpg"
                    alt="טכנולוגיה ונתונים בשירות התקשורת"
                    fill
                    className="object-cover transition-all duration-1000 ease-out"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black-950/90 via-black-950/20 to-transparent 
                    opacity-100 transition-all duration-1000 ease-out group-hover/image:opacity-80" />
                </div>

                {/* Subtle Border */}
                <div className="absolute inset-0 rounded-lg transition-all duration-1000 ease-out
                  bg-gradient-to-tr from-silver-400/0 via-silver-400/10 to-silver-400/0 opacity-0 group-hover/image:opacity-100" />
                
                {/* Ambient Light */}
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-black-950/0 via-silver-400/5 to-black-950/0 
                  opacity-0 group-hover/image:opacity-100 blur-xl transition-all duration-1000 ease-out -z-10" />
              </motion.div>
            </div>

            {/* Content Side */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl md:text-3xl font-montserrat font-light text-silver-100">
                    טכנולוגיה בשירות התקשורת
                  </h2>
                  <div className="mt-2 h-px w-16 bg-gradient-to-l from-silver-400/40 to-transparent" />
                </div>

                <div className="space-y-4 text-silver-400 font-inter font-light leading-relaxed">
                  <p>
                    שימוש בבינה מלאכותית (AI), ניתוח מגמות בזמן אמת ויצירת תובנות מדויקות שמאפשרות לקבל החלטות מבוססות נתונים. כלים דיגיטליים מתקדמים מאפשרים לנו להוביל מהלכים תקשורתיים חכמים וממוקדים.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid gap-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative bg-silver-400/5 hover:bg-silver-400/10 rounded-lg p-4 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-silver-400/10 flex items-center justify-center text-silver-300 group-hover:bg-silver-400/20 group-hover:text-silver-200 transition-all duration-300">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="text-silver-200 text-lg font-medium mb-1 group-hover:text-silver-100 transition-colors">
                            {feature.title}
                          </h3>
                          <p className="text-silver-400 text-sm leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                      {/* Hover accent */}
                      <div className="absolute bottom-0 right-0 left-0 h-px bg-gradient-to-l from-transparent via-silver-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
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