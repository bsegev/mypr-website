"use client"

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import Image from 'next/image'

export function AboutIntro() {
  return (
    <section className="relative py-24 bg-black-900/30 backdrop-blur-sm" dir="rtl">
      <Container>
        {/* Accent Lines */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-silver-400/10 to-transparent" />
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-silver-400/10 to-transparent" />
        </div>

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
                {/* Main Image */}
                <div className="relative w-full h-full transform-gpu transition-transform duration-1000 ease-out will-change-transform
                  group-hover/image:translate-y-[-8px]">
                  <Image
                    src="/images/my_image.jpg"
                    alt="מיכאל ימיני - יועץ אסטרטגי ותקשורת דיגיטלית"
                    fill
                    className="object-cover object-top transition-all duration-1000 ease-out"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    priority
                  />
                  {/* Gradient Overlay */}
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

            {/* Text Side */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl md:text-3xl font-montserrat font-light text-silver-100">
                    מה אנחנו עושים
                  </h2>
                  <div className="mt-2 h-px w-16 bg-gradient-to-l from-silver-400/40 to-transparent" />
                </div>

                <div className="space-y-4 text-silver-400 font-inter font-light leading-relaxed">
                  <p>
                    אנחנו משלבים בין יחסי ציבור קלאסיים לכלים חדשניים, בינה מלאכותית AI וניתוח מגמות מבוסס נתונים. כל מהלך תקשורתי שאנחנו מובילים מבוסס על אסטרטגיה חכמה, יצירתיות חסרת פשרות והיכרות עמוקה עם המערכת – כדי לוודא שהמסר שלכם יגיע למקום הנכון, בזמן הנכון, וישיג תוצאה אמיתית.
                  </p>
                  <p>
                    הלקוחות שלנו מגיעים ממגוון תחומים – מנהיגים, עסקים, חברות, ארגונים ותנועות ציבוריות – כולם מחפשים דבר אחד: שליטה בנרטיב שלהם והשפעה אמיתית.
                  </p>
                  <p>
                    תקשורת חכמה היא לא רק לדבר – היא להוביל. בואו נבנה יחד אסטרטגיה שתגרום לכולם להקשיב.
                  </p>
                </div>

                {/* Services List */}
                <div className="space-y-6">
                  <div className="text-sm font-montserrat tracking-wider text-silver-400/60 uppercase">תחומי מומחיות</div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      {
                        title: "יחסי ציבור ודוברות",
                        description: "יצירת חשיפה מדויקת, ניהול תקשורת עם עיתונאים ועיצוב תדמית",
                        icon: (
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        )
                      },
                      {
                        title: "שיווק דיגיטלי ורשתות חברתיות",
                        description: "קידום ממומן, יצירת תוכן והשגת מעורבות גבוהה",
                        icon: (
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        )
                      },
                      {
                        title: "ניהול משברים",
                        description: "זיהוי מוקדם, תגובה חכמה והפיכת משברים להזדמנות",
                        icon: (
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                          </svg>
                        )
                      },
                      {
                        title: "קמפיינים פוליטיים",
                        description: "בניית אסטרטגיה, מיפוי קהלים והובלת מהלכים תקשורתיים",
                        icon: (
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                          </svg>
                        )
                      },
                      {
                        title: "מיתוג עסקי וניהול נרטיב ציבורי",
                        description: "יצירת סיפור מותג חזק, חיבור רגשי עם הקהל והובלת דעת קהל",
                        icon: (
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        )
                      },
                      {
                        title: "ייעוץ אסטרטגי",
                        description: "פיתוח אסטרטגיות תקשורת מקיפות ותכנון מהלכים ארוכי טווח",
                        icon: (
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        )
                      }
                    ].map((service, index) => (
                      <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative bg-silver-400/5 hover:bg-silver-400/10 rounded-lg p-3 transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-7 h-7 rounded-full bg-silver-400/10 flex items-center justify-center text-silver-300 group-hover:bg-silver-400/20 group-hover:text-silver-200 transition-all duration-300">
                            {service.icon}
                          </div>
                          <div>
                            <h3 className="text-silver-200 text-sm font-medium mb-1 group-hover:text-silver-100 transition-colors">
                              {service.title}
                            </h3>
                            <p className="text-silver-400 text-xs leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                        </div>
                        {/* Hover accent */}
                        <div className="absolute bottom-0 right-0 left-0 h-px bg-gradient-to-l from-transparent via-silver-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
} 