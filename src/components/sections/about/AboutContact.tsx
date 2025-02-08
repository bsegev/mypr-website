// About Contact Section
// - Light theme (silver background)
// - Personal connection invitation
// - Professional networking
// - Meeting scheduling
// - Location/availability
// - Social proof elements
// - Call-to-action buttons

"use client"

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { useRef } from 'react'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
}

export function AboutContact() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section 
      ref={sectionRef} 
      className="relative py-32 bg-silver-100"
      aria-labelledby="about-contact-heading"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-shirt-texture opacity-5" aria-hidden="true" />
      
      {/* Accent Lines */}
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-black-900/10 to-transparent" aria-hidden="true" />
      <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-black-900/10 to-transparent" aria-hidden="true" />

      <Container>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div 
            variants={fadeIn}
            className="text-center space-y-4 mb-16"
          >
            <h2 id="about-contact-heading" className="text-3xl md:text-4xl font-montserrat font-light tracking-wide text-black-900">
              Get to Know Me
            </h2>
            <p className="text-lg md:text-xl text-black-900/60 font-inter font-light max-w-2xl mx-auto">
              Interested in learning more about my journey, methods, or how I can help your organization?
            </p>
          </motion.div>

          {/* Contact Options */}
          <motion.div 
            variants={fadeIn}
            className="grid md:grid-cols-2 gap-6 mb-16"
            role="list"
            aria-label="Contact options"
          >
            {/* Consultation Card */}
            <div 
              className="group relative p-8 rounded-lg bg-white border border-black-900/5 hover:border-black-900/10 transition-colors"
              role="listitem"
            >
              <div className="space-y-4">
                <h3 className="text-lg md:text-xl font-montserrat text-black-900">
                  Schedule a Consultation
                </h3>
                <p className="text-body md:text-body-lg text-black-900/60 font-inter font-light">
                  Let&apos;s discuss your communications goals and explore how we can work together.
                </p>
                <Button 
                  href="https://calendly.com/your-link"
                  className="w-full bg-black-900 hover:bg-black-800 text-silver-100 py-3 font-montserrat tracking-wide text-sm transition-all duration-300
                    hover:shadow-lg hover:shadow-black-900/10"
                  aria-label="Book a consultation meeting"
                >
                  Book a Meeting
                </Button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
            </div>

            {/* Connect Card */}
            <div 
              className="group relative p-8 rounded-lg bg-white border border-black-900/5 hover:border-black-900/10 transition-colors"
              role="listitem"
            >
              <div className="space-y-4">
                <h3 className="text-lg md:text-xl font-montserrat text-black-900">
                  Professional Network
                </h3>
                <p className="text-black-900/60 font-inter font-light">
                  Connect with me on LinkedIn to stay updated on PR insights and opportunities.
                </p>
                <Button
                  href="https://www.linkedin.com/in/michaelyemini/"
                  className="w-full bg-transparent border border-black-900 text-black-900 py-3 font-montserrat tracking-wide text-sm transition-all duration-300
                    hover:bg-black-900 hover:text-silver-100"
                  aria-label="Connect with Michael on LinkedIn"
                >
                  <span className="flex items-center justify-center gap-2">
                    Connect on LinkedIn
                    <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </span>
                </Button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
            </div>
          </motion.div>

          {/* Location Info */}
          <motion.div 
            variants={fadeIn}
            className="text-center space-y-2"
          >
            <address className="not-italic">
              <p className="text-black-900/40 font-inter text-sm">Based in Tel Aviv, Israel</p>
              <p className="text-black-900/40 font-inter text-sm">Operating Internationally</p>
            </address>
          </motion.div>
        </motion.div>
      </Container>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <div className="h-px bg-gradient-to-r from-transparent via-black-900/10 to-transparent" />
        <div className="h-px mt-2 bg-gradient-to-r from-transparent via-black-900/5 to-transparent" />
      </div>
    </section>
  )
} 