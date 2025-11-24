"use client"

import { motion } from "framer-motion"
import { Star, Quote, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { handleWhatsAppClick } from "@/components/whatsapp-button"

export default function DepoimentosPage() {
  const testimonials = [
    {
      name: "Elizangela Guizolpho",
      role: "Cliente Residencial",
      location: "Espírito Santo",
      rating: 5,
      text: "Excelente empresa! Atendimento rápido, equipe muito atenciosa e o sistema de energia solar funcionando perfeitamente. Estou muito satisfeito com a economia e recomendo a todos!",
      savings: "Economia significativa",
    },
    {
      name: "Rhuan Ramos",
      role: "Cliente",
      location: "Espírito Santo",
      rating: 5,
      text: "GDtec Energia Solar é simplesmente a melhor do Espírito Santo, sem conversa! O pessoal manda muito bem, profissionalismo de outro nível. Quem conhece de perto sabe que a qualidade é top demais! Não tenho dúvidas de que logo, logo vai estar estourada no Brasil inteiro. Parabéns pra toda a equipe que faz acontecer e ainda ajuda a construir um futuro mais sustentável. Tamo junto!",
      savings: "Qualidade top",
    },
    {
      name: "Rafa Guizolpho",
      role: "Cliente",
      location: "Espírito Santo",
      rating: 5,
      text: "Uma empresa comprometida com seu cliente! Entregam no prazo garantido! Super indico!",
      savings: "Entrega no prazo",
    },
    {
      name: "Comercial Falqueto",
      role: "Cliente Comercial",
      location: "Espírito Santo",
      rating: 5,
      text: "Empresa de referência em energia solar no ES. Preço qualidade e responsabilidade é GDTEC SOLAR. No pós venda são campeões de respeito com o cliente. Eu recomendo.",
      savings: "Referência no ES",
    },
    {
      name: "Luis Fernando Lucas da Silva",
      role: "Cliente Residencial",
      location: "Espírito Santo",
      rating: 5,
      text: "Empresa excelente, melhor atendimento que tive pra instalar na minha casa!",
      savings: "Melhor atendimento",
    },
    {
      name: "Marcos Silva",
      role: "Cliente",
      location: "Espírito Santo",
      rating: 5,
      text: "Estão de parabéns, toda equipe da GDTEC, atendimento e muito atenciosos. Serviço de qualidade.",
      savings: "Serviço de qualidade",
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

      {/* Video Testimonials Section - Moved to top */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#004E64] text-center mb-16"
          >
            Depoimentos em Vídeo
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-100 rounded-xl aspect-video flex items-center justify-center overflow-hidden shadow-lg"
            >
              <div className="text-center w-full h-full flex items-center justify-center">
                <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-gray-600 font-medium">Depoimento - Fazenda Solar 500kW</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-100 rounded-xl aspect-video flex items-center justify-center overflow-hidden shadow-lg"
            >
              <div className="text-center w-full h-full flex items-center justify-center">
                <div className="w-16 h-16 bg-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-gray-600 font-medium">Depoimento - Residencial 10kW</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#F5F5F5]">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                    Destaque: {testimonial.savings}
                  </div>
                </div>
              </motion.div>
            ))}
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
            <Button size="lg" className="bg-white text-[#004E64] hover:bg-white/90 px-8 py-4 text-lg font-semibold" onClick = {handleWhatsAppClick}>
              Solicitar Orçamento Grátis
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
