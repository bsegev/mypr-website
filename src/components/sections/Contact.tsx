"use client"

import { motion, useInView } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { useRef } from 'react'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { 
    margin: "-10% 0px -10% 0px",
    once: true 
  })

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-black-950"
      style={{
        opacity: isInView ? 1 : 0,
        transition: 'opacity 0.5s'
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-pinstripe opacity-10" />
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      
      {/* Accent Lines */}
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-silver-400/10 to-transparent" />
      <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-silver-400/10 to-transparent" />

      <Container className="relative">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Header */}
          <motion.div 
            variants={fadeIn}
            className="space-y-4 mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-montserrat font-light tracking-wide text-silver-100">
              Let&apos;s Connect
            </h2>
            <p className="text-xl text-silver-400 font-inter font-light max-w-2xl mx-auto">
              Ready to elevate your communications strategy? Schedule a consultation 
              or connect with me on LinkedIn.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={fadeIn}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            {/* Meeting Button */}
            <Button 
              href="https://calendly.com/your-link"
              className="group relative overflow-hidden bg-silver-100 hover:bg-silver-200 text-black-950 px-8 py-4 font-montserrat font-medium tracking-wide uppercase text-sm transition-all duration-300
                hover:shadow-lg hover:shadow-silver-500/10 hover:-translate-y-0.5"
            >
              <span className="relative z-10 flex items-center gap-2">
                Schedule a Consultation
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-silver-200/0 via-silver-200/50 to-silver-200/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            </Button>

            {/* LinkedIn Button */}
            <Button 
              href="https://linkedin.com/in/your-profile"
              className="group bg-transparent border border-silver-400/20 hover:border-silver-400/40 text-silver-100 px-8 py-4 font-montserrat tracking-wide uppercase text-sm transition-all duration-300
                hover:shadow-lg hover:shadow-silver-500/5"
            >
              <span className="flex items-center gap-2">
                Connect on LinkedIn
                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </span>
            </Button>
          </motion.div>

          {/* Location Info */}
          <motion.div 
            variants={fadeIn}
            className="mt-16 text-silver-400/60 font-inter text-sm"
          >
            <p>Based in Tel Aviv, Israel</p>
            <p>Operating Internationally</p>
          </motion.div>
        </motion.div>
      </Container>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-transparent via-silver-400/20 to-transparent" />
        <div className="h-px mt-2 bg-gradient-to-r from-transparent via-silver-400/10 to-transparent" />
      </div>
    </section>
  )
} 