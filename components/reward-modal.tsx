"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"

interface RewardModalProps {
  isOpen: boolean
  onClose: () => void
  projectTitle: string
  compensation: string
}

export default function RewardModal({ isOpen, onClose, projectTitle, compensation }: RewardModalProps) {
  // Extract numeric amount from compensation string
  const getRewardAmount = (compensation: string) => {
    const match = compensation.match(/\$(\d+(?:,\d+)?)/)
    return match ? match[1] : "1200"
  }

  const rewardAmount = getRewardAmount(compensation)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md p-0 bg-transparent border-none">
        <div className="bg-white rounded-2xl p-6 border-4 border-purple-400 shadow-lg">
          <div className="text-center space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">Recompensas de la Campaña {projectTitle}</h2>

            <div className="text-left">
              <p className="text-gray-700 font-medium">Monto: {rewardAmount} USDT</p>
            </div>

            <div className="space-y-3">
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-full py-2">
                Obtener reward
              </Button>

              <Button
                variant="outline"
                className="w-full bg-pink-200 hover:bg-pink-300 text-pink-800 border-pink-300 rounded-full py-2"
              >
                Conecta tu Wallet
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
