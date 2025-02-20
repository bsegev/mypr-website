import { Metadata } from 'next'
import { AboutHero } from '@/components/sections/he/about/AboutHero'
import { AboutIntro } from '@/components/sections/he/about/AboutIntro'
import { AboutValues } from '@/components/sections/he/about/AboutValues'
import { AboutContact } from '@/components/sections/he/about/AboutContact'

export const metadata: Metadata = {
  title: 'אודות | מיכאל ימיני יחסי ציבור ודיגיטל',
  description: 'אסטרטגיה. תקשורת. השפעה. מובילים מהלכים תקשורתיים חכמים שמייצרים השפעה אמיתית בזירה הציבורית, העסקית והפוליטית.',
  openGraph: {
    title: 'אודות | מיכאל ימיני יחסי ציבור ודיגיטל',
    description: 'אסטרטגיה. תקשורת. השפעה. מובילים מהלכים תקשורתיים חכמים שמייצרים השפעה אמיתית בזירה הציבורית, העסקית והפוליטית.',
    type: 'website',
    url: 'https://michaelyemini.com/he/about',
    locale: 'he_IL',
    siteName: 'מיכאל ימיני יחסי ציבור',
    images: [
      {
        url: 'https://michaelyemini.com/images/og_about-opt.png',
        secureUrl: 'https://michaelyemini.com/images/og_about-opt.png',
        width: 1200,
        height: 1200,
        alt: 'אודות מיכאל ימיני - יחסי ציבור ודיגיטל',
        type: 'image/png'
      }
    ]
  },
  alternates: {
    canonical: 'https://michaelyemini.com/he/about'
  },
  keywords: [
    'מיכאל ימיני',
    'יחסי ציבור',
    'תקשורת אסטרטגית',
    'ניהול משברים',
    'אסטרטגיה דיגיטלית',
    'יחסי ציבור בישראל',
    'יועץ תקשורת',
    'יחסי מדיה',
    'מומחה יחסי ציבור',
    'ייעוץ תקשורת',
    'קמפיינים פוליטיים',
    'מיתוג עסקי'
  ]
}

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutIntro />
      <AboutValues />
      <AboutContact />
    </main>
  )
} 