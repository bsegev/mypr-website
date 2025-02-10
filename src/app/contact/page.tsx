import { Metadata } from 'next'
import { ContactHero } from '@/components/sections/contact/ContactHero'
import { ContactMethods } from '@/components/sections/contact/ContactMethods'

export const metadata: Metadata = {
  title: 'Contact | Michael Yemini PR & Digital Strategy',
  description: 'Get in touch with Michael Yemini for expert PR consulting, crisis management, and digital communications solutions. Schedule a consultation today. Based in Tel Aviv, operating internationally.',
  openGraph: {
    title: 'Contact Michael Yemini | PR & Digital Strategy',
    description: 'Connect with Michael Yemini for strategic PR consulting, crisis management, and digital communications. Schedule a consultation to transform your communications strategy.',
    type: 'website',
    url: 'https://michaelyemini.com/contact',
    locale: 'en_US',
    siteName: 'Michael Yemini PR',
    images: [
      {
        url: 'https://michaelyemini.com/images/og_contact_2024.png',
        secureUrl: 'https://michaelyemini.com/images/og_contact_2024.png',
        width: 1200,
        height: 1200,
        alt: 'Contact Michael Yemini - PR & Digital Strategy',
        type: 'image/png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Michael Yemini | PR & Digital Strategy',
    description: 'Connect with Michael Yemini for strategic PR consulting and digital communications.',
    images: ['https://michaelyemini.com/images/og_contact_2024.png'],
  },
  alternates: {
    canonical: 'https://michaelyemini.com/contact'
  },
  keywords: [
    'Contact PR Consultant',
    'Schedule Consultation',
    'PR Services Contact',
    'Communications Expert',
    'Crisis Management Help',
    'Digital Strategy Consulting',
    'Tel Aviv PR Contact',
    'Israel PR Services',
    'Strategic Communications',
    'Media Relations Contact'
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