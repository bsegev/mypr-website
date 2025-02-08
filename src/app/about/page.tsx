import { Metadata } from 'next'
import { AboutHero } from '@/components/sections/about/AboutHero'
import { AboutStory } from '@/components/sections/about/AboutStory'
import { AboutValues } from '@/components/sections/about/AboutValues'
import { AboutExperience } from '@/components/sections/about/AboutExperience'
import { AboutContact } from '@/components/sections/about/AboutContact'

export const metadata: Metadata = {
  title: 'About Michael Yemini | Strategic PR & Communications Expert',
  description: 'Meet Michael Yemini, a leading PR consultant with extensive experience in strategic communications, crisis management, and digital strategy. Proven track record serving clients in Israel and internationally.',
  openGraph: {
    title: 'About Michael Yemini | PR & Communications Expert',
    description: 'Learn about Michael Yemini\'s proven approach to strategic PR, crisis management, and digital communications. Expertise in Israeli and international markets.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Michael Yemini PR',
    images: [
      {
        url: 'https://mypr-website.vercel.app/images/og_about.png',
        width: 1200,
        height: 1200,
        alt: 'Michael Yemini - PR & Communications Expert'
      }
    ]
  },
  alternates: {
    canonical: 'https://mypr.co.il/about'
  },
  keywords: [
    'Michael Yemini',
    'PR Consultant',
    'Strategic Communications',
    'Crisis Management',
    'Digital Strategy',
    'Israel PR',
    'International PR',
    'Media Relations',
    'Public Relations Expert',
    'Tel Aviv PR Consultant',
    'Communications Background',
    'PR Experience'
  ]
}

export default function AboutPage() {
  return (
    <main>
      <article>
        <AboutHero />
        <AboutStory />
        <AboutValues />
        <AboutExperience />
        <AboutContact />
      </article>
    </main>
  )
} 