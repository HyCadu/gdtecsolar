"use client"

import { motion } from "framer-motion"
import { Factory, Zap, DollarSign, Leaf, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function IndustrialPage() {
  const benefits = [
    "Sistemas de grande porte até 5MW",
    "Redução de até 95% nos custos energéticos",
    "Financiamento especializado disponível",
    "Monitoramento 24/7 da produção",
    "Manutenção preventiva incluída",
  ]

  const stats = [
    { number: "500+", label: "Indústrias Atendidas" },
    { number: "50MW", label: "Potência Instalada" },
    { number: "R$ 200M", label: "Economia Gerada" },
    { number: "25 anos", label: "Garantia Equipamentos" },
  ]

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-[#004E64]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center mb-6">
                <Factory className="w-12 h-12 text-white mr-4" />
                <span className="text-white/80 text-lg font-medium">Segmento Industrial</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-[#FF6B35]">Energia Solar Industrial</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Sistemas de grande porte para indústrias com alta demanda energética e máxima eficiência
              </p>
              <Link href="/contato">
              <Button size="lg" className="bg-white text-[#004E64] hover:bg-white/90 px-8 py-4 text-lg font-semibold">
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
              <img
                src="/factory-solar-installation.png"
                alt="Energia Solar Industrial"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#FF6B35] mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#004E64] mb-8">Soluções Industriais Completas</h2>
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
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <Zap className="w-12 h-12 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#004E64] mb-2">Alta Potência</h3>
                <p className="text-gray-600">Sistemas até 5MW de potência instalada</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <DollarSign className="w-12 h-12 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#004E64] mb-2">ROI Rápido</h3>
                <p className="text-gray-600">Retorno do investimento em 3-4 anos</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <Leaf className="w-12 h-12 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#004E64] mb-2">Sustentável</h3>
                <p className="text-gray-600">Reduza a pegada de carbono da indústria</p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <Factory className="w-12 h-12 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#004E64] mb-2">Customizado</h3>
                <p className="text-gray-600">Projeto sob medida para sua indústria</p>
              </div>
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
            <span className="text-[#FF6B35]">Revolucione sua indústria com energia solar</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Fale com nossos especialistas e descubra como reduzir drasticamente seus custos energéticos
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/contato">
            <Button size="lg" className="bg-white text-[#004E64] hover:bg-[#FF6B35] hover:text-white px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105">
              Solicitar Orçamento
            </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
