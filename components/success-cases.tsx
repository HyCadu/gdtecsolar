"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, ArrowRight } from "lucide-react"

const cases = [
  {
    id: 1,
    title: "Residência Familiar - São Paulo",
    image: "/casaSP.png",
    problem: "Conta de luz de R$ 800/mês estava impactando o orçamento familiar.",
    solution: "Sistema de 5kWp com 16 módulos fotovoltaicos de alta eficiência.",
    result: "Economia de 92% na conta de luz, payback em 4 anos.",
    testimonial: "A GDTEC superou nossas expectativas. Profissionais excelentes!",
    client: "Maria Silva",
    segment: "Residencial",
    savings: "R$ 8.800/ano",
    power: "5kWp",
  },
  {
    id: 2,
    title: "Indústria Metalúrgica - ABC Paulista",
    image: "/energia_solar_na_industria.png",
    problem: "Alto consumo energético estava reduzindo a competitividade da empresa.",
    solution: "Sistema de 100kWp com monitoramento em tempo real e gestão inteligente.",
    result: "Redução de 85% nos custos com energia elétrica.",
    testimonial: "Investimento que se pagou rapidamente. Recomendo a GDTEC!",
    client: "João Santos - CEO",
    segment: "Industrial",
    savings: "R$ 180.000/ano",
    power: "100kWp",
  },
  {
    id: 3,
    title: "Fazenda de Café - Interior de MG",
    image: "/coffee-farm-solar.png",
    problem: "Custos elevados com energia para irrigação e processamento do café.",
    solution: "Sistema de 50kWp adaptado às condições rurais com estruturas reforçadas.",
    result: "Economia de 90% na conta de luz, maior sustentabilidade.",
    testimonial: "Agora nossa fazenda é autossuficiente em energia. Excelente trabalho!",
    client: "Carlos Oliveira",
    segment: "Agronegócio",
    savings: "R$ 72.000/ano",
    power: "50kWp",
  },
]

export default function SuccessCases() {
  const [currentCase, setCurrentCase] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentCase((prev) => (prev + 1) % cases.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % cases.length)
    setIsAutoPlaying(false)
  }

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + cases.length) % cases.length)
    setIsAutoPlaying(false)
  }

  const currentCaseData = cases[currentCase]

  return (
    <section id="cases" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] mb-6">
            Cases de
            <span className="text-[#FF6B35]"> Sucesso</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos nossos projetos que transformaram a relação dos clientes com a energia elétrica.
          </p>
        </div>

        {/* Case Carousel */}
        <div className="relative">
          <Card className="overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 lg:h-auto">
                <img
                  src={currentCaseData.image || "/placeholder.svg"}
                  alt={currentCaseData.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#FF6B35] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {currentCaseData.segment}
                  </span>
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-[#111111] mb-6">{currentCaseData.title}</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-[#004E64] mb-2">Desafio:</h4>
                    <p className="text-gray-600">{currentCaseData.problem}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#004E64] mb-2">Solução:</h4>
                    <p className="text-gray-600">{currentCaseData.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#004E64] mb-2">Resultado:</h4>
                    <p className="text-gray-600">{currentCaseData.result}</p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 py-4">
                    <div className="text-center p-3 bg-[#F5F5F5] rounded-lg">
                      <div className="text-xl font-bold text-[#FF6B35] mb-1">{currentCaseData.power}</div>
                      <div className="text-xs text-gray-600 leading-tight">Potência Instalada</div>
                    </div>
                    <div className="text-center p-3 bg-[#F5F5F5] rounded-lg">
                      <div className="text-xl font-bold text-[#FF6B35] mb-1">{currentCaseData.savings}</div>
                      <div className="text-xs text-gray-600 leading-tight">Economia Anual</div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-[#004E64] p-6 rounded-lg text-white">
                    <div className="flex items-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#FF6B35] text-[#FF6B35]" />
                      ))}
                    </div>
                    <p className="italic mb-3">"{currentCaseData.testimonial}"</p>
                    <p className="font-semibold">— {currentCaseData.client}</p>
                  </div>

                  <Button className="w-full bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white">
                    Ver Detalhes do Projeto
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
            onClick={prevCase}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg"
            onClick={nextCase}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {cases.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentCase ? "bg-[#FF6B35]" : "bg-gray-300"
              }`}
              onClick={() => {
                setCurrentCase(index)
                setIsAutoPlaying(false)
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
