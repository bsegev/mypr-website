"use client"

import { Header } from "@/components/layout/Header"
import { Footer } from '@/components/Footer'
import { CalendarProvider } from '@/lib/providers/CalendarProvider'

export default function EnglishClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <CalendarProvider>
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </CalendarProvider>
  )
} 