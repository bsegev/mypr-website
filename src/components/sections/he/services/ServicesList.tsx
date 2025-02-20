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
    title: "יחסי ציבור ותקשורת",
    description: "בניית אסטרטגיה תקשורתית ומיתוג שמייצרים השפעה, יצירת נוכחות תקשורתית מותאמת ומדויקת למטרות שלך. אנחנו דואגים לחשיפה נכונה בכלי התקשורת, ניהול מסרים אפקטיבי וחיזוק תדמית ציבורית.",
    image: "/images/pr-strategy.png",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    details: [
      {
        title: "פיתוח נרטיב",
        description: "בניית סיפור מותג משכנע שמחזק את המוניטין שלך"
      },
      {
        title: "תקשורת ממוקדת",
        description: "ביצוע אסטרטגיות תקשורת להגעה לקהל היעד הנכון"
      },
      {
        title: "בניית אמון",
        description: "יצירת אמינות ואמון באמצעות מסרים אפקטיביים"
      }
    ]
  },
  {
    id: "digital-marketing",
    title: "דיגיטל ורשתות חברתיות",
    description: "יצירת אסטרטגיית תוכן שתגרום לך לבלוט – כולל ניהול עמודים ברשתות החברתיות, פיתוח תוכן קריאטיבי, כתיבה שיווקית, עיצוב גרפי וקידום ממומן. אנחנו משלבים בין אורגני לממומן, כדי למקסם מעורבות, חשיפה והנעה לפעולה",
    image: "/images/social-media-image.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    details: [
      {
        title: "ניהול קמפיינים",
        description: "יצירה וניהול של קמפיינים מעוררי מעורבות ברשתות החברתיות"
      },
      {
        title: "אופטימיזציה דיגיטלית",
        description: "מיטוב הנוכחות הדיגיטלית להגדלת תנועה ומעורבות"
      },
      {
        title: "המרת קהלים",
        description: "הפיכת עוקבים ללקוחות נאמנים באמצעות מעורבות אסטרטגית"
      }
    ]
  },
  {
    id: "crisis-management",
    title: "ניהול משברים",
    description: "משברים הם רגעי מבחן – ואנחנו יודעים איך להפוך אותם להזדמנות. אנו מזהים מראש איומים תקשורתיים, יוצרים אסטרטגיות מניעה ומנהלים תקשורת בזמן אמת כדי לשמור על המוניטין שלך ולמזער נזקים.",
    image: "/images/crisis-response.png",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    details: [
      {
        title: "ניהול מונע",
        description: "זיהוי וטיפול מוקדם באיומים תקשורתיים לפני שהם מתפתחים למשבר"
      },
      {
        title: "תגובה למשברים",
        description: "טיפול אפקטיבי במשברים והפיכת אתגרים להזדמנויות"
      },
      {
        title: "חוסן תדמיתי",
        description: "שמירה על מוניטין חזק ועמיד לאורך זמן גם בתקופות מאתגרות"
      }
    ]
  },
  {
    id: "content-creation",
    title: "מיתוג עסקי ובניית נרטיב ציבורי",
    description: "יצירת זהות תקשורתית חזקה ובניית מותג עם מסר ברור ומשכנע. פיתוח סיפור מותג מנצח שמדגיש את החוזקות שלך, גיבוש נרטיב ציבורי שמייצר חיבור רגשי והפיכתו למסר תקשורתי עקבי.",
    image: "/images/marketing.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    details: [
      {
        title: "זהות מותג",
        description: "פיתוח זהות תקשורתית ייחודית ומבדלת"
      },
      {
        title: "סיפור מותג",
        description: "בניית נרטיב משכנע שמחבר בין הערכים לקהל היעד"
      },
      {
        title: "מסר עקבי",
        description: "יצירת מסרים תקשורתיים אחידים בכל נקודות המגע"
      }
    ]
  },
  {
    id: "media-outreach",
    title: "תקשורת פוליטית",
    description: "תכנון והובלת קמפיינים פוליטיים בזירה המקומית והלאומית, בניית אסטרטגיה תקשורתית אפקטיבית, ניהול קמפיינים במדיה המסורתית ובדיגיטל, יצירת מסרים חדים, מיפוי קהלים והשפעה על דעת הקהל.",
    image: "/images/media-coverage.png",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    details: [
      {
        title: "אסטרטגיה פוליטית",
        description: "תכנון וביצוע אסטרטגיה תקשורתית מקיפה לקמפיינים פוליטיים"
      },
      {
        title: "ניהול מדיה משולב",
        description: "הובלת קמפיינים במדיה המסורתית ובפלטפורמות הדיגיטליות"
      },
      {
        title: "עיצוב דעת קהל",
        description: "יצירת מסרים אפקטיביים והשפעה על השיח הציבורי"
      }
    ]
  },
  {
    id: "public-campaigns",
    title: "מאבקים ציבוריים",
    description: "במציאות המשתנה של היום, מאבק ציבורי מוצלח דורש הרבה יותר מנוכחות בתקשורת. הוא מחייב אסטרטגיה חדה, יצירת נרטיב מנצח, וחיבור נכון בין תקשורת, פוליטיקה ודעת הקהל. אנחנו מתמחים ביצירת קמפיינים אפקטיביים שמעצבים את השיח הציבורי, מגייסים תמיכה רחבה ומובילים לשינוי.",
    image: "/images/public-struggle.png",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    details: [
      {
        title: "תכנון ונרטיב",
        description: "בניית אסטרטגיה חדה ונרטיב מנצח שמעצב את השיח הציבורי"
      },
      {
        title: "השפעה מערכתית",
        description: "יצירת השפעה משולבת בזירה התקשורתית, הפוליטית והציבורית"
      },
      {
        title: "הובלת שינוי",
        description: "הובלת קמפיינים אפקטיביים שמגייסים תמיכה ומשיגים תוצאות"
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
      className="relative py-32 overflow-hidden bg-black-950"
      aria-labelledby="services-list-heading"
      dir="rtl"
    >
      {/* Background with fade in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
        aria-hidden="true"
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
          {/* Section Header */}
          <motion.div 
            variants={fadeInUp}
            className="text-center space-y-4"
          >
            <h2 id="services-list-heading" className="text-3xl md:text-4xl font-montserrat font-light tracking-wide text-silver-100">
              השירותים שלנו
            </h2>
            <p className="text-lg md:text-xl text-silver-400 max-w-2xl mx-auto font-inter">
              אנחנו מציעים מודל הוליסטי של שירותים בתחום התקשורת, יחסי הציבור והדיגיטל – משלב התכנון האסטרטגי ועד ההוצאה לפועל
            </p>
          </motion.div>

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              id={service.id}
              variants={serviceVariants}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
              } gap-12 md:gap-20 items-center`}
              role="article"
              aria-labelledby={`${service.id}-heading`}
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
                      alt={`${service.title} - Visual representation`}
                      width={800}
                      height={600}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <motion.div 
                      className="absolute inset-0 bg-black-950/60 transition-opacity duration-500 group-hover:bg-black-950/50"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      aria-hidden="true"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black-900/40 to-transparent" aria-hidden="true" />
                  </div>
                  
                  {/* Icon Container */}
                  <div className="relative h-full flex items-center justify-center" aria-hidden="true">
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
                <motion.div variants={fadeInUp}>
                  <h3 id={`${service.id}-heading`} className="text-2xl md:text-3xl font-montserrat font-light tracking-wide text-silver-100 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-body md:text-body-lg text-silver-400 font-inter font-light">
                    {service.description}
                  </p>
                </motion.div>

                {/* Service Details */}
                <div 
                  className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  role="list"
                  aria-label={`${service.title} key features`}
                >
                  {service.details.map((detail, detailIndex) => (
                    <motion.div 
                      key={detail.title}
                      variants={fadeInUp}
                      custom={detailIndex}
                      className="group relative p-6 rounded-lg bg-black-900/50 border border-silver-400/10 hover:border-silver-400/20 transition-colors"
                      role="listitem"
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
                        aria-hidden="true"
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
        aria-hidden="true"
      >
        <div className="h-px bg-gradient-to-r from-transparent via-silver-400/20 to-transparent" />
        <div className="h-px mt-2 bg-gradient-to-r from-transparent via-silver-400/10 to-transparent" />
      </motion.div>
    </section>
  )
} 