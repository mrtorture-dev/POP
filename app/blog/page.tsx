"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Mail, CheckCircle } from "lucide-react"

export default function BlogPage() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2C003E] via-[#6A0DAD] via-[#D63384] to-[#FF8A3D]">
      {/* Header */}
      <header className="py-6 px-4">
        <div className="container mx-auto max-w-7xl">
          <nav className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-1">
              <span className="text-2xl font-bold text-white">POP</span>
            </Link>
            <div className="hidden md:flex items-center space-x-12">
              <Link href="/brands" className="text-white hover:text-orange-300 transition-colors font-medium">
                Brands
              </Link>
              <Link href="/" className="text-white hover:text-orange-300 transition-colors font-medium">
                Talento
              </Link>
              <Link href="/blog" className="text-orange-300 font-medium">
                Blog
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <section className="py-20 px-4 flex-1 flex items-center justify-center">
        <div className="container mx-auto max-w-2xl text-center">
          {!isSubscribed ? (
            <>
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-8">
                <Mail className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">Newsletter POP</h1>
              <p className="text-xl text-white/90 mb-8 text-pretty">
                Recibe notificaciones exclusivas sobre nuevas campañas de búsqueda de talento. Sé el primero en conocer
                las mejores oportunidades antes que nadie.
              </p>

              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
                <Input
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button type="submit" className="bg-white text-purple-900 hover:bg-white/90 px-8 font-semibold">
                  Suscribirse al Newsletter
                </Button>
              </form>

              <p className="text-sm text-white/70">Sin spam, cancela cuando quieras.</p>
            </>
          ) : (
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-6">
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">¡Bienvenido a la comunidad!</h2>
              <p className="text-lg text-white/90">
                Revisa tu email para confirmar tu suscripción y comenzar a recibir las mejores oportunidades.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
