"use client"

import React from 'react'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black-950">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6">
            <h1 className="text-display-sm md:text-display-md lg:text-display-lg font-montserrat font-light tracking-tight text-silver-100 uppercase">
              404
            </h1>
            <h2 className="text-h2 md:text-h1 font-montserrat font-light text-silver-400">
              Page Not Found
            </h2>
            <p className="text-body md:text-body-lg text-silver-400 max-w-2xl mx-auto font-inter font-light">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="pt-8">
              <Button
                href="/"
                className="bg-silver-100 hover:bg-silver-200 text-black-950 font-montserrat font-medium tracking-wide uppercase text-sm transition-all duration-300
                  hover:shadow-lg hover:shadow-silver-500/10 hover:-translate-y-0.5"
              >
                Return Home
                <span className="ml-2 text-lg group-hover:translate-x-1 transition-transform">→</span>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
} 