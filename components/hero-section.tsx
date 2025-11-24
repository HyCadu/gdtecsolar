"use client"

import { Button } from "@/components/ui/button"
import { Calculator, MessageCircle } from "lucide-react"
import { useSimulator } from "@/contexts/simulator-context"
import Link from "next/link"

export default function HeroSection() {
  const { openSimulator } = useSimulator()
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-32 lg:pt-20">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/vid/202508202344.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-[#004E64]/80 via-[#004E64]/70 to-[#FF6B35]/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#004E64]/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headlines */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight sm:tracking-tighter px-2">
        Soluções solares que geram 
          <span className="block text-[#FF6B35] mt-1 sm:mt-2">Economia e Sustentabilidade. </span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
        Mais sol, menos conta de energia!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
          <a href="#contato" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span className="hidden sm:inline">Solicite um Orçamento Grátis</span>
              <span className="sm:hidden">Orçamento Grátis</span>
            </Button>
          </a>

          <Button
            size="lg"
            variant="outline"
            onClick={openSimulator}
            className="border-2 border-white text-white hover:bg-white hover:text-[#004E64] px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 bg-transparent relative group overflow-hidden w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center justify-center">
              <Calculator className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              <span className="hidden sm:inline">Descubra quanto você pode economizar!</span>
              <span className="sm:hidden">Simular Economia</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35] to-[#004E64] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 text-white/90 px-4">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-[#FF6B35] mb-1 sm:mb-2">+1.000</div>
            <div className="text-xs sm:text-sm uppercase tracking-wide leading-tight">Projetos Entregues</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-[#FF6B35] mb-1 sm:mb-2">R$ 2M+</div>
            <div className="text-xs sm:text-sm uppercase tracking-wide leading-tight">Economia Gerada</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-[#FF6B35] mb-1 sm:mb-2">100%</div>
            <div className="text-xs sm:text-sm uppercase tracking-wide leading-tight">Satisfação</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
