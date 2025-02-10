"use client"

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import Image from 'next/image'

export function AboutIntro() {
  return (
    <section className="relative py-24 bg-black-900/30 backdrop-blur-sm">
      <Container>
        {/* Accent Lines */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-silver-400/10 to-transparent" />
          <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-silver-400/10 to-transparent" />
        </div>

        <div className="relative max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-[2fr,3fr] gap-12 items-center"
          >
            {/* Image Side */}
            <div className="relative group/image">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative aspect-[4/5] rounded-lg overflow-hidden"
              >
                {/* Main Image */}
                <div className="relative w-full h-full transform-gpu transition-transform duration-1000 ease-out will-change-transform
                  group-hover/image:translate-y-[-8px]">
                  <Image
                    src="/images/my_image.jpg"
                    alt="Michael Yemini - PR and Digital Strategy Consultant"
                    fill
                    className="object-cover object-top transition-all duration-1000 ease-out"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    priority
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black-950/90 via-black-950/20 to-transparent 
                    opacity-100 transition-all duration-1000 ease-out group-hover/image:opacity-80" />
                </div>

                {/* Subtle Border */}
                <div className="absolute inset-0 rounded-lg transition-all duration-1000 ease-out
                  bg-gradient-to-tr from-silver-400/0 via-silver-400/10 to-silver-400/0 opacity-0 group-hover/image:opacity-100" />
                
                {/* Ambient Light */}
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-black-950/0 via-silver-400/5 to-black-950/0 
                  opacity-0 group-hover/image:opacity-100 blur-xl transition-all duration-1000 ease-out -z-10" />
              </motion.div>
            </div>

            {/* Text Side */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl md:text-3xl font-montserrat font-light text-silver-100">
                    Meet Michael
                  </h2>
                  <div className="mt-2 h-px w-16 bg-gradient-to-r from-silver-400/40 to-transparent" />
                </div>

                <div className="space-y-4 text-silver-400 font-inter font-light leading-relaxed">
                  <p>
                    Born and raised in Tel Aviv, I've always been fascinated by the power of effective communication 
                    and its ability to bridge cultures and perspectives. My journey in PR and digital strategy 
                    began with a passion for storytelling and a deep understanding of the Israeli-international 
                    media landscape.
                  </p>
                  <p>
                    Today, I combine my local insights with global expertise, helping clients navigate complex 
                    communications challenges while maintaining authenticity and strategic focus.
                  </p>
                </div>

                {/* Quick Facts */}
                <div className="grid grid-cols-2 gap-6 pt-4">
                  <div>
                    <div className="text-sm font-montserrat tracking-wider text-silver-400/60 uppercase">Based in</div>
                    <div className="mt-1 text-silver-200">Tel Aviv, Israel</div>
                  </div>
                  <div>
                    <div className="text-sm font-montserrat tracking-wider text-silver-400/60 uppercase">Focus</div>
                    <div className="mt-1 text-silver-200">PR & Digital Strategy</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
} 