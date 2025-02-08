import { Metadata } from 'next'
import { ServicesHero } from '@/components/sections/services/ServicesHero'
import { ServicesList } from '@/components/sections/services/ServicesList'
import { FeaturedService } from '@/components/sections/services/FeaturedService'
import { ProcessSection } from '@/components/sections/services/ProcessSection'
import { ServicesContact } from '@/components/sections/services/ServicesContact'

export const metadata: Metadata = {
  title: 'Services | Strategic PR & Communications Solutions',
  description: 'Comprehensive PR services including crisis management, media relations, digital strategy, and Israel representation. Expert consulting for businesses and organizations worldwide.',
  openGraph: {
    title: 'PR & Communications Services | Michael Yemini',
    description: 'Strategic PR services, crisis management, and digital communications solutions. Expert consulting for businesses and organizations in Israel and worldwide.',
    type: 'website',
    url: 'https://mypr-website.vercel.app/services',
    locale: 'en_US',
    siteName: 'Michael Yemini PR',
    images: [
      {
        url: 'https://mypr-website.vercel.app/images/og_services.png',
        secureUrl: 'https://mypr-website.vercel.app/images/og_services.png',
        width: 1200,
        height: 1200,
        alt: 'PR & Communications Services by Michael Yemini',
        type: 'image/png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PR & Communications Services | Michael Yemini',
    description: 'Strategic PR services, crisis management, and digital communications solutions.',
    images: ['https://mypr-website.vercel.app/images/og_services.png'],
  },
  alternates: {
    canonical: 'https://mypr-website.vercel.app/services'
  },
  keywords: [
    'PR Services',
    'Communications Services',
    'Crisis Management',
    'Media Relations',
    'Digital Strategy',
    'Content Creation',
    'Israel Representation',
    'Strategic Communications',
    'Social Media Management',
    'Brand Storytelling',
    'Public Relations',
    'PR Consulting'
  ]
}

export default function ServicesPage() {
  return (
    <main>
      <article>
        <ServicesHero />
        <FeaturedService />
        <ServicesList />
        <ProcessSection />
        <ServicesContact />
      </article>
    </main>
  )
} 