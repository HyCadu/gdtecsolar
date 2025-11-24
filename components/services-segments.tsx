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
    <section id="servicos" className="py-16 md:py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] mb-6">
            Soluções para Todos os
            <span className="text-[#FF6B35]"> Segmentos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desenvolvemos projetos personalizados de energia solar fotovoltaica para atender às necessidades específicas
            de cada cliente.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {segments.map((segment, index) => {
            const Icon = segment.icon
            return (
              <Card
                key={segment.title}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={segment.image || "/placeholder.svg"}
                    alt={segment.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#004E64]/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-[#FF6B35] rounded-lg flex items-center justify-center mb-2">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{segment.title}</h3>
                  </div>
                </div>

                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">{segment.description}</p>

                  <ul className="space-y-2 mb-6">
                    {segment.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-[#FF6B35] rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={segment.href || "/segmentos"}>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-[#FF6B35] group-hover:text-white group-hover:border-[#FF6B35] transition-all duration-300 bg-transparent"
                    >
                      Saiba Mais
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
