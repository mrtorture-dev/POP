"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import Image from "next/image"

interface Bubble {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  image: string
}

const personImages = [
  "/professional-woman-diverse.png",
  "/professional-man.png",
  "/professional-woman-marketing.png",
  "/professional-man-influencer.png",
]

export default function FloatingBubbles() {
  const [bubbles, setBubbles] = useState<Bubble[]>([])
  const [isClient, setIsClient] = useState(false)
  const textBoundsRef = useRef<DOMRect | null>(null)
  const animationRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const initializeBubbles = useCallback(() => {
    if (typeof window === "undefined") return []

    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      size: 60 + Math.random() * 40,
      opacity: 0.8,
      image: personImages[Math.floor(Math.random() * personImages.length)],
    }))
  }, [])

  useEffect(() => {
    if (!isClient || typeof window === "undefined") return

    const initialBubbles = initializeBubbles()
    setBubbles(initialBubbles)

    const setupTimeout = setTimeout(() => {
      const textElement = document.querySelector("[data-main-text]")
      if (textElement) {
        textBoundsRef.current = textElement.getBoundingClientRect()
      }

      const animate = () => {
        setBubbles((prevBubbles) =>
          prevBubbles.map((bubble) => {
            let newX = bubble.x + bubble.vx
            let newY = bubble.y + bubble.vy
            let newVx = bubble.vx
            let newVy = bubble.vy
            let newOpacity = bubble.opacity

            // Bounce off walls
            if (newX <= 0 || newX >= window.innerWidth - bubble.size) {
              newVx = -newVx
              newX = Math.max(0, Math.min(window.innerWidth - bubble.size, newX))
            }
            if (newY <= 0 || newY >= window.innerHeight - bubble.size) {
              newVy = -newVy
              newY = Math.max(0, Math.min(window.innerHeight - bubble.size, newY))
            }

            if (textBoundsRef.current) {
              const bubbleCenter = {
                x: newX + bubble.size / 2,
                y: newY + bubble.size / 2,
              }

              if (
                bubbleCenter.x >= textBoundsRef.current.left &&
                bubbleCenter.x <= textBoundsRef.current.right &&
                bubbleCenter.y >= textBoundsRef.current.top &&
                bubbleCenter.y <= textBoundsRef.current.bottom
              ) {
                newOpacity = Math.max(0.1, newOpacity - 0.02)
              } else {
                newOpacity = Math.min(0.8, newOpacity + 0.01)
              }
            }

            return {
              ...bubble,
              x: newX,
              y: newY,
              vx: newVx,
              vy: newVy,
              opacity: newOpacity,
            }
          }),
        )
      }

      animationRef.current = setInterval(animate, 16)
    }, 100)

    return () => {
      clearTimeout(setupTimeout)
      if (animationRef.current) {
        clearInterval(animationRef.current)
      }
    }
  }, [isClient, initializeBubbles])

  if (!isClient) {
    return null
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full overflow-hidden border-2 border-white/20 backdrop-blur-sm transition-opacity duration-300"
          style={{
            left: bubble.x,
            top: bubble.y,
            width: bubble.size,
            height: bubble.size,
            opacity: bubble.opacity,
            background: "rgba(255, 255, 255, 0.1)",
          }}
        >
          <Image src={bubble.image || "/placeholder.svg"} alt="Person" fill className="object-cover" />
        </div>
      ))}
    </div>
  )
}
