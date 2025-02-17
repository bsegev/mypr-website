"use client"

import { motion, useAnimationControls } from 'framer-motion'
import { useEffect, useState } from 'react'
import React from 'react'

type Icon = {
  id: number
  icon: React.ReactNode
  label: string
  position: { x: number; y: number }
  side: 'left' | 'right'
}

const icons: Icon[] = [
  // Right Side Icons (in RTL these appear on the right)
  {
    id: 1,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    label: "ניהול משברים",
    position: { x: 85, y: 20 },
    side: 'right'
  },
  {
    id: 2,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    label: "יחסי מדיה",
    position: { x: 92, y: 50 },
    side: 'right'
  },
  {
    id: 3,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    label: "תקשורת דיגיטלית",
    position: { x: 82, y: 80 },
    side: 'right'
  },

  // Left Side Icons (in RTL these appear on the left)
  {
    id: 4,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    label: "מיתוג עסקי",
    position: { x: 15, y: 20 },
    side: 'left'
  },
  {
    id: 5,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    label: "אסטרטגיה דיגיטלית",
    position: { x: 8, y: 50 },
    side: 'left'
  },
  {
    id: 6,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    label: "תוכן אסטרטגי",
    position: { x: 18, y: 80 },
    side: 'left'
  }
]

export function FloatingIcons() {
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (isMobile) return null

  return (
    <div className="absolute inset-0 overflow-hidden hidden md:block" dir="rtl">
      <div className="relative max-w-7xl h-full mx-auto">
        {icons.map((icon) => (
          <motion.div
            key={icon.id}
            className="absolute"
            style={{
              left: `${icon.position.x}%`,
              top: `${icon.position.y}%`
            }}
          >
            <FloatingIcon
              {...icon}
              containerDimensions={{ width: 1200, height: 600 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function FloatingIcon({ 
  id, 
  icon, 
  label, 
  side,
  containerDimensions
}: Icon & { 
  containerDimensions: { width: number; height: number };
  side: 'left' | 'right';
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="pointer-events-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className={`group relative p-4 rounded-full backdrop-blur-sm transition-all duration-300
          cursor-pointer
          ${isHovered 
            ? 'bg-black-800/90 text-silver-100 ring-2 ring-silver-400/30 scale-125' 
            : 'bg-black-900/50 text-silver-400 hover:bg-black-800/70'
          }`}
        animate={{
          y: [0, 10, 0],
          transition: {
            duration: 4 + (id % 3),
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
          }
        }}
      >
        <div className="relative">
          {icon}
        </div>

        {/* Tooltip - Adjusted for RTL layout */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          className={`absolute whitespace-nowrap px-3 py-1.5
            bg-black-900/95 text-silver-100 text-sm font-montserrat rounded-md
            border border-silver-400/10
            ${side === 'left' ? 'right-full mr-3' : 'left-full ml-3'}`}
        >
          {label}
        </motion.div>

        {/* Glow effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.6 : 0 }}
          className="absolute inset-0 rounded-full bg-silver-400/20 blur-xl -z-10"
        />
      </motion.div>
    </div>
  )
} 