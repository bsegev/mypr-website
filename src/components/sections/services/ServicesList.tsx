// Detailed breakdown of services
// - Each service with expanded description
// - Case studies/examples
// - Interactive elements
// Three main categories:
// - PR & Communications
// - Digital & Social
// - Crisis Management 

"use client"

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { useRef } from 'react'
import Image from 'next/image'

const services = [
  {
    title: "PR Representative",
    description: "Your dedicated point of contact for all communications, managing media relations and public presence.",
    image: "/images/spokesperson_image.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    details: [
      {
        title: "Media Relations",
        description: "Your front-line spokesperson, handling press inquiries and proactively pitching stories to media."
      },
      {
        title: "Public Communications",
        description: "Creating and delivering press releases, statements, and public-facing materials that elevate your brand."
      },
      {
        title: "Industry Networking",
        description: "Building and maintaining relationships with key media contacts and industry stakeholders."
      }
    ]
  },
  {
    title: "Digital & Social Strategy",
    description: "Behind-the-scenes management of your digital presence to build and engage your audience.",
    image: "/images/social-media-image.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    details: [
      {
        title: "Content Strategy",
        description: "Crafting compelling content that builds authority and drives meaningful engagement."
      },
      {
        title: "Platform Management",
        description: "Day-to-day management of social media presence, including community engagement and influencer partnerships."
      },
      {
        title: "Digital Campaigns",
        description: "Creating and executing targeted campaigns with measurable results and clear ROI."
      }
    ]
  },
  {
    title: "Crisis Management",
    description: "Expert guidance and rapid response when challenges arise, protecting your reputation when it matters most.",
    image: "/images/crisis-image.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    details: [
      {
        title: "Crisis Prevention",
        description: "Identifying potential risks and developing proactive mitigation strategies."
      },
      {
        title: "Rapid Response",
        description: "24/7 crisis support with immediate action plans and stakeholder communications."
      },
      {
        title: "Reputation Recovery",
        description: "Post-crisis reputation rebuilding and strategic communications planning."
      }
    ]
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
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const serviceVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1]
    }
  }
}

export function ServicesList() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section 
      ref={sectionRef}
      id="services"
      className="relative py-32 bg-black-950"
    >
      {/* Background with fade in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-diagonal-texture opacity-5" />
      </motion.div>
      
      <Container className="relative">
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-24"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={serviceVariants}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-12 md:gap-20 items-center`}
            >
              {/* Service Icon/Visual */}
              <div className="w-full md:w-1/3">
                <motion.div 
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative aspect-square rounded-lg p-8 border border-silver-400/10 overflow-hidden group transition-all duration-500 hover:border-silver-400/20"
                >
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={800}
                      height={600}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <motion.div 
                      className="absolute inset-0 bg-black-950/60 transition-opacity duration-500 group-hover:bg-black-950/50"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black-900/40 to-transparent" />
                  </div>
                  
                  {/* Icon Container */}
                  <div className="relative h-full flex items-center justify-center">
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ delay: index * 0.3 + 0.2 }}
                      className="w-20 h-20 rounded-full bg-gradient-to-br from-silver-400/20 to-transparent flex items-center justify-center text-silver-300 transition-transform duration-500 group-hover:scale-110 group-hover:from-silver-400/30"
                    >
                      {service.icon}
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Service Content */}
              <div className="w-full md:w-2/3 space-y-8">
                <motion.div
                  variants={fadeInUp}
                >
                  <h3 className="text-2xl md:text-3xl font-montserrat font-light tracking-wide text-silver-100 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-silver-400 font-inter font-light">
                    {service.description}
                  </p>
                </motion.div>

                {/* Service Details */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {service.details.map((detail, detailIndex) => (
                    <motion.div 
                      key={detail.title}
                      variants={fadeInUp}
                      custom={detailIndex}
                      className="group relative p-6 rounded-lg bg-black-900/50 border border-silver-400/10 hover:border-silver-400/20 transition-colors"
                    >
                      <h4 className="text-silver-200 font-montserrat text-lg mb-2">
                        {detail.title}
                      </h4>
                      <p className="text-silver-400 font-inter font-light text-sm leading-relaxed">
                        {detail.description}
                      </p>
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-silver-400/20 to-transparent"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      {/* Bottom Accent */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0"
      >
        <div className="h-px bg-gradient-to-r from-transparent via-silver-400/20 to-transparent" />
        <div className="h-px mt-2 bg-gradient-to-r from-transparent via-silver-400/10 to-transparent" />
      </motion.div>
    </section>
  )
} 