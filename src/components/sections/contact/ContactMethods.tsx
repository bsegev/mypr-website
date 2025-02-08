"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

const methods = [
    {
      title: "Schedule a Meeting",
      description:
        "Prefer a direct conversation? Book a 30-minute consultation to discuss your needs.",
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
      href: "https://calendly.com/michaelyemini",
      buttonText: "Book a Meeting",
    },
    {
      title: "Connect on LinkedIn",
      description:
        "Prefer to connect professionally first? Let's start a conversation on LinkedIn.",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
      href: "https://www.linkedin.com/in/michaelyemini/",
      buttonText: "Connect Now",
    },
    {
      title: "Direct Email",
      description:
        "Prefer email? Send me a message, and I'll respond within 24 hours.",
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
      href: "mailto:michael@mypr.co.il",
      buttonText: "Send Email",
    },
  ];  

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
}

export function ContactMethods() {
  return (
    <section 
      className="relative py-32 bg-silver-100 overflow-hidden"
      aria-labelledby="contact-methods-heading"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-diagonal-texture opacity-5" aria-hidden="true" />
      
      {/* Accent Lines */}
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-black-900/10 to-transparent" aria-hidden="true" />
      <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-black-900/10 to-transparent" aria-hidden="true" />

      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Contact Methods Grid */}
          <div 
            className="grid md:grid-cols-3 gap-8"
            role="list"
            aria-label="Contact methods"
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
                  <h3 className="text-xl font-montserrat text-black-900">
                    {method.title}
                  </h3>
                  <p className="text-black-900/60 font-inter font-light">
                    {method.description}
                  </p>
                  <Button 
                    href={method.href}
                    className="w-full bg-black-900 hover:bg-black-800 text-silver-100 py-3 font-montserrat tracking-wide text-sm transition-all duration-300
                      hover:shadow-lg hover:shadow-black-900/10"
                    aria-label={`${method.buttonText} - ${method.title}`}
                  >
                    {method.buttonText}
                  </Button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
              </motion.div>
            ))}
          </div>

          {/* Location Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center space-y-2 mt-16"
          >
            <address className="not-italic">
              <p className="text-black-900/40 font-inter text-sm">Based in Tel Aviv, Israel</p>
              <p className="text-black-900/40 font-inter text-sm">Operating Internationally</p>
            </address>
          </motion.div>
        </div>
      </Container>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <div className="h-px bg-gradient-to-r from-transparent via-black-900/10 to-transparent" />
        <div className="h-px mt-2 bg-gradient-to-r from-transparent via-black-900/5 to-transparent" />
      </div>
    </section>
  )
} 