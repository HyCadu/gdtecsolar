"use client"

import { motion } from "framer-motion"
import { Building, TrendingUp, Shield, Clock, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ComercialPage() {
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
      <section className="py-20 bg-gradient-to-br from-[#004E64] to-[#FF6B35]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center mb-6">
                <Building className="w-12 h-12 text-white mr-4" />
                <span className="text-white/80 text-lg font-medium">Segmento Comercial</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Energia Solar para Empresas</h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Reduza custos operacionais e aumente a competitividade do seu negócio com energia solar comercial
              </p>
              <Button size="lg" className="bg-white text-[#004E64] hover:bg-white/90 px-8 py-4 text-lg font-semibold">
                Solicitar Orçamento
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Energia Solar Comercial"
                className="rounded-2xl shadow-2xl"
              />
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
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#004E64] mb-6"
          >
            Transforme seu negócio com energia solar
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            Solicite uma análise gratuita e descubra o potencial de economia da sua empresa
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8 py-4 text-lg">
              Solicitar Orçamento
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#004E64] text-[#004E64] hover:bg-[#004E64] hover:text-white px-8 py-4 text-lg bg-transparent"
            >
              Falar com Especialista
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
