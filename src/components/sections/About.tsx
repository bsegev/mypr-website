"use client"

import { motion, useScroll, useInView } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { useRef } from 'react'
import Image from 'next/image'

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

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { 
    margin: "-10% 0px -10% 0px",
    once: true 
  })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-silver-100"
      aria-labelledby="about-heading"
    >
      {/* Background fades in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-shirt-texture opacity-5" />
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-black-900/10 to-transparent" />
        <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-black-900/10 to-transparent" />
      </motion.div>

      <Container className="relative">
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 md:gap-20 items-center"
        >
          {/* Image fades and slides in */}
          <motion.div 
            variants={fadeInUp}
            className="relative aspect-[4/5]"
          >
            <div className="relative w-full h-full">
              <motion.div 
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="relative w-full h-full rounded-lg overflow-hidden group"
              >
                <Image
                  src="/images/my_image.jpg"
                  alt="Michael Yemini - PR and Digital Strategy Consultant"
                  fill
                  className="object-cover object-top transition-transform duration-700 scale-105 group-hover:scale-100"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </motion.div>
              <div className="absolute bottom-0 left-0 right-0">
                <div className="bg-white/90 backdrop-blur-sm py-2 px-4">
                  <span className="text-xs text-black-900/80 font-inter italic">
                    Photo by Rami Zarnegar
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content fades in with stagger */}
          <div className="space-y-8">
            <motion.div variants={fadeInUp}>
              <h2 id="about-heading" className="text-3xl md:text-4xl font-montserrat font-light tracking-wide text-black-900">
                My Story
              </h2>
              <div className="mt-2 h-px w-24 bg-gradient-to-r from-black-900/40 to-transparent" aria-hidden="true" />
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="space-y-6 text-lg text-black-900/80 font-inter font-light"
            >
              <p>
                I&apos;m Michael – a communications consultant with expertise in public relations, 
                crisis management, and digital strategy. Through intensive, hands-on experience 
                working with senior figures in Israeli politics, leading brands, and large organizations.
              </p>
              <p>
                After managing high-profile campaigns, resolving challenging media 
                crises, and leading strategic initiatives at top PR agencies and in digital 
                management roles, I embarked on an independent journey.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="pt-6 space-y-8"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button 
                  href="/about"
                  className="group bg-transparent border border-black-900 text-black-900 px-8 py-4 font-montserrat font-medium tracking-wide uppercase text-sm transition-all duration-300
                    hover:bg-black-900 hover:text-silver-100"
                  aria-label="Learn more about Michael Yemini"
                >
                  Learn More
                  <span className="ml-2 text-lg group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                </Button>
                <Button 
                  href="/contact"
                  className="bg-black-900 hover:bg-black-800 text-silver-100 px-8 py-4 font-montserrat font-medium tracking-wide uppercase text-sm transition-all duration-300
                    hover:shadow-lg hover:shadow-black-900/10 hover:-translate-y-0.5"
                  aria-label="Contact Michael Yemini"
                >
                  Get in Touch
                  <span className="ml-2 text-lg group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                </Button>
              </div>
              <div className="text-center">
                <address className="space-y-2 not-italic">
                  <p className="text-black-900/60 font-inter text-sm">Based in</p>
                  <p className="font-montserrat text-black-900">Tel Aviv, Israel</p>
                  <p className="text-black-900/60 font-inter text-sm">(Operating Internationally)</p>
                </address>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
} 