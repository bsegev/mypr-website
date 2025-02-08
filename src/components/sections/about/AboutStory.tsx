// Professional Journey Section
// - Dark theme
// - Timeline of key milestones
// - Professional development
// - Background in communications
// - Vision and approach
// - Animated timeline entries
// - Scroll-triggered reveals

"use client"

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { TracingBeam } from '@/components/ui/TracingBeam'

const storyPoints = [
  {
    id: 1,
    title: "Proven Expertise",
    description: "Intensive, hands-on experience working with senior figures in Israeli politics, leading brands, and large organizations.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Strategic Leadership",
    description: "Managing high-profile campaigns, resolving challenging media crises, and leading strategic initiatives at top PR agencies and digital management roles.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Independent Journey",
    description: "Embarked on an independent path to provide business owners, CEOs, and communications leaders with personalized, precise, and practical solutions.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    )
  }
]

export function AboutStory() {
  return (
    <section 
      id="story"
      className="relative py-16 md:py-32 bg-silver-100 overflow-hidden"
      aria-labelledby="about-story-heading"
    >
      <Container>
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24 space-y-4"
        >
          <h2 id="about-story-heading" className="text-3xl md:text-4xl font-montserrat font-light tracking-wide text-black-900">
            Our Story
          </h2>
          <p className="text-lg md:text-xl font-inter font-light text-black-900/60 max-w-2xl mx-auto">
            MYPR – Your Strategic PR & Digital Consulting Partner
          </p>
          <div className="mt-2 h-px w-24 mx-auto bg-gradient-to-r from-black-900/40 to-transparent" aria-hidden="true" />
        </motion.div>

        <TracingBeam className="px-4 md:px-8">
          <div 
            className="max-w-2xl mx-auto space-y-12 md:space-y-16"
            role="list"
            aria-label="Professional journey milestones"
          >
            {storyPoints.map((point, index) => (
              <motion.div
                key={point.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-10 md:pl-16"
                role="listitem"
              >
                <div 
                  className="absolute left-0 top-1 flex items-center justify-center w-8 h-8 rounded-full bg-black-900 text-silver-100"
                  aria-hidden="true"
                >
                  {point.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg md:text-xl font-montserrat font-medium text-black-900">
                    {point.title}
                  </h3>
                  <p className="text-body md:text-body-lg text-black-900/70 font-inter font-light leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative pl-10 md:pl-16 pt-8 border-t border-black-900/10"
              role="contentinfo"
              aria-label="Mission statement"
            >
              <div 
                className="absolute left-0 top-[calc(2rem+1px)] flex items-center justify-center w-8 h-8 rounded-full bg-black-900 text-silver-100"
                aria-hidden="true"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-montserrat font-medium text-black-900">
                  Our Mission
                </h3>
                <p className="text-base text-black-900/70 font-inter font-light leading-relaxed">
                  I empower leaders to communicate clearly, manage crises effectively, and build lasting public trust. 
                  At MYPR, I believe every challenge is an opportunity for growth&mdash;and I&apos;m committed to turning that 
                  opportunity into a strategic advantage for your business.
                </p>
              </div>
            </motion.div>
          </div>
        </TracingBeam>
      </Container>
    </section>
  )
} 