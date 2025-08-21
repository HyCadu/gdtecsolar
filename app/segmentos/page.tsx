"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Home, Building2, Factory, Zap } from "lucide-react"

const segments = [
  {
    id: "residencial",
    title: "Residencial",
    description: "Soluções completas em energia solar para sua casa",
    icon: Home,
    image: "/casa-solar.png",
    benefits: ["Redução de até 95% na conta de luz", "Valorização do imóvel", "Sustentabilidade"],
    href: "/segmentos/residencial",
  },
  {
    id: "comercial",
    title: "Comercial",
    description: "Energia solar para empresas e comércios",
    icon: Building2,
    image: "/comercial-solar.png",
    benefits: ["Redução de custos operacionais", "Competitividade no mercado", "Responsabilidade ambiental"],
    href: "/segmentos/comercial",
  },
  {
    id: "industrial",
    title: "Industrial",
    description: "Grandes projetos de energia solar para indústrias",
    icon: Factory,
    image: "/industrial-solar.png",
    benefits: ["Economia em grande escala", "Energia limpa e renovável", "Independência energética"],
    href: "/segmentos/industrial",
  },
  {
    id: "rural",
    title: "Rural",
    description: "Energia solar para propriedades rurais e agronegócio",
    icon: Zap,
    image: "/rural-solar.png",
    benefits: ["Energia para irrigação", "Redução de custos", "Sustentabilidade no campo"],
    href: "/segmentos/rural",
  },
]

export default function SegmentosPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#004E64] to-[#FF6B35] py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Segmentos de Atuação</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Soluções personalizadas em energia solar para cada tipo de cliente
            </p>
          </motion.div>
        </div>
      </section>

      {/* Segments Grid */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {segments.map((segment, index) => (
              <motion.div
                key={segment.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video bg-gradient-to-br from-[#004E64]/10 to-[#FF6B35]/10 flex items-center justify-center">
                  <segment.icon className="w-20 h-20 text-[#004E64]" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#004E64] mb-4">{segment.title}</h3>
                  <p className="text-gray-600 mb-6">{segment.description}</p>
                  <ul className="space-y-2 mb-6">
                    {segment.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-[#FF6B35] rounded-full mr-3" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={segment.href}
                    className="inline-flex items-center bg-[#FF6B35] text-white px-6 py-3 rounded-lg hover:bg-[#FF6B35]/90 transition-colors"
                  >
                    Saiba Mais
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
