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
    url: 'https://mypr-website.vercel.app/contact',
    locale: 'en_US',
    siteName: 'Michael Yemini PR',
    images: [
      {
        url: 'https://mypr-website.vercel.app/images/og_contact.png',
        secureUrl: 'https://mypr-website.vercel.app/images/og_contact.png',
        width: 1200,
        height: 1200,
        alt: 'Contact Michael Yemini - PR & Digital Strategy Consultant',
        type: 'image/png'
      }
    ]
  },
  alternates: {
    canonical: 'https://mypr.co.il/contact'
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
    <>
      <head>
        <meta property="og:title" content="Contact Michael Yemini | PR & Digital Strategy" />
        <meta property="og:description" content="Connect with Michael Yemini for strategic PR consulting, crisis management, and digital communications. Schedule a consultation to transform your communications strategy." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mypr-website.vercel.app/contact" />
        <meta property="og:image" content="https://mypr-website.vercel.app/images/og_contact.png" />
        <meta property="og:image:secure_url" content="https://mypr-website.vercel.app/images/og_contact.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1200" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:site_name" content="Michael Yemini PR" />
        <meta property="og:locale" content="en_US" />
      </head>
      <main>
        <article>
          <ContactHero />
          <ContactMethods />
        </article>
      </main>
    </>
  );
} 