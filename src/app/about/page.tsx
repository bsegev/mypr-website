import { Metadata } from 'next'
import { AboutHero } from '@/components/sections/about/AboutHero'
import { AboutIntro } from '@/components/sections/about/AboutIntro'
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
    url: 'https://michaelyemini.com/about',
    locale: 'en_US',
    siteName: 'Michael Yemini PR',
    images: [
      {
        url: 'https://michaelyemini.com/images/og_about_2024.png',
        secureUrl: 'https://michaelyemini.com/images/og_about_2024.png',
        width: 1200,
        height: 1200,
        alt: 'About Michael Yemini - PR & Digital Strategy',
        type: 'image/png'
      }
    ]
  },
  alternates: {
    canonical: 'https://michaelyemini.com/about'
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
      <AboutHero />
      <AboutIntro />
      <AboutStory />
      <AboutValues />
      <AboutExperience />
      <AboutContact />
    </main>
  )
} 