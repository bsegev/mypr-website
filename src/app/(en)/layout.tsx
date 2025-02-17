import { Metadata } from 'next'
import { Header } from "@/components/layout/Header"
import { Footer } from '@/components/Footer'
import { CalendarProvider } from '@/lib/providers/CalendarProvider'
import '../globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://michaelyemini.com'),
  title: {
    default: 'Michael Yemini | Strategic PR & Digital Consulting',
    template: '%s | Michael Yemini PR'
  },
  description: 'Strategic PR consulting, crisis management, and digital communications for businesses and organizations in Israel and internationally.',
  keywords: ['PR Consulting', 'Strategic Communications', 'Crisis Management', 'Digital Strategy', 'Israel PR', 'Media Relations'],
  authors: [{ name: 'Michael Yemini' }],
  creator: 'Michael Yemini',
  openGraph: {
    type: 'website',
    url: 'https://michaelyemini.com',
    locale: 'en_US',
    siteName: 'Michael Yemini PR',
    title: 'Michael Yemini | Strategic PR & Digital Consulting',
    description: 'Transform your communications strategy with expert PR consulting, crisis management, and digital solutions. Based in Tel Aviv, serving clients worldwide.',
    images: [
      {
        url: 'https://michaelyemini.com/images/og_home-opt.png',
        secureUrl: 'https://michaelyemini.com/images/og_home-opt.png',
        width: 1200,
        height: 1200,
        alt: 'Michael Yemini PR & Digital Strategy',
        type: 'image/png'
      }
    ]
  }
}

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr">
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