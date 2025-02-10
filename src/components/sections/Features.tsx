"use client"

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import Link from 'next/link'
import { useRef } from 'react'
import { scrollToSection } from '@/lib/utils'
import { Button } from '@/components/ui/Button'

const features = [
  {
    title: "Public Relations & Strategic Communications",
    href: "/services#pr-communications",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Social Media Management & Digital Marketing",
    href: "/services#digital-marketing",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Reputation Building & Crisis Management",
    href: "/services#crisis-management",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
  },
  {
    title: "Media Outreach & Press Coverage",
    href: "/services#media-outreach",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
  },
  {
    title: "Content Creation & Brand Storytelling",
    href: "/services#content-creation",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: "Your Executive Ambassador in Israel",
    href: "/services#featured-service",
    featured: true,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  }
]

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
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const featureVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section 
      ref={sectionRef} 
      className="relative py-32 overflow-hidden bg-black-950 will-change-transform"
      id="expertise"
      aria-labelledby="expertise-heading"
    >
      {/* Background fades in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-radial from-black-900/50 via-black-950/30 to-transparent opacity-50" />
        <div className="absolute inset-0 bg-diagonal-texture bg-[length:30px_30px] opacity-5" />
      </motion.div>

      <Container className="relative">
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div 
            variants={fadeInUp}
            className="text-center space-y-4"
          >
            <h2 id="expertise-heading" className="text-3xl md:text-4xl font-montserrat font-light tracking-wide text-silver-100">
              Expertise
            </h2>
            <p className="text-lg md:text-xl text-silver-400 max-w-2xl mx-auto font-inter">
              End-to-end solutions to elevate your communications strategy. Click to learn more.
            </p>
          </motion.div>

          {/* Features Grid */}
          <nav className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" aria-label="Services navigation">
            {features.map((feature) => (
              <Link 
                key={feature.title}
                href={feature.href}
                onClick={(e) => {
                  e.preventDefault();
                  const id = feature.href.split('#')[1];
                  window.location.href = feature.href;
                  setTimeout(() => scrollToSection(id), 100);
                }}
                className="relative group"
                aria-label={`Learn more about ${feature.title}`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`p-8 rounded-lg transition-all duration-300 ${
                    feature.featured 
                      ? 'bg-silver-100 hover:bg-silver-200/90' 
                      : 'border border-silver-400/10 hover:border-silver-400/20'
                  }`}
                >
                  <motion.div 
                    className={`w-12 h-12 mb-6 rounded-full flex items-center justify-center ${
                      feature.featured
                        ? 'bg-black-950 text-silver-100'
                        : 'bg-gradient-to-br from-silver-400/20 to-transparent text-silver-300'
                    }`}
                    aria-hidden="true"
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className={`text-xl font-montserrat font-medium ${
                    feature.featured ? 'text-black-950' : 'text-silver-100'
                  }`}>
                    {feature.title}
                  </h3>
                </motion.div>
              </Link>
            ))}
          </nav>

          {/* CTA Section */}
          <motion.div
            variants={fadeInUp}
            className="text-center mt-16"
          >
            <Button
              href="/services"
              className="group bg-silver-100 hover:bg-silver-200 text-black-950 px-8 py-4 font-montserrat font-medium tracking-wide uppercase text-sm transition-all duration-300
                hover:shadow-lg hover:shadow-silver-500/10 hover:-translate-y-0.5"
            >
              Explore All Services
              <span className="ml-2 text-lg group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
} 