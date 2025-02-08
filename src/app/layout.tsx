import { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import { Header } from "@/components/layout/Header";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })

export const metadata: Metadata = {
  metadataBase: new URL('https://mypr-website.vercel.app'),
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
    locale: 'en_US',
    siteName: 'Michael Yemini PR',
    images: [
      {
        url: 'https://mypr-website.vercel.app/images/og_home.png',
        width: 1200,
        height: 1200,
        alt: 'Michael Yemini PR & Digital Strategy'
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
