// Service-specific CTA
// - Similar to main Contact but with service focus
// - Calendly integration
// - Service-specific consultation booking 

"use client"

import { motion, useInView } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { useRef, useEffect } from 'react'
import { getCalApi } from "@calcom/embed-react"

const services = [
  {
    title: "תקשורת ויחסי ציבור",
    duration: "45 דק׳",
    description: "ייעוץ אסטרטגי, ניהול וייעוץ תקשורתי",
    calLink: "michaelyemini/45min"
  },
  {
    title: "דיגיטל וסושיאל",
    duration: "45 דק׳",
    description: "רשתות חברתיות, יצירה של תוכן, קידום ממומן ואופטימזציה",
    calLink: "michaelyemini/45min"
  },
  {
    title: "ניהול משברים",
    duration: "45 דק׳",
    description: "ייעוץ וניהול משברים תקשורתיים",
    calLink: "michaelyemini/45min"
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

export function ServicesContact() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true })

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "light"
      });
      // Preload all service calendars
      services.forEach(service => {
        cal("preload", {
          calLink: service.calLink
        });
      });
    })();
  }, []);

  const handleScheduleClick = async (calLink: string) => {
    const cal = await getCalApi();
    cal("modal", {
      calLink,
      config: {
        layout: "month_view",
        theme: "light"
      }
    });
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-black-950"
      aria-labelledby="services-contact-heading"
      dir="rtl"
    >
      {/* Background with fade in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-pinstripe opacity-10" />
        <div className="absolute inset-0 bg-gradient-radial from-black-900/50 to-transparent opacity-50" />
        <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-silver-400/10 to-transparent" />
        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-silver-400/10 to-transparent" />
      </motion.div>

      <Container className="relative">
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div 
            variants={fadeInUp}
            className="text-center space-y-4 mb-16"
          >
            <h2 id="services-contact-heading" className="text-3xl md:text-4xl font-montserrat font-light tracking-wide text-silver-100">
              קבע פגישת ייעוץ
            </h2>
            <p className="text-lg md:text-xl text-silver-400 font-inter font-light max-w-2xl mx-auto">
              בחר מבין מגוון השירותים שלנו
            </p>
          </motion.div>

          {/* Service Options */}
          <motion.div 
            variants={fadeInUp}
            className="grid md:grid-cols-3 gap-6 mb-12"
            role="list"
            aria-label="אפשרויות ייעוץ"
          >
            {services.map((service, index) => (
              <motion.div 
                key={service.title}
                variants={serviceVariants}
                custom={index}
                className="group relative p-6 rounded-lg bg-black-900/50 border border-silver-400/10 hover:border-silver-400/20 transition-all duration-300"
                role="listitem"
              >
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                  className="flex items-start justify-between mb-4"
                >
                  <h3 className="text-lg md:text-xl font-montserrat text-silver-100">
                    {service.title}
                  </h3>
                  <span className="text-sm text-silver-400 font-inter mr-2">
                    {service.duration}
                  </span>
                </motion.div>
                <p className="text-silver-400 font-inter font-light text-sm mb-6">
                  {service.description}
                </p>
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button 
                    onClick={() => handleScheduleClick(service.calLink)}
                    className="w-full bg-transparent border border-silver-400/20 hover:border-silver-400/40 text-silver-100 py-2 font-montserrat tracking-wide text-sm transition-all duration-300
                      hover:bg-silver-400/5"
                    aria-label={`קבע פגישת ${service.duration} ל${service.title}`}
                  >
                    לקביעת פגישה
                  </Button>
                </motion.div>
                <motion.div 
                  className="absolute bottom-0 right-0 left-0 h-px bg-gradient-to-l from-transparent via-silver-400/20 to-transparent"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  aria-hidden="true"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Alternative Contact */}
          <motion.div 
            variants={fadeInUp}
            className="text-center space-y-6"
          >
            <p className="text-silver-400/60 font-inter text-sm">
              מעדיף ליצור קשר קודם?
            </p>
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <div dir="ltr">
                <Button
                  href="https://www.linkedin.com/in/michaelyemini/"
                  className="w-full bg-transparent border border-silver-400/20 text-silver-100 py-3 font-montserrat tracking-wide text-sm transition-all duration-300
                    hover:bg-silver-400/10"
                  aria-label="Connect with Michael on LinkedIn"
                >
                  Let's connect on LinkedIn
                  <svg className="w-5 h-5 ml-4 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </Button>
              </div>
            </motion.div>
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
        <div className="h-px bg-gradient-to-l from-transparent via-silver-400/20 to-transparent" />
        <div className="h-px mt-2 bg-gradient-to-l from-transparent via-silver-400/10 to-transparent" />
      </motion.div>
    </section>
  )
} 