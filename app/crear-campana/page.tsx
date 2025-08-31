"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CampaignForm } from "@/components/campaign-form"
import Link from "next/link"

export default function CrearCampanaPage() {
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-foreground">UGC_</span>
              <span className="text-2xl font-bold text-primary">CREATORS</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/#brands" className="text-foreground hover:text-primary transition-colors">
                Brands
              </Link>
              <Link href="/#creadores" className="text-foreground hover:text-primary transition-colors">
                Creadores
              </Link>
              <Link href="/#blog" className="text-foreground hover:text-primary transition-colors">
                Blog
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-balance">
            Crea tu campaña con <span className="text-primary">content creators</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Conecta con miles de creadores especializados en crypto y trading para amplificar tu marca
          </p>

          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => setIsFormOpen(true)}
          >
            Crear campaña
          </Button>
        </div>
      </section>

      <CampaignForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  )
}
