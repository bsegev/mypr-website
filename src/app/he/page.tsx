import { Metadata } from 'next'
import Hero from "@/components/sections/he/Hero";
import dynamic from 'next/dynamic'
import About from "@/components/sections/he/About";
import Contact from "@/components/sections/he/Contact";

const Features = dynamic(() => import('@/components/sections/he/Features'), {
  ssr: true,
  loading: () => <div className="h-screen" /> // Placeholder while loading
})

export const metadata: Metadata = {
  title: 'מיכאל ימיני | ייעוץ אסטרטגי ותקשורת דיגיטלית',
  description: 'ייעוץ מקצועי ליחסי ציבור, ניהול משברים ואסטרטגיה דיגיטלית בישראל ובעולם. שדרגו את התקשורת שלכם עם מומחיות מוכחת ביחסי מדיה ומסרים אסטרטגיים.',
  openGraph: {
    title: 'מיכאל ימיני | ייעוץ אסטרטגי ותקשורת דיגיטלית',
    description: 'שדרגו את אסטרטגיית התקשורת שלכם עם ייעוץ מקצועי ליחסי ציבור, ניהול משברים ופתרונות דיגיטליים. ממוקם בתל אביב, משרת לקוחות בכל העולם.',
    type: 'website',
    locale: 'he_IL',
    siteName: 'מיכאל ימיני יחסי ציבור',
    images: [
      {
        url: 'https://michaelyemini.com/images/og_home-opt.png',
        secureUrl: 'https://michaelyemini.com/images/og_home-opt.png',
        width: 1200,
        height: 1200,
        alt: 'מיכאל ימיני יחסי ציבור ואסטרטגיה דיגיטלית',
        type: 'image/png'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'מיכאל ימיני | ייעוץ אסטרטגי ותקשורת דיגיטלית',
    description: 'שדרגו את אסטרטגיית התקשורת שלכם עם ייעוץ מקצועי ופתרונות דיגיטליים.',
    images: ['https://michaelyemini.com/images/og_home-opt.png'],
  },
  alternates: {
    canonical: 'https://michaelyemini.com/he'
  },
  keywords: [
    'ייעוץ יחסי ציבור',
    'תקשורת אסטרטגית',
    'ניהול משברים',
    'אסטרטגיה דיגיטלית',
    'יחסי ציבור בישראל',
    'יחסי מדיה',
    'מומחה יחסי ציבור',
    'ייעוץ תקשורת',
    'יועץ יחסי ציבור תל אביב',
    'יחסי ציבור בינלאומיים'
  ]
}

export default function Home() {
  return (
    <main>
      <article>
        <Hero />
        <Features />
        <About />
        <Contact />
      </article>
    </main>
  );
}
