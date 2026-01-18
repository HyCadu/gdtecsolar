"use client"

import { motion } from "framer-motion"
import { Building, TrendingUp, Shield, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone } from "lucide-react"
import { useState } from "react"

export default function ComercialPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }
  const benefits = [
    "Redução de até 95% na conta de luz",
    "Retorno do investimento em 3-5 anos",
    "Valorização do imóvel comercial",
    "Sustentabilidade e responsabilidade social",
    "Proteção contra aumentos na tarifa elétrica",
  ]

  const features = [
    {
      icon: TrendingUp,
      title: "Economia Garantida",
      description: "Reduza drasticamente os custos operacionais do seu negócio",
    },
    {
      icon: Shield,
      title: "Proteção Tarifária",
      description: "Proteja-se dos aumentos constantes na energia elétrica",
    },
    {
      icon: Clock,
      title: "Instalação Rápida",
      description: "Processo ágil sem interrupção das atividades comerciais",
    },
  ]

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-24 overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#003847] via-[#004E64] to-[#005A75]"></div>
        
        {/* Mouse-following glow with trail */}
        {isHovering && (
          <div
            className="absolute w-48 h-48 bg-[#FF6B35]/15 rounded-full blur-2xl pointer-events-none transition-all duration-500 ease-out"
            style={{
              left: mousePosition.x - 96,
              top: mousePosition.y - 96,
            }}
          />
        )}
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#005A75]/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/20 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#FF6B35]/30 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
              >
                <Building className="w-5 h-5 text-[#FF6B35] mr-2" />
                <span className="text-white/90 text-sm font-medium">Segmento Comercial</span>
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-[#FF6B35]">Energia Solar para Empresas</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Reduza custos operacionais e aumente a competitividade do seu negócio com energia solar comercial
              </p>
              <Link href="/contato">
              <Button size="lg" className="bg-white text-[#004E64] hover:bg-[#FF6B35] hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300">
                Solicitar Orçamento
              </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Image container with decorative border */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#FF6B35]/50 to-[#005A75]/50 rounded-2xl blur-sm"></div>
                <img
                  src="/factory-solar-installation.png"
                  alt="Energia Solar Comercial"
                  className="relative rounded-2xl shadow-2xl w-full h-auto border border-white/10"
                />
              </div>
              {/* Floating accent */}
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-[#FF6B35] rounded-xl flex items-center justify-center shadow-lg">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#004E64] mb-8">Vantagens para seu Negócio</h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <CheckCircle className="w-6 h-6 text-[#FF6B35] mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid gap-6"
            >
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#004E64] to-[#FF6B35] rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#004E64] mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#004E64] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#004E64] via-[#005A7A] to-[#004E64] opacity-50"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            <span className="text-[#FF6B35]">Transforme seu negócio com energia solar</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Solicite uma análise gratuita e descubra o potencial de economia da sua empresa
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contato">
            <Button size="lg" className="bg-white text-[#004E64] hover:bg-[#FF6B35] hover:text-white px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105">
              Solicitar Orçamento
            </Button>
            </Link>
            <a href="tel:+5527992632552">
              <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#004E64] px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                <Phone className="w-5 h-5 mr-2" />
                Falar com Especialista
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
