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
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Strategic Leadership",
    description: "Managing high-profile campaigns, resolving challenging media crises, and leading strategic initiatives at top PR agencies and digital management roles.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Independent Journey",
    description: "Embarked on an independent path to provide business owners, CEOs, and communications leaders with personalized, precise, and practical solutions.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
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
            How I Got Here
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