"use client"

import { MessageCircle } from "lucide-react"

export const handleWhatsAppClick = () => {
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre energia solar da GDTEC.")
  window.open(`https://wa.me/5527992632552?text=${message}`, "_blank")
}

export default function WhatsAppButton() {
  
  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center animate-pulse"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </button>
  )
}
