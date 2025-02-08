import { Container } from '@/components/ui/Container'
import Link from 'next/link'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/michaelyemini/',
      icon: (props: React.ComponentProps<'svg'>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
    },
  ],
}

export function Footer() {
  return (
    <footer className="bg-black-950" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <Container>
        <div className="py-12 md:py-16">
          <div className="flex flex-col items-center space-y-8">
            {/* Logo */}
            <Link 
              href="/"
              className="text-2xl tracking-[0.2em] font-light text-silver-100 hover:text-silver-200 transition-colors"
            >
              MYPR
            </Link>

            {/* Navigation */}
            <nav className="flex flex-wrap justify-center gap-6 md:gap-8" aria-label="Footer">
              {navigation.main.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-montserrat text-silver-400 hover:text-silver-200 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Social Links */}
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-silver-400 hover:text-silver-200 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>

            {/* Contact Info */}
            <div className="text-center">
              <address className="not-italic">
                <p className="text-sm text-silver-400">Based in Tel Aviv, Israel</p>
                <p className="text-sm text-silver-400">(Operating Internationally)</p>
              </address>
            </div>

            {/* Copyright */}
            <p className="text-sm text-silver-400">
              &copy; {new Date().getFullYear()} MYPR. All rights reserved.
            </p>
          </div>
        </div>

        {/* Top Accent */}
        <div className="h-px bg-gradient-to-r from-transparent via-silver-400/20 to-transparent" aria-hidden="true" />
        <div className="h-px mt-2 bg-gradient-to-r from-transparent via-silver-400/10 to-transparent" aria-hidden="true" />
      </Container>
    </footer>
  )
} 