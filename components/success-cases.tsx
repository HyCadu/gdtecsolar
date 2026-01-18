"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
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
    image: "/coffee-farm-solar.jpeg",
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
    <section id="cases" className="py-12 md:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#111111] mb-4">
            Projetos de
            <span className="text-[#FF6B35]"> Sucesso</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos nossos projetos que transformaram a relação dos clientes com a energia elétrica.
          </p>
        </div>

        {/* Case Carousel */}
        <div className="relative">
          <Card className="overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image */}
              <div className="relative h-48 lg:h-auto bg-gray-100">
                <Image
                  src={currentCaseData.image || "/placeholder.svg"}
                  alt={currentCaseData.title}
                  fill
                  className="object-cover"
                  quality={95}
                  priority
                />
                <div className="absolute top-3 left-3 z-10">
                  <span className="bg-[#FF6B35] text-white px-2.5 py-1 rounded-full text-xs font-medium">
                    {currentCaseData.segment}
                  </span>
                </div>
              </div>

              {/* Content */}
              <CardContent className="p-6 lg:p-8 flex flex-col justify-center">
                <h3 className="text-xl md:text-2xl font-bold text-[#111111] mb-4">{currentCaseData.title}</h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[#004E64] mb-1.5 text-sm">Desafio:</h4>
                    <p className="text-gray-600 text-sm">{currentCaseData.problem}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#004E64] mb-1.5 text-sm">Solução:</h4>
                    <p className="text-gray-600 text-sm">{currentCaseData.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[#004E64] mb-1.5 text-sm">Resultado:</h4>
                    <p className="text-gray-600 text-sm">{currentCaseData.result}</p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-2.5 py-3">
                    <div className="text-center p-2.5 bg-[#F5F5F5] rounded-lg">
                      <div className="text-lg font-bold text-[#FF6B35] mb-0.5">{currentCaseData.power}</div>
                      <div className="text-xs text-gray-600 leading-tight">Potência Instalada</div>
                    </div>
                    <div className="text-center p-2.5 bg-[#F5F5F5] rounded-lg">
                      <div className="text-lg font-bold text-[#FF6B35] mb-0.5">{currentCaseData.savings}</div>
                      <div className="text-xs text-gray-600 leading-tight">Economia Anual</div>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-[#004E64] p-4 rounded-lg text-white">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#FF6B35] text-[#FF6B35]" />
                      ))}
                    </div>
                    <p className="italic mb-2 text-sm">"{currentCaseData.testimonial}"</p>
                    <p className="font-semibold text-sm">— {currentCaseData.client}</p>
                  </div>

                  <Button className="w-full bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white text-sm py-2">
                    Ver Detalhes do Projeto
                    <ArrowRight className="w-3.5 h-3.5 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg w-8 h-8"
            onClick={prevCase}
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg w-8 h-8"
            onClick={nextCase}
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {cases.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
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
