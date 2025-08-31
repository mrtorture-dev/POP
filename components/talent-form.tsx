"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { X } from "lucide-react"

interface TalentFormProps {
  isOpen: boolean
  onClose: () => void
}

export default function TalentForm({ isOpen, onClose }: TalentFormProps) {
  const [formData, setFormData] = useState({
    titulo: "",
    objetivos: "",
    actividades: "",
    remuneracion: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission here
    onClose()
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Buscar Talento</h2>
          <Button variant="ghost" size="sm" onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="titulo" className="text-sm font-medium text-gray-700">
              Título de proyecto *
            </Label>
            <Input
              id="titulo"
              type="text"
              value={formData.titulo}
              onChange={(e) => handleChange("titulo", e.target.value)}
              className="mt-1"
              required
            />
          </div>

          <div>
            <Label htmlFor="objetivos" className="text-sm font-medium text-gray-700">
              Objetivos *
            </Label>
            <Textarea
              id="objetivos"
              value={formData.objetivos}
              onChange={(e) => handleChange("objetivos", e.target.value)}
              className="mt-1"
              rows={3}
              required
            />
          </div>

          <div>
            <Label htmlFor="actividades" className="text-sm font-medium text-gray-700">
              Actividades (que debe hacer el creador) *
            </Label>
            <Textarea
              id="actividades"
              value={formData.actividades}
              onChange={(e) => handleChange("actividades", e.target.value)}
              className="mt-1"
              rows={3}
              required
            />
          </div>

          <div>
            <Label htmlFor="remuneracion" className="text-sm font-medium text-gray-700">
              Remuneración *
            </Label>
            <Input
              id="remuneracion"
              type="text"
              value={formData.remuneracion}
              onChange={(e) => handleChange("remuneracion", e.target.value)}
              className="mt-1"
              placeholder="Ej: $500 USD"
              required
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1 bg-transparent">
              Cancelar
            </Button>
            <Button type="submit" className="flex-1 bg-orange-600 hover:bg-orange-700 text-white">
              Publicar Proyecto
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
