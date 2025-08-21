"use client"

import { motion } from "framer-motion"
import { Users, Award, Target, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SobrePage() {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description:
        "Democratizar o acesso à energia solar, oferecendo soluções sustentáveis e econômicas para todos os segmentos.",
    },
    {
      icon: Heart,
      title: "Visão",
      description: "Ser referência nacional em energia solar, contribuindo para um futuro mais limpo e sustentável.",
    },
    {
      icon: Award,
      title: "Valores",
      description: "Transparência, qualidade, inovação e compromisso com a satisfação dos nossos clientes.",
    },
  ]

  const stats = [
    { number: "5000+", label: "Projetos Realizados" },
    { number: "100MW", label: "Potência Instalada" },
    { number: "98%", label: "Satisfação dos Clientes" },
    { number: "100%", label: "Compromisso" },
  ]

  const team = [
    {
      name: "João Silva",
      role: "CEO & Fundador",
      description: "Engenheiro Elétrico especialista em energia renovável",
    },
    {
      name: "Maria Santos",
      role: "Diretora Técnica",
      description: "Especialista em sistemas fotovoltaicos e gestão de projetos de grande porte",
    },
    {
      name: "Carlos Oliveira",
      role: "Diretor Comercial",
      description: "Especialista em desenvolvimento de negócios e relacionamento com clientes",
    },
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
            Sobre a GDTEC
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Pioneiros em energia solar no Brasil, transformando a forma como as pessoas e empresas consomem energia
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

      {/* Values Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#004E64] text-center mb-16"
          >
            Nossos Valores
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#004E64] to-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#004E64] mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#004E64] mb-8">Nossa História</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  A GDTEC nasceu da visão de democratizar o acesso à energia solar no Brasil. Começamos
                  como uma pequena empresa familiar e hoje somos uma das principais referências do setor.
                </p>
                <p>
                  Desenvolvemos expertise em todos os segmentos do mercado solar, desde residencial
                  até grandes projetos industriais, sempre mantendo nosso compromisso com a qualidade e satisfação dos
                  clientes.
                </p>
                <p>
                  Nossa equipe é formada por engenheiros especializados, técnicos certificados e profissionais
                  apaixonados por energia renovável, todos unidos pelo objetivo de construir um futuro mais sustentável.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img src="/placeholder.svg?height=400&width=600" alt="Equipe GDTEC" className="rounded-2xl shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#004E64] text-center mb-16"
          >
            Nossa Liderança
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-[#004E64] to-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#004E64] mb-2">{member.name}</h3>
                <p className="text-[#FF6B35] font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
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
            Faça parte da revolução solar
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Junte-se aos milhares de clientes que já escolheram a GDTEC para sua transição energética
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button size="lg" className="bg-white text-[#004E64] hover:bg-white/90 px-8 py-4 text-lg font-semibold">
              Fale Conosco
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
