"use client"

import { motion, useScroll, useInView } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { useRef } from 'react'
import Image from 'next/image'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
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
      style={{
        opacity: isInView ? 1 : 0,
        transition: 'opacity 0.5s'
      }}
    >
      {/* Subtle shirt texture pattern */}
      <div className="absolute inset-0 bg-shirt-texture opacity-5" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-black-900/10 to-transparent" />
        <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-black-900/10 to-transparent" />
      </div>

      <Container className="relative">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 md:gap-20 items-center"
        >
          {/* Left Column - Image */}
          <motion.div 
            variants={fadeIn}
            className="relative aspect-[4/5]"
          >
            {/* Image Container with Decorative Elements */}
            <div className="relative w-full h-full">
              {/* Background Pattern */}
              <div className="absolute -top-4 -right-4 bottom-4 left-4 bg-black-900/5 rounded-lg" />
              
              {/* Border Frame */}
              <div className="absolute -top-2 -right-2 bottom-2 left-2 border border-black-900/10 rounded-lg" />
              
              {/* Image */}
              <div className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  src="/images/my_image.jpg"
                  alt="Michael Yemini"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black-900/10" />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <motion.div variants={fadeIn}>
              <h2 className="text-3xl md:text-4xl font-montserrat font-light tracking-wide text-black-900">
                My Story
              </h2>
              <div className="mt-2 h-px w-24 bg-gradient-to-r from-black-900/40 to-transparent" />
            </motion.div>

            <motion.div 
              variants={fadeIn}
              className="space-y-6 text-lg text-black-900/80 font-inter font-light"
            >
              <p>
                I&apos;m Michael—a communications consultant with expertise in public relations, 
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
              variants={fadeIn}
              className="pt-6 flex flex-col sm:flex-row items-start gap-6"
            >
              <Button 
                href="/contact"
                className="bg-black-900 hover:bg-black-800 text-silver-100 font-montserrat tracking-wide uppercase text-sm transition-all duration-300
                  hover:shadow-lg hover:shadow-black-900/10 hover:-translate-y-0.5"
              >
                Get in Touch
                <span className="ml-2">→</span>
              </Button>
              <div className="space-y-2">
                <p className="text-black-900/60 font-inter text-sm">Based in</p>
                <p className="font-montserrat text-black-900">Tel Aviv, Israel</p>
                <p className="text-black-900/60 font-inter text-sm">(Operating Internationally)</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
} 