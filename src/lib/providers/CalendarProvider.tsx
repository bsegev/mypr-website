"use client"

import { createContext, useContext, useEffect, useState } from 'react'
import { getCalApi } from "@calcom/embed-react"

type CalendarContextType = {
  isReady: boolean;
  openScheduler: () => Promise<void>;
}

const CalendarContext = createContext<CalendarContextType | null>(null)

export function CalendarProvider({ children }: { children: React.ReactNode }) {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi()
      cal("ui", { theme: "light" })
      cal("preload", {
        calLink: "michaelyemini/45min",
        options: { prerenderIframe: true }
      })
      setIsReady(true)
    })()
  }, [])

  const openScheduler = async () => {
    const cal = await getCalApi()
    cal("modal", {
      calLink: "michaelyemini/45min",
      config: {
        layout: "month_view",
        theme: "light"
      }
    })
  }

  return (
    <CalendarContext.Provider value={{ isReady, openScheduler }}>
      {children}
    </CalendarContext.Provider>
  )
}

export const useCalendar = () => {
  const context = useContext(CalendarContext)
  if (!context) {
    throw new Error('useCalendar must be used within a CalendarProvider')
  }
  return context
} 