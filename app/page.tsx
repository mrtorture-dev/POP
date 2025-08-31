"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import TalentForm from "@/components/talent-form"
import ProjectsList from "@/components/projects-list"
import FloatingBubbles from "@/components/floating-bubbles"

export default function HomePage() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isProjectsOpen, setIsProjectsOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2C003E] via-[#6A0DAD] via-[#D63384] to-[#FF8A3D]">
      <FloatingBubbles />

      <header className="py-6 px-4">
        <div className="container mx-auto max-w-7xl">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2031%20ago%202025%2C%2001_45_11-7hPKL9Fv4lBmDfedLDcYjMJYZMBkOG.png"
                alt="POP - Proof of Talent Hub"
                className="h-48 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center space-x-12">
              <Link href="/brands" className="text-white hover:text-orange-300 transition-colors font-medium">
                Brands
              </Link>
              <Link href="#creadores" className="text-white hover:text-orange-300 transition-colors font-medium">
                Talento
              </Link>
              <Link href="/blog" className="text-white hover:text-orange-300 transition-colors font-medium">
                Blog
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-center min-h-[500px]">
            <div className="text-center space-y-8">
              <h1 data-main-text className="text-5xl md:text-6xl font-bold text-white text-balance leading-tight">
                Conecta con el mejor <span className="italic">talento</span>.
              </h1>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-black px-8 py-3 rounded-full text-lg font-medium"
                  onClick={() => setIsFormOpen(true)}
                >
                  Busco talento
                </Button>
                <Button
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-black px-8 py-3 rounded-full text-lg font-medium"
                  onClick={() => setIsProjectsOpen(true)}
                >
                  Soy talento
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TalentForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      <ProjectsList isOpen={isProjectsOpen} onClose={() => setIsProjectsOpen(false)} />
    </div>
  )
}
