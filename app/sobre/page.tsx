"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Users, Award, Target, Heart, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SobrePage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
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
    { number: "1.000+", label: "Projetos Realizados" },
    { number: "100MW", label: "Potência Instalada" },
    { number: "98%", label: "Satisfação dos Clientes" },
    { number: "100%", label: "Compromisso" },
  ]

  // Estrutura preparada para receber as fotos do Gabriel
  // Formato esperado: fotos estilo LinkedIn (quadradas, profissionais)
  const team = [
    {
      name: "Gabriel",
      role: "Diretor",
      description: "Fundador e líder da GDTEC",
      image: "/diretor-foto.jpeg",
    }
    // Adicionar mais membros conforme as fotos forem enviadas
  ]

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#003847] via-[#004E64] to-[#005A75]"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#005A75]/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/20 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[#FF6B35]/30 rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="text-[#FF6B35]">Sobre a GDTEC</span>
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
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-5xl font-bold text-[#FF6B35] mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#004E64] text-center mb-4"
          >
            Nossos Valores
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Princípios que guiam cada projeto e decisão na GDTEC
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#004E64] to-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#004E64] mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#004E64] mb-6">Nossa História</h2>
              <div className="space-y-5 text-gray-700 leading-relaxed">
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
              className="relative flex justify-center"
            >
              <div className="w-full max-w-sm mx-auto">
                <div className="relative rounded-2xl shadow-2xl overflow-hidden bg-black" style={{ aspectRatio: "9/16" }}>
                  <video
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                    onPlay={() => setIsVideoPlaying(true)}
                    onPause={() => setIsVideoPlaying(false)}
                  >
                    <source src="/vid/GDtec_intro.mp4" type="video/mp4" />
                    Seu navegador não suporta o elemento de vídeo.
                  </video>
                  
                  {/* Outlined Play Button */}
                  {!isVideoPlaying && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-20 h-20 rounded-full border-4 border-white/80 flex items-center justify-center">
                        <Play className="w-10 h-10 text-white/80 fill-white/80 ml-1" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#004E64] text-center mb-4"
          >
            Nossa Liderança
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Conheça quem está à frente da transformação energética
          </motion.p>
          <div className="flex justify-center">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300 max-w-sm w-full"
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full border-4 border-[#FF6B35] shadow-lg"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-r from-[#004E64] to-[#FF6B35] rounded-full flex items-center justify-center border-4 border-[#FF6B35] shadow-lg">
                      <Users className="w-20 h-20 text-white" />
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-[#004E64] mb-2">{member.name}</h3>
                <p className="text-[#FF6B35] font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#004E64] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            <span className="text-[#FF6B35]">Faça parte da revolução solar</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Junte-se aos milhares de clientes que já escolheram a GDTEC para sua transição energética
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/contato">
              <Button size="lg" className="bg-white text-[#004E64] hover:bg-[#FF6B35] hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300">
                Fale Conosco
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
