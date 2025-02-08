import { Metadata } from 'next'
import Hero from "@/components/sections/Hero";
import dynamic from 'next/dynamic'
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

const Features = dynamic(() => import('@/components/sections/Features'), {
  ssr: true,
  loading: () => <div className="h-screen" /> // Placeholder while loading
})

export const metadata: Metadata = {
  title: 'Michael Yemini | Strategic PR & Digital Consulting',
  description: 'Expert PR consulting, crisis management, and digital strategy services in Israel and internationally. Transform your communications with proven expertise in media relations and strategic messaging.',
  openGraph: {
    title: 'Michael Yemini | Strategic PR & Digital Consulting',
    description: 'Transform your communications strategy with expert PR consulting, crisis management, and digital solutions. Based in Tel Aviv, serving clients worldwide.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Michael Yemini PR',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Michael Yemini PR & Digital Strategy'
      }
    ],
  },
  alternates: {
    canonical: 'https://mypr.co.il'
  },
  keywords: [
    'PR Consulting',
    'Strategic Communications',
    'Crisis Management',
    'Digital Strategy',
    'Israel PR',
    'Media Relations',
    'Public Relations Expert',
    'Communications Consulting',
    'Tel Aviv PR Consultant',
    'International PR'
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
