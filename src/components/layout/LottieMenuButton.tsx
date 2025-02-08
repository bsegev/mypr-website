"use client"

import dynamic from 'next/dynamic'
import { useRef, useEffect } from 'react'

const Lottie = dynamic(() => import('lottie-react'), { ssr: false })
import menuButtonAnimation from '@/../../public/lotties/menu-button.json'

export function LottieMenuButton({ isOpen }: { isOpen: boolean }) {
  const lottieRef = useRef<any>(null)

  useEffect(() => {
    if (isOpen) {
      lottieRef.current?.playSegments([0, 54], true)
    } else {
      lottieRef.current?.playSegments([54, 0], true)
    }
  }, [isOpen])

  return (
    <div className="w-6 h-6">
      <Lottie
        lottieRef={lottieRef}
        animationData={menuButtonAnimation}
        loop={false}
        autoplay={false}
        className="w-full h-full [&_path]:!stroke-current"
      />
    </div>
  )
} 