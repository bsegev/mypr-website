"use client"

import { motion, useScroll, useInView } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { useRef, useState } from 'react'
import Image from 'next/image'

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

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { 
    margin: "-10% 0px -10% 0px",
    once: true 
  })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const shortContent = (
    <>
      <p>
        תקשורת היא הרבה יותר ממילים – היא כוח שמעצב מציאות.
      </p>
      <p>
        במשך שנים פעלתי בחזית עולם יחסי הציבור – הובלתי קמפיינים אסטרטגיים, ניהלתי משברים תקשורתיים ועבדתי עם דמויות מפתח בפוליטיקה, בעסקים ובמאבקים ציבוריים. עבדתי לצד קובעי מדיניות, נבחרי ציבור וארגונים חברתיים, כדי לבנות מסרים חדים שמשפיעים על דעת הקהל ומקדמים מהלכים משמעותיים.
      </p>
      <p>
        עולם התקשורת משתנה. כדי להשפיע באמת, כבר לא מספיק רק לדעת איך לדבר עם התקשורת – צריך אסטרטגיה חכמה, שליטה בנרטיב, תדמית ציבורית חזקה וכלים מתקדמים שיביאו אותך לקהל הנכון בזמן הנכון.
      </p>
      <p>
        זו בדיוק התפיסה מאחורי מיכאל ימיני יחסי ציבור ודיגיטל – חברה שמחברת בין יחסי ציבור קלאסיים לבין טכנולוגיה חדשנית, בינה מלאכותית (AI) וניתוח...
      </p>
    </>
  )

  const expandedContent = (
    <>
      <p>
        תקשורת היא הרבה יותר ממילים – היא כוח שמעצב מציאות.
      </p>
      <p>
        במשך שנים פעלתי בחזית עולם יחסי הציבור – הובלתי קמפיינים אסטרטגיים, ניהלתי משברים תקשורתיים ועבדתי עם דמויות מפתח בפוליטיקה, בעסקים ובמאבקים ציבוריים. עבדתי לצד קובעי מדיניות, נבחרי ציבור וארגונים חברתיים, כדי לבנות מסרים חדים שמשפיעים על דעת הקהל ומקדמים מהלכים משמעותיים.
      </p>
      <p>
        עולם התקשורת משתנה. כדי להשפיע באמת, כבר לא מספיק רק לדעת איך לדבר עם התקשורת – צריך אסטרטגיה חכמה, שליטה בנרטיב, תדמית ציבורית חזקה וכלים מתקדמים שיביאו אותך לקהל הנכון בזמן הנכון.
      </p>
      <p>
        זו בדיוק התפיסה מאחורי מיכאל ימיני יחסי ציבור ודיגיטל – חברה שמחברת בין יחסי ציבור קלאסיים לבין טכנולוגיה חדשנית, בינה מלאכותית (AI) וניתוח
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {" "}מגמות מבוסס דאטה. באמצעות שילוב של אסטרטגיה תקשורתית, חיזוי מגמות וקמפיינים ממוקדים, אני מסייע לעצב שיח ציבורי, לבנות מוניטין יציב ולהניע תהליכים משמעותיים – בין אם זה בקמפיין פוליטי, בניהול משבר או במיתוג עסקי.
        </motion.span>
      </p>
      <p>
        הלקוחות שלי מגיעים מעולמות שונים – עסקים, פוליטיקה, ארגונים ומאבקים ציבוריים – אבל לכולם מטרה משותפת: לבלוט, להגדיל חשיפה, להשפיע על דעת הקהל ולבסס את עצמם כשחקנים מרכזיים בתחום שלהם.
      </p>
      <p>
        אני לא מאמין בגישות מיושנות. כל לקוח מקבל פתרון שמותאם לעולם החדש – כזה שמבוסס על חשיבה אסטרטגית, יצירתיות, הבנה עמוקה של כלי התקשורת ושליטה חכמה בדיגיטל.
      </p>
      <p>
        רוצה לבנות נוכחות תקשורתית שמייצרת השפעה? בוא נעצב יחד את הסיפור שלך – ונוודא שכולם ישמעו אותו.
      </p>
    </>
  )

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-silver-100"
      aria-labelledby="about-heading"
    >
      {/* Background fades in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-shirt-texture opacity-5" />
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-black-900/10 to-transparent" />
        <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-black-900/10 to-transparent" />
      </motion.div>

      <Container className="relative">
        <motion.div
          variants={containerVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 md:gap-20 items-center"
        >
          {/* Content fades in with stagger */}
          <div className="space-y-8 md:order-last">
            <motion.div variants={fadeInUp}>
              <h2 id="about-heading" className="text-3xl md:text-4xl font-montserrat font-light tracking-wide text-black-900">
                הסיפור שלי
              </h2>
              <div className="mt-2 h-px w-24 bg-gradient-to-l from-black-900/40 to-transparent" aria-hidden="true" />
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="space-y-6 text-lg text-black-900/80 font-inter font-light"
            >
              {isExpanded ? expandedContent : shortContent}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="group text-black-900 hover:text-black-700 font-montserrat text-sm tracking-wide flex items-center gap-2 transition-colors mt-4 relative after:absolute after:bottom-0 after:right-0 after:h-px after:w-full after:bg-black-900/20 hover:after:bg-black-900/40 after:transition-colors"
              >
                {isExpanded ? 'הצגו פחות' : 'קראו עוד'}
                <span className={`text-lg transition-transform ${!isExpanded ? 'animate-gentle-bounce' : ''}`}>
                  {isExpanded ? '↑' : '↓'}
                </span>
              </button>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="pt-6 space-y-8"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button 
                  href="/he/about"
                  className="group bg-transparent border border-black-900 text-black-900 px-8 py-4 font-montserrat font-medium tracking-wide uppercase text-sm transition-all duration-300
                    hover:bg-black-900 hover:text-silver-100"
                  aria-label="למידע נוסף על מיכאל ימיני"
                >
                  למידע נוסף
                  <span className="mr-2 text-lg group-hover:-translate-x-1 transition-transform" aria-hidden="true">←</span>
                </Button>
                <Button 
                  href="/he/contact"
                  className="bg-black-900 hover:bg-black-800 text-silver-100 px-8 py-4 font-montserrat font-medium tracking-wide uppercase text-sm transition-all duration-300
                    hover:shadow-lg hover:shadow-black-900/10 hover:-translate-y-0.5"
                  aria-label="צור קשר עם מיכאל ימיני"
                >
                  צור קשר
                  <span className="mr-2 text-lg group-hover:-translate-x-1 transition-transform" aria-hidden="true">←</span>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Image fades and slides in */}
          <motion.div 
            variants={fadeInUp}
            className="relative aspect-[4/5]"
          >
            <div className="relative w-full h-full">
              <motion.div 
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="relative w-full h-full rounded-lg overflow-hidden group"
              >
                <Image
                  src="/images/my_image.jpg"
                  alt="מיכאל ימיני - יועץ אסטרטגי ותקשורת דיגיטלית"
                  fill
                  className="object-cover object-top transition-transform duration-700 scale-105 group-hover:scale-100"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </motion.div>
              <div className="absolute bottom-0 left-0 right-0">
                <div className="bg-white/90 backdrop-blur-sm py-2 px-4">
                  <span className="text-xs text-black-900/80 font-inter italic">
                    צילום: רמי זרנגר
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
} 