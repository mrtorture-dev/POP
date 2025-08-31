"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { X } from "lucide-react"

interface CampaignFormProps {
  isOpen: boolean
  onClose: () => void
}

export function CampaignForm({ isOpen, onClose }: CampaignFormProps) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    campaignName: "",
    country: "",
    companyName: "",
    industry: "",
    investment: "",
    creatorsNeeded: "",
    requiredActivities: "",
    websiteUrl: "",
  })

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    onClose()
  }

  const nextStep = () => {
    if (step < 2) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl">
            {step === 1 ? "Suma Content Creators a tu estrategia" : "Detalles de la Campaña"}
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>

        <CardContent>
          {step === 1 && (
            <div className="space-y-6">
              {/* Hero image placeholder */}
              <div className="aspect-video bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center text-white">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">UGC_Creators</div>
                  <div className="text-lg">Conectando marcas con creadores</div>
                </div>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  nextStep()
                }}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <Label htmlFor="campaignName">
                    Campaign name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="campaignName"
                    value={formData.campaignName}
                    onChange={(e) => setFormData({ ...formData, campaignName: e.target.value })}
                    required
                  />
                </div>

                <div className="flex justify-end">
                  <Button type="submit" className="bg-primary hover:bg-primary/90">
                    Continuar
                  </Button>
                </div>
              </form>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="country">
                  Country <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={formData.country}
                  onValueChange={(value) => setFormData({ ...formData, country: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Please Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="es">España</SelectItem>
                    <SelectItem value="mx">México</SelectItem>
                    <SelectItem value="ar">Argentina</SelectItem>
                    <SelectItem value="co">Colombia</SelectItem>
                    <SelectItem value="us">Estados Unidos</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="companyName">
                  Company name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="industry">
                  Industry <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="industry"
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="investment">
                  Investment <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="investment"
                  placeholder="USDT"
                  value={formData.investment}
                  onChange={(e) => setFormData({ ...formData, investment: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="creatorsNeeded">
                  How many creators do you need? <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="creatorsNeeded"
                  placeholder="Creators number"
                  value={formData.creatorsNeeded}
                  onChange={(e) => setFormData({ ...formData, creatorsNeeded: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="requiredActivities">
                  Required activities <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="requiredActivities"
                  value={formData.requiredActivities}
                  onChange={(e) => setFormData({ ...formData, requiredActivities: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="websiteUrl">
                  URL del sitio web <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="websiteUrl"
                  type="url"
                  value={formData.websiteUrl}
                  onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                  required
                />
              </div>

              <div className="flex justify-between pt-4">
                <Button type="button" variant="outline" onClick={prevStep}>
                  Atrás
                </Button>
                <Button type="submit" className="bg-black hover:bg-black/90 text-white">
                  SUBMIT
                </Button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
