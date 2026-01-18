"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Home, Factory, Wheat, Church, Building2, ArrowRight } from "lucide-react"
import Link from "next/link"

const segments = [
  {
    icon: Home,
    title: "Residências",
    description: "Soluções personalizadas para sua casa, com economia de até 95% na conta de luz.",
    features: ["Instalação rápida", "Financiamento facilitado", "Garantia de 25 anos"],
    image: "/residential-solar-roof.png",
    href: "/segmentos/residencial",
  },
  {
    icon: Factory,
    title: "Indústrias",
    description: "Projetos de grande porte para reduzir custos operacionais e aumentar competitividade.",
    features: ["Análise de demanda", "ROI otimizado", "Suporte técnico 24/7"],
    image: "/factory-solar-installation.png",
    href: "/segmentos/industrial",
  },
  {
    icon: Wheat,
    title: "Agronegócio",
    description: "Energia limpa para propriedades rurais, irrigação e processamento agrícola.",
    features: ["Sistemas robustos", "Resistente ao clima", "Baixa manutenção"],
    image: "/farm-solar-building.png",
    href: "/segmentos/rural",
  },
  {
    icon: Church,
    title: "Igrejas",
    description: "Projetos especiais para templos e instituições religiosas com condições facilitadas.",
    features: ["Condições especiais", "Projeto personalizado", "Instalação cuidadosa"],
    image: "/church-solar-panels.png",
    href: "/segmentos",
  },
  {
    icon: Building2,
    title: "Condomínios",
    description: "Energia solar compartilhada para áreas comuns e unidades condominiais.",
    features: ["Gestão centralizada", "Rateio automático", "Economia coletiva"],
    image: "/condominio.png",
    href: "/segmentos",
  },
]

export default function ServicesSegments() {
  return (
    <section id="servicos" className="py-12 md:py-16 bg-[#004E64]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#004E64] mb-3">
            Soluções para Todos os
            <span className="text-[#FF6B35]"> Segmentos</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Projetos personalizados de energia solar para cada necessidade
          </p>
        </div>

        {/* Services Grid - Horizontal 5 items */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {segments.map((segment, index) => {
            const Icon = segment.icon
            return (
              <Card
                key={segment.title}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg overflow-hidden bg-white p-0 relative"
              >
                {/* Decorative gradient border on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/20 via-transparent to-[#004E64]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={segment.image || "/placeholder.svg"}
                    alt={segment.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004E64]/90 via-[#004E64]/40 to-transparent"></div>
                  
                  {/* Icon and title */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#FF6B35] to-[#FF8C35] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <h3 className="text-sm font-bold text-white drop-shadow-lg">{segment.title}</h3>
                  </div>
                </div>

                <CardContent className="p-4 relative z-10">
                  <p className="text-gray-700 text-xs mb-3 leading-relaxed line-clamp-2 font-medium">{segment.description}</p>

                  <ul className="space-y-1.5 mb-4">
                    {segment.features.slice(0, 2).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs text-gray-600">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-[#FF6B35] to-[#FF8C35] rounded-full mr-2 flex-shrink-0"></div>
                        <span className="line-clamp-1">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={segment.href || "/segmentos"}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group-hover:bg-gradient-to-r group-hover:from-[#FF6B35] group-hover:to-[#FF8C35] group-hover:text-white group-hover:border-transparent transition-all duration-300 bg-transparent text-xs font-semibold border-[#004E64]/20 text-[#004E64] hover:shadow-md"
                    >
                      Saiba Mais
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
