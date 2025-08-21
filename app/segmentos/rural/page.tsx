"use client"

import { motion } from "framer-motion"
import { Tractor, Droplets, Wheat, Sun, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function RuralPage() {
  const applications = [
    "Irrigação e bombeamento de água",
    "Eletrificação de propriedades rurais",
    "Sistemas para agronegócio",
    "Energia para estufas e viveiros",
    "Alimentação de equipamentos agrícolas",
  ]

  const features = [
    {
      icon: Droplets,
      title: "Irrigação Solar",
      description: "Sistemas de bombeamento movidos a energia solar para irrigação eficiente",
    },
    {
      icon: Wheat,
      title: "Agronegócio",
      description: "Soluções completas para propriedades agrícolas de todos os portes",
    },
    {
      icon: Sun,
      title: "Energia Limpa",
      description: "Aproveite o sol abundante do campo para gerar sua própria energia",
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
                <Tractor className="w-12 h-12 text-white mr-4" />
                <span className="text-white/80 text-lg font-medium">Segmento Rural</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Energia Solar Rural</h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Energia limpa para propriedades rurais, agronegócio e sistemas de irrigação
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
                alt="Energia Solar Rural"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#004E64] mb-8">Aplicações no Campo</h2>
              <div className="space-y-4">
                {applications.map((application, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <CheckCircle className="w-6 h-6 text-[#FF6B35] mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{application}</span>
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

      {/* Benefits Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#004E64] mb-12"
          >
            Vantagens da Energia Solar Rural
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#004E64] to-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">95%</span>
              </div>
              <h3 className="text-xl font-bold text-[#004E64] mb-4">Economia na Conta</h3>
              <p className="text-gray-600">Reduza até 95% dos custos com energia elétrica da propriedade</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#004E64] to-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">24h</span>
              </div>
              <h3 className="text-xl font-bold text-[#004E64] mb-4">Energia Contínua</h3>
              <p className="text-gray-600">Sistema com baterias para funcionamento 24 horas por dia</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#004E64] to-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">25</span>
              </div>
              <h3 className="text-xl font-bold text-[#004E64] mb-4">Anos de Garantia</h3>
              <p className="text-gray-600">Equipamentos com garantia estendida e vida útil superior a 25 anos</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#004E64] to-[#FF6B35]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Transforme sua propriedade rural
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Solicite uma visita técnica gratuita e descubra o potencial solar da sua propriedade
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-white text-[#004E64] hover:bg-white/90 px-8 py-4 text-lg font-semibold">
              Solicitar Visita Técnica
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#004E64] px-8 py-4 text-lg bg-transparent"
            >
              Calcular Economia
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
