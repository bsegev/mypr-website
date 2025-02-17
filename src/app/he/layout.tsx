import { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import '../globals.css'
import { Header } from "@/components/layout/he/Header";
import { Footer } from '@/components/layout/he/Footer'
import { CalendarProvider } from '@/lib/providers/CalendarProvider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

export const metadata: Metadata = {
  metadataBase: new URL('https://michaelyemini.com'),
  title: {
    default: 'מיכאל ימיני | ייעוץ אסטרטגי ותקשורת דיגיטלית',
    template: '%s | מיכאל ימיני יחסי ציבור'
  },
  description: 'ייעוץ אסטרטגי ליחסי ציבור, ניהול משברים ותקשורת דיגיטלית לעסקים וארגונים בישראל ובעולם.',
  keywords: ['ייעוץ יחסי ציבור', 'תקשורת אסטרטגית', 'ניהול משברים', 'אסטרטגיה דיגיטלית', 'יחסי ציבור בישראל', 'יחסי מדיה'],
  authors: [{ name: 'מיכאל ימיני' }],
  creator: 'מיכאל ימיני',
  openGraph: {
    type: 'website',
    url: 'https://michaelyemini.com/he',
    locale: 'he_IL',
    siteName: 'מיכאל ימיני יחסי ציבור',
    title: 'מיכאל ימיני | ייעוץ אסטרטגי ותקשורת דיגיטלית',
    description: 'שדרגו את אסטרטגיית התקשורת שלכם עם ייעוץ מקצועי ליחסי ציבור, ניהול משברים ופתרונות דיגיטליים. ממוקם בתל אביב, משרת לקוחות בכל העולם.',
    images: [
      {
        url: 'https://michaelyemini.com/images/og_home-opt.png',
        secureUrl: 'https://michaelyemini.com/images/og_home-opt.png',
        width: 1200,
        height: 1200,
        alt: 'מיכאל ימיני יחסי ציבור ואסטרטגיה דיגיטלית',
        type: 'image/png'
      }
    ]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  }
}

export default function HebrewLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl" className={`${inter.variable} ${montserrat.variable} h-full antialiased`}>
      <head />
      <body className="flex min-h-full flex-col bg-black-950">
        <CalendarProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </CalendarProvider>
      </body>
    </html>
  )
}
