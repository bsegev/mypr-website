"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import Image from 'next/image'

export function FeaturedService() {
  return (
    <section 
      id="featured-service"
      className="relative py-24 bg-silver-100 overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-diagonal-texture opacity-5" />
      
      <Container>
        <div className="relative">
          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <Image
                  src="/images/israel-us-flags.jpg"
                  alt="Israel and United States Partnership"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black-950/40 to-transparent" />
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-montserrat text-4xl lg:text-5xl text-black-950 mb-4">
                  Israel Representation
                </h2>
                <p className="text-xl text-black-900/80 font-light max-w-xl">
                  Your trusted partner for establishing and growing your organization's presence in Israel.
                </p>
              </div>

              {/* Feature Points */}
              <div className="space-y-4">
                {[
                  "On-ground representation in Israel & U.S.",
                  "Direct access to government officials",
                  "Philanthropy management & oversight",
                  "Political briefings & policy reports",
                  "Event organization & delegation hosting",
                  "Strategic introductions & networking"
                ].map((feature) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex gap-3 items-center"
                  >
                    <div className="flex-shrink-0 w-5 h-5">
                      <svg className="w-5 h-5 text-black-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-lg text-black-900/90 font-medium">
                      {feature}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-4">
                <Button
                  href="/contact"
                  className="bg-black-950 text-silver-100 hover:bg-black-900 transition-colors duration-300"
                >
                  Explore Partnership
                  <span className="ml-2">→</span>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
} 