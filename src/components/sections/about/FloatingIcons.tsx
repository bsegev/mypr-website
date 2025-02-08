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

const icons = [
  // Left Side Icons
  {
    id: 1,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    label: "Crisis Management"
  },
  {
    id: 2,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    label: "Media Relations"
  },
  {
    id: 3,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
    label: "Public Speaking"
  },

  // Right Side Icons
  {
    id: 4,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    label: "Digital Strategy"
  },
  {
    id: 5,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    label: "Brand Strategy"
  },
  {
    id: 6,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    label: "Content Strategy"
  }
]

export function FloatingIcons() {
  const [floatingIcons, setFloatingIcons] = useState<Icon[]>([])
  const [containerDimensions, setContainerDimensions] = useState({ width: 0, height: 0 })
  const [isMobile, setIsMobile] = useState(true) // Start with mobile true to prevent flash

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)
      if (!mobile) {
        setContainerDimensions({
          width: window.innerWidth - 200,
          height: window.innerHeight - 200
        })
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (containerDimensions.width === 0 || isMobile) return

    const margin = 50
    const contentZone = {
      left: containerDimensions.width * 0.25,
      right: containerDimensions.width * 0.75,
      top: containerDimensions.height * 0.15,
      bottom: containerDimensions.height * 0.75
    }

    const zones = [
      { 
        x: margin + 80,
        y: contentZone.top + 100,
        side: 'left' as const
      },
      { 
        x: margin + 120,
        y: (contentZone.top + contentZone.bottom) / 2,
        side: 'left' as const
      },
      { 
        x: margin + 80,
        y: contentZone.bottom - 100,
        side: 'left' as const
      },
      { 
        x: containerDimensions.width - margin - 130,
        y: contentZone.top + 100,
        side: 'right' as const
      },
      { 
        x: containerDimensions.width - margin - 170,
        y: (contentZone.top + contentZone.bottom) / 2,
        side: 'right' as const
      },
      { 
        x: containerDimensions.width - margin - 130,
        y: contentZone.bottom - 100,
        side: 'right' as const
      }
    ]

    const initializedIcons = icons.map((icon, index) => ({
      ...icon,
      position: zones[index] || zones[0],
      side: zones[index]?.side || 'left'
    }))

    setFloatingIcons(initializedIcons)
  }, [containerDimensions, isMobile])

  // Don't render anything on mobile
  if (isMobile) return null

  return (
    <div className="absolute inset-0 overflow-hidden hidden md:block">
      <div className="absolute inset-[100px]">
        {floatingIcons.map((item) => (
          <FloatingIcon 
            key={item.id} 
            {...item} 
            containerDimensions={containerDimensions}
          />
        ))}
      </div>
    </div>
  )
}

function FloatingIcon({ 
  id, 
  icon, 
  label, 
  position, 
  side,
  containerDimensions
}: Icon & { 
  containerDimensions: { width: number; height: number };
  side: 'left' | 'right';
}) {
  const controls = useAnimationControls()
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (containerDimensions.width > 0) {
      const floatRange = 20
      const xOffset = side === 'left' ? floatRange : -floatRange

      controls.start({
        x: [
          position.x,
          position.x + xOffset,
          position.x
        ],
        y: [
          position.y,
          position.y + floatRange,
          position.y
        ],
        transition: {
          duration: 8 + (id % 3),
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }
      })
    }
  }, [controls, position, containerDimensions, id, side])

  return (
    <motion.div
      className="absolute pointer-events-auto"
      animate={controls}
      style={{ x: position.x, y: position.y }}
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
      >
        <div className="relative">
          {icon}
        </div>
        
        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          className={`absolute whitespace-nowrap px-3 py-1.5
            bg-black-900/95 text-silver-100 text-sm font-montserrat rounded-md
            border border-silver-400/10
            ${position.y > containerDimensions.height / 2 ? 'bottom-full mb-3' : 'top-full mt-3'}
            ${side === 'right' ? 'right-0' : 'left-0'}`}
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
    </motion.div>
  )
} 