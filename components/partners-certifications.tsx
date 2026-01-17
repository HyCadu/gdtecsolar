"use client"

import { Users, Wrench, Shield, CreditCard } from "lucide-react"

const partners = [
  {
    name: "Canadian Solar",
    logo: "/canadian-solar-logo.png",
  },
  {
    name: "Jinko Solar",
    logo: "/jinko-solar-logo.png",
  },
  {
    name: "Fronius",
    logo: "/fronius-inverter-logo.png",
  },
  {
    name: "Fortlev Solar",
    logo: "/logo_fortlev-solar.svg",
  },

]

const differentiators = [
  {
    icon: Users,
    title: "Equipe de Engenharia",
    description: "Equipe de engenharia de instalação própria",
  },
  {
    icon: Wrench,
    title: "Manutenção Corretiva",
    description: "5 anos de manutenção corretiva gratuita",
  },
  {
    icon: Shield,
    title: "Garantia de Instalação",
    description: "3 anos de garantia da instalação em telhado ou solo",
  },
  {
    icon: CreditCard,
    title: "Credenciamento Bancário",
    description: "Credenciamento em todos os bancos parceiros para financiamento",
  },
]

export default function PartnersCertifications() {
  return (
    <section className="py-12 md:py-12 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partners Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              Nossos
              <span className="text-[#FF6B35]"> Parceiros</span>
            </h2>
            <p className="text-lg text-gray-600">Trabalhamos com as melhores marcas do mercado mundial</p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 w-40 h-24"
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className={`w-auto opacity-70 hover:opacity-100 transition-opacity duration-300 ${partner.name === "Fortlev Solar" ? "max-h-8" : "max-h-12"}`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Differentiators Section */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              Nossos
              <span className="text-[#FF6B35]"> Diferenciais</span>
            </h2>
            <p className="text-lg text-gray-600">O que nos torna a melhor escolha em energia solar</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiators.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-[#F25C2E] via-[#F15A29] to-[#003B49] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-[#111111] mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
