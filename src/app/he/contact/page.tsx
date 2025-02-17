import { Metadata } from 'next'
import { ContactHero } from '@/components/sections/he/contact/ContactHero'
import { ContactMethods } from '@/components/sections/he/contact/ContactMethods'

export const metadata: Metadata = {
  title: 'צור קשר | מיכאל ימיני יחסי ציבור ודיגיטל',
  description: 'צרו קשר עם מיכאל ימיני לייעוץ מקצועי ביחסי ציבור, ניהול משברים ופתרונות תקשורת דיגיטלית. קבעו פגישת ייעוץ עוד היום. ממוקם בתל אביב, פועל בינלאומית.',
  openGraph: {
    title: 'צור קשר | מיכאל ימיני יחסי ציבור ודיגיטל',
    description: 'צרו קשר עם מיכאל ימיני לייעוץ אסטרטגי ביחסי ציבור, ניהול משברים ותקשורת דיגיטלית. קבעו פגישת ייעוץ לשדרוג אסטרטגיית התקשורת שלכם.',
    type: 'website',
    url: 'https://michaelyemini.com/he/contact',
    locale: 'he_IL',
    siteName: 'מיכאל ימיני יחסי ציבור',
    images: [
      {
        url: 'https://michaelyemini.com/images/og_contact-opt.png',
        secureUrl: 'https://michaelyemini.com/images/og_contact-opt.png',
        width: 1200,
        height: 1200,
        alt: 'צור קשר - מיכאל ימיני יחסי ציבור ודיגיטל',
        type: 'image/png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'צור קשר | מיכאל ימיני יחסי ציבור ודיגיטל',
    description: 'צרו קשר עם מיכאל ימיני לייעוץ אסטרטגי ביחסי ציבור ותקשורת דיגיטלית.',
    images: ['https://michaelyemini.com/images/og_contact-opt.png'],
  },
  alternates: {
    canonical: 'https://michaelyemini.com/he/contact'
  },
  keywords: [
    'צור קשר יועץ יחסי ציבור',
    'קביעת פגישת ייעוץ',
    'שירותי יחסי ציבור',
    'מומחה תקשורת',
    'ייעוץ ניהול משברים',
    'ייעוץ אסטרטגיה דיגיטלית',
    'יועץ יחסי ציבור תל אביב',
    'שירותי יחסי ציבור בישראל',
    'תקשורת אסטרטגית',
    'יחסי מדיה'
  ]
}

export default function ContactPage() {
  return (
    <main>
      <article>
        <ContactHero />
        <ContactMethods />
      </article>
    </main>
  );
} 