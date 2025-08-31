"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import RewardModal from "./reward-modal"

interface Project {
  id: string
  title: string
  objectives: string
  activities: string
  compensation: string
  emoji: string
}

const projects: Project[] = [
  {
    id: "1",
    title: "EXCHANGE RocketBull",
    emoji: "🚀",
    objectives:
      "Crear contenido educativo y promocional para el lanzamiento de nuestro exchange de criptomonedas, enfocado en traders principiantes y avanzados.",
    activities:
      "Crear videos explicativos sobre trading, posts en redes sociales, reels de Instagram, threads en Twitter, y contenido para TikTok sobre análisis técnico.",
    compensation: "$800 - $1,200 USD",
  },
  {
    id: "2",
    title: "Criptomoneda INTI para gobernanza",
    emoji: "🤑",
    objectives:
      "Promocionar el token INTI como herramienta de gobernanza descentralizada, educando sobre su utilidad y casos de uso en el ecosistema DeFi.",
    activities:
      "Crear contenido explicativo sobre gobernanza descentralizada, tutoriales de uso del token, AMAs en vivo, y colaboraciones con otros influencers crypto.",
    compensation: "$600 - $900 USD",
  },
  {
    id: "3",
    title: "QUEEN, empoderando mujeres cripto",
    emoji: "👑",
    objectives:
      "Crear una comunidad sólida de mujeres en el espacio crypto, promoviendo la inclusión y educación financiera descentralizada.",
    activities:
      "Organizar espacios en Twitter, crear contenido educativo para mujeres, moderar comunidades, y desarrollar workshops sobre inversión en crypto.",
    compensation: "$500 - $800 USD",
  },
  {
    id: "4",
    title: "Active control, DAPP para atletas",
    emoji: "💪",
    objectives:
      "Promocionar nuestra DApp que conecta atletas con sponsors usando blockchain, enfocándose en la transparencia y pagos automáticos.",
    activities:
      "Crear contenido sobre la intersección de deportes y blockchain, entrevistar atletas usuarios, demos de la app, y contenido fitness motivacional.",
    compensation: "$700 - $1,000 USD",
  },
  {
    id: "5",
    title: "GREen tokenizando la flora",
    emoji: "💚",
    objectives:
      "Educar sobre tokenización de activos ambientales y promover nuestro proyecto de conservación forestal mediante NFTs y tokens verdes.",
    activities:
      "Crear contenido sobre sostenibilidad y blockchain, documentar proyectos de reforestación, explicar tokenización de carbono, y colaborar con eco-influencers.",
    compensation: "$400 - $700 USD",
  },
]

interface ProjectsListProps {
  isOpen: boolean
  onClose: () => void
}

export default function ProjectsList({ isOpen, onClose }: ProjectsListProps) {
  const [rewardModal, setRewardModal] = useState<{
    isOpen: boolean
    projectTitle: string
    compensation: string
  }>({
    isOpen: false,
    projectTitle: "",
    compensation: "",
  })

  const handleApply = (project: Project) => {
    setRewardModal({
      isOpen: true,
      projectTitle: project.title,
      compensation: project.compensation,
    })
  }

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center mb-4">Proyectos Disponibles</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            {projects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <span className="text-2xl">{project.emoji}</span>
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-gray-600 mb-1">OBJETIVOS</h4>
                    <p className="text-sm text-gray-800">{project.objectives}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm text-gray-600 mb-1">ACTIVIDADES</h4>
                    <p className="text-sm text-gray-800">{project.activities}</p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-600 mb-1">REMUNERACIÓN</h4>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {project.compensation}
                      </Badge>
                    </div>
                    <Button
                      className="bg-orange-600 hover:bg-orange-700 text-white"
                      onClick={() => handleApply(project)}
                    >
                      Aplicar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      <RewardModal
        isOpen={rewardModal.isOpen}
        onClose={() => setRewardModal((prev) => ({ ...prev, isOpen: false }))}
        projectTitle={rewardModal.projectTitle}
        compensation={rewardModal.compensation}
      />
    </>
  )
}
