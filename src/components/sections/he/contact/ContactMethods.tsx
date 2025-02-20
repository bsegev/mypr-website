"use client"

import React, { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { useCalendar } from '@/lib/providers/CalendarProvider'

const methods = [
    {
      title: "פגישת ייעוץ",
      description: "לחצו לפתוח את לוח הזמנים",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
      type: "calendar",
      buttonText: "לקביעת פגישה",
    },
    {
      title: "התחברו בלינקדאין",
      description: "לחצו להתחברות",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      href: "https://www.linkedin.com/in/michaelyemini/",
      buttonText: "michaelyemini",
    },
    {
      title: "דואר אלקטרוני",
      description:
        "כתבו לנו",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      type: "email",
      email: "michaelyemini@gmail.com",
      buttonText: "העתקת מייל",
    },
  ];  

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
}

export function ContactMethods() {
  const [showCopied, setShowCopied] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState("");
  const [isDarkBg, setIsDarkBg] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { openScheduler } = useCalendar();

  const handleEmailClick = async (email: string) => {
    await navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 4000);
  };

  const getButtonProps = (method: typeof methods[0]) => {
    if (method.type === 'calendar') {
      return {
        onClick: openScheduler,
        'aria-label': `${method.buttonText} - ${method.title}`
      };
    }
    if (method.type === 'email') {
      return {
        onClick: () => handleEmailClick(method.email!),
        'aria-label': `העתקת כתובת מייל`
      };
    }
    return {
      href: method.href,
      'aria-label': `${method.buttonText} - ${method.title}`
    };
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 bg-silver-100 overflow-hidden"
      aria-labelledby="contact-methods-heading"
      dir="rtl"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-diagonal-texture opacity-5" aria-hidden="true" />
      
      {/* Accent Lines */}
      <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-black-900/10 to-transparent" aria-hidden="true" />
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-black-900/10 to-transparent" aria-hidden="true" />

      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Contact Methods Grid */}
          <div 
            className="grid md:grid-cols-3 gap-8"
            role="list"
            aria-label="דרכי יצירת קשר"
          >
            {methods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-lg bg-white border border-black-900/5 hover:border-black-900/10 transition-colors"
                role="listitem"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-black-900/5 flex items-center justify-center text-black-900" aria-hidden="true">
                    {method.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-montserrat text-black-900">
                    {method.title}
                  </h3>
                  <p className="text-body md:text-body-lg text-black-900/60 font-inter font-light">
                    {method.description}
                  </p>
                  <div className="relative">
                    <Button 
                      {...getButtonProps(method)}
                      className="w-full bg-black-900 hover:bg-black-800 text-silver-100 py-3 font-montserrat tracking-wide text-sm transition-all duration-300
                        hover:shadow-lg hover:shadow-black-900/10"
                    >
                      {method.buttonText}
                    </Button>
                    {method.type === 'email' && showCopied && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute right-0 left-0 text-center mt-2"
                      >
                        <span className="text-xs text-green-600 font-medium flex items-center justify-center gap-1">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          כתובת המייל הועתקה
                        </span>
                      </motion.div>
                    )}
                  </div>
                  <div className="absolute bottom-0 right-0 left-0 h-px bg-gradient-to-l from-transparent via-black-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Copied Email Toast */}
          <AnimatePresence>
            {showCopied && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="fixed bottom-4 right-4 left-4 md:right-1/2 md:left-auto md:bottom-8 md:translate-x-1/2 
                  backdrop-blur-md bg-black-900/95 text-silver-100 border border-silver-200/10 
                  px-4 py-2.5 rounded-lg shadow-xl shadow-black-900/20 z-50 max-w-[90vw] md:max-w-md"
                role="alert"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 md:w-5 md:h-5 shrink-0 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-montserrat text-xs md:text-sm font-medium">
                    כתובת המייל הועתקה בהצלחה. הדביקו אותה ושלחו לי מייל ליצירת קשר!
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Location Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mt-24"
          >
            <div className="inline-block w-full max-w-xl">
              <h3 className="text-lg font-montserrat text-black-900 mb-4">המשרד שלנו</h3>
              <a 
                href="https://maps.app.goo.gl/XHNfeLF8jNFWk2va6"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center px-8 py-6 rounded-xl bg-white border border-black-900/5 hover:border-black-900/10 transition-all duration-300
                  hover:shadow-lg hover:shadow-black-900/5"
              >
                <div className="absolute left-8 opacity-0 group-hover:opacity-100 group-hover:-translate-x-2 transition-all">
                  <svg className="w-5 h-5 text-black-900/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </div>

                <div className="flex items-center gap-6 w-full">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black-900/5 flex items-center justify-center text-black-900 group-hover:bg-black-900/10 transition-colors order-first" aria-hidden="true">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="text-right flex-grow">
                    <div className="text-xl font-montserrat font-medium text-black-900 mb-1">WeWork Shoken</div>
                    <div className="text-lg font-light text-black-900/60">שוקן 23, תל אביב-יפו</div>
                  </div>
                </div>

                <div className="absolute bottom-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-black-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
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