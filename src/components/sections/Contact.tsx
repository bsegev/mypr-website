"use client"

import { motion, useInView } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { useRef } from 'react'

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
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
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
      aria-labelledby="contact-heading"
    >
      {/* Background elements fade in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-pinstripe opacity-10" />
        <div className="absolute inset-0 bg-gradient-radial opacity-50" />
        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-silver-400/10 to-transparent" />
        <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-silver-400/10 to-transparent" />
      </motion.div>

      <Container className="relative">
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Header fades in */}
          <motion.div 
            variants={fadeInUp}
            className="space-y-4 mb-12"
          >
            <h2 id="contact-heading" className="text-4xl md:text-5xl font-montserrat font-light tracking-wide text-silver-100">
              Let&apos;s Connect
            </h2>
            <p className="text-xl text-silver-400 font-inter font-light max-w-2xl mx-auto">
              Ready to elevate your communications strategy? Schedule a consultation 
              or connect with me on LinkedIn.
            </p>
          </motion.div>

          {/* Buttons fade in */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
            role="navigation"
            aria-label="Contact options"
          >
            {/* Meeting Button */}
            <motion.div
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
            >
              <Button 
                href="https://calendly.com/your-link"
                className="group relative overflow-hidden bg-silver-100 hover:bg-silver-200 text-black-950 px-8 py-4 font-montserrat font-medium tracking-wide uppercase text-sm transition-all duration-300"
                aria-label="Schedule a consultation meeting"
              >
                Schedule a Consultation
                <span className="ml-2" aria-hidden="true">→</span>
              </Button>
            </motion.div>

            {/* LinkedIn Button */}
            <motion.div
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
            >
              <Button
                href="https://www.linkedin.com/in/michaelyemini/"
                className="group inline-flex items-center gap-2 bg-transparent text-silver-400 hover:text-silver-200 font-montserrat tracking-wide text-sm transition-colors duration-300"
                aria-label="Connect with Michael on LinkedIn"
              >
                Connect on LinkedIn
                <span className="ml-2" aria-hidden="true">→</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Location info fades in */}
          <motion.div 
            variants={fadeInUp}
            className="mt-16 text-silver-400/60 font-inter text-sm"
          >
            <address className="not-italic">
              <p>Based in Tel Aviv, Israel</p>
              <p>Operating Internationally</p>
            </address>
          </motion.div>
        </motion.div>
      </Container>

      {/* Bottom accent slides in */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isInView ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0"
        aria-hidden="true"
      >
        <div className="h-px bg-gradient-to-r from-transparent via-silver-400/20 to-transparent" />
        <div className="h-px mt-2 bg-gradient-to-r from-transparent via-silver-400/10 to-transparent" />
      </motion.div>
    </section>
  )
} 