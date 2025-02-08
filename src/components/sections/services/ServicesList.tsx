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
    id: "pr-communications",
    title: "Public Relations & Strategic Communications",
    description: "We craft compelling narratives and execute targeted communication strategies to enhance your brand's reputation. Our expertise ensures your message reaches the right audience, building credibility and trust.",
    image: "/images/pr-strategy.png",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    details: [
      {
        title: "Narrative Development",
        description: "Crafting compelling narratives that enhance your brand's reputation."
      },
      {
        title: "Targeted Communications",
        description: "Executing strategic communications to reach the right audience."
      },
      {
        title: "Trust Building",
        description: "Building credibility and trust through effective messaging."
      }
    ]
  },
  {
    id: "digital-marketing",
    title: "Social Media Management & Digital Marketing",
    description: "We create and manage engaging social media campaigns, optimizing your digital presence to drive traffic, increase engagement, and convert followers into loyal customers.",
    image: "/images/social-media-image.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    details: [
      {
        title: "Campaign Management",
        description: "Creating and managing engaging social media campaigns."
      },
      {
        title: "Digital Optimization",
        description: "Optimizing digital presence to drive traffic and engagement."
      },
      {
        title: "Audience Conversion",
        description: "Converting followers into loyal customers through strategic engagement."
      }
    ]
  },
  {
    id: "crisis-management",
    title: "Reputation Building & Crisis Management",
    description: "We proactively manage your brand's image and address crises effectively, ensuring that challenges are turned into opportunities and your reputation remains strong and resilient.",
    image: "/images/crisis-response.png",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    details: [
      {
        title: "Proactive Management",
        description: "Proactively managing your brand's image to prevent issues."
      },
      {
        title: "Crisis Response",
        description: "Addressing crises effectively and turning challenges into opportunities."
      },
      {
        title: "Reputation Resilience",
        description: "Maintaining a strong and resilient reputation through challenges."
      }
    ]
  },
  {
    id: "media-outreach",
    title: "Media Outreach & Press Coverage",
    description: "Our extensive media network allows us to secure press coverage and exposure in leading publications, ensuring your brand gains the recognition and visibility it deserves.",
    image: "/images/media-coverage.png",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    details: [
      {
        title: "Media Network",
        description: "Leveraging our extensive media network for coverage."
      },
      {
        title: "Press Coverage",
        description: "Securing exposure in leading publications."
      },
      {
        title: "Brand Recognition",
        description: "Ensuring your brand gains deserved recognition and visibility."
      }
    ]
  },
  {
    id: "content-creation",
    title: "Content Creation & Brand Storytelling",
    description: "We develop high-quality content, including articles, press releases, and multimedia assets, to convey your brand's story authentically and compellingly.",
    image: "/images/marketing.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    details: [
      {
        title: "Content Development",
        description: "Developing high-quality articles and press releases."
      },
      {
        title: "Multimedia Creation",
        description: "Creating compelling multimedia assets for your brand."
      },
      {
        title: "Authentic Storytelling",
        description: "Conveying your brand's story authentically and compellingly."
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
              id={service.id}
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