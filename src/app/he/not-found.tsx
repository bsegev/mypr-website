"use client"

import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <main className="flex-grow">
      <Container className="flex min-h-[70vh] items-center justify-center">
        <div className="text-center">
          <h1 className="text-display-sm md:text-display-md font-montserrat text-silver-100 mb-6">
            404
          </h1>
          <p className="text-xl text-silver-400 mb-8">
            Page not found
          </p>
          <Button href="/" variant="outline">
            Return Home
          </Button>
        </div>
      </Container>
    </main>
  )
} 