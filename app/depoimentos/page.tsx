"use client"

import { motion } from "framer-motion"
import { Star, Quote, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DepoimentosPage() {
  const testimonials = [
    {
      name: "Carlos Mendes",
      role: "Proprietário Rural",
      location: "Ribeirão Preto, SP",
      rating: 5,
      text: "A GDTEC transformou minha propriedade rural. Agora tenho energia limpa para toda a irrigação e ainda sobra energia. O investimento se pagou em menos de 4 anos!",
      savings: "R$ 3.500/mês",
    },
    {
      name: "Ana Paula Silva",
      role: "Empresária",
      location: "São Paulo, SP",
      rating: 5,
      text: "Excelente atendimento desde o primeiro contato. A equipe é muito profissional e o sistema funciona perfeitamente. Recomendo para qualquer empresa que queira reduzir custos.",
      savings: "R$ 8.200/mês",
    },
    {
      name: "Roberto Santos",
      role: "Residencial",
      location: "Campinas, SP",
      rating: 5,
      text: "Melhor decisão que tomei! Minha conta de luz praticamente zerou e ainda contribuo para o meio ambiente. A instalação foi rápida e sem complicações.",
      savings: "R$ 450/mês",
    },
    {
      name: "Indústria Metalúrgica XYZ",
      role: "Diretor Industrial",
      location: "São Bernardo do Campo, SP",
      rating: 5,
      text: "Sistema de 2MW instalado sem interrupção da produção. Economia impressionante e excelente suporte técnico. A GDTEC superou nossas expectativas.",
      savings: "R$ 45.000/mês",
    },
    {
      name: "Marina Costa",
      role: "Arquiteta",
      location: "Santos, SP",
      rating: 5,
      text: "Além da economia, o sistema solar valorizou meu imóvel. A equipe da GDTEC foi muito cuidadosa com a estética da instalação. Ficou perfeito!",
      savings: "R$ 320/mês",
    },
    {
      name: "Fazenda Boa Vista",
      role: "Produtor Rural",
      location: "Barretos, SP",
      rating: 5,
      text: "Sistema off-grid perfeito para nossa propriedade isolada. Agora temos energia 24h para ordenha e resfriamento. Investimento que mudou nossa operação.",
      savings: "R$ 2.800/mês",
    },
  ]

  const stats = [
    { number: "98%", label: "Satisfação dos Clientes" },
    { number: "5000+", label: "Depoimentos Positivos" },
    { number: "4.9/5", label: "Avaliação Média" },
    { number: "95%", label: "Recomendação" },
  ]

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#004E64] to-[#FF6B35]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Depoimentos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Veja o que nossos clientes falam sobre a experiência com a GDTEC
          </motion.p>
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

      {/* Testimonials Grid */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#004E64] text-center mb-16"
          >
            O que nossos clientes dizem
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 relative"
              >
                <Quote className="w-8 h-8 text-[#FF6B35] mb-4" />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#004E64] to-[#FF6B35] rounded-full flex items-center justify-center mr-3">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#004E64]">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{testimonial.location}</p>
                  <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium inline-block">
                    Economia: {testimonial.savings}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#004E64] text-center mb-16"
          >
            Depoimentos em Vídeo
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-100 rounded-xl aspect-video flex items-center justify-center"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-gray-600">Depoimento - Fazenda Solar 500kW</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-100 rounded-xl aspect-video flex items-center justify-center"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-gray-600">Depoimento - Residencial 10kW</p>
              </div>
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
            Seja o próximo a economizar
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Junte-se aos milhares de clientes satisfeitos e comece a economizar hoje mesmo
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button size="lg" className="bg-white text-[#004E64] hover:bg-white/90 px-8 py-4 text-lg font-semibold">
              Solicitar Orçamento Grátis
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
