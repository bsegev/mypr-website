import { Metadata } from 'next'
import { ServicesList } from '@/components/sections/he/services/ServicesList'
import { ProcessSection } from '@/components/sections/he/services/ProcessSection'
import { ServicesContact } from '@/components/sections/he/services/ServicesContact'

export const metadata: Metadata = {
  title: 'שירותים | ייעוץ אסטרטגי ותקשורת דיגיטלית',
  description: 'שירותי יחסי ציבור מקיפים הכוללים ניהול משברים, יחסי מדיה, אסטרטגיה דיגיטלית וייצוג בישראל. ייעוץ מקצועי לעסקים וארגונים.',
  openGraph: {
    title: 'שירותי יחסי ציבור ותקשורת | מיכאל ימיני',
    description: 'שירותי יחסי ציבור אסטרטגיים, ניהול משברים ופתרונות תקשורת דיגיטלית. ייעוץ מקצועי לעסקים וארגונים.',
    type: 'website',
    url: 'https://michaelyemini.com/he/services',
    locale: 'he_IL',
    siteName: 'מיכאל ימיני יחסי ציבור',
    images: [
      {
        url: 'https://michaelyemini.com/images/og_services-opt.png',
        secureUrl: 'https://michaelyemini.com/images/og_services-opt.png',
        width: 1200,
        height: 1200,
        alt: 'שירותי יחסי ציבור ואסטרטגיה דיגיטלית - מיכאל ימיני',
        type: 'image/png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'שירותי יחסי ציבור ותקשורת | מיכאל ימיני',
    description: 'שירותי יחסי ציבור אסטרטגיים, ניהול משברים ופתרונות תקשורת דיגיטלית.',
    images: ['https://michaelyemini.com/images/og_services-opt.png'],
  },
  alternates: {
    canonical: 'https://michaelyemini.com/he/services'
  },
  keywords: [
    'יחסי ציבור',
    'שירותי תקשורת',
    'ניהול משברים',
    'יחסי מדיה',
    'אסטרטגיה דיגיטלית',
    'יצירת תוכן',
    'ייצוג בישראל',
    'תקשורת אסטרטגית',
    'ניהול מדיה חברתית',
    'מיתוג עסקי',
    'יחסי ציבור',
    'ייעוץ תקשורת'
  ]
}

export default function ServicesPage() {
  return (
    <main>
      <article>
        <ServicesList />
        <ProcessSection />
        <ServicesContact />
      </article>
    </main>
  )
} 