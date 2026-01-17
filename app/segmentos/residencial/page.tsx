"use client"

import { motion } from "framer-motion"
import { Home, Zap, TrendingUp, Shield, Calculator, Phone } from "lucide-react"
import Link from "next/link"

export default function ResidencialPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-[#004E64] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex items-center mb-6">
                <Home className="w-12 h-12 text-white mr-4" />
                <span className="text-white/80 text-lg font-medium">Segmento Residencial</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-[#FF6B35]">Energia Solar Residencial</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Transforme sua casa em uma fonte de energia limpa e econômica
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <img
                src="/residential-solar-roof.png"
                alt="Energia Solar Residencial"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#004E64] mb-6">
              Vantagens da Energia Solar Residencial
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Economia de até 95%",
                description: "Reduza drasticamente sua conta de energia elétrica",
              },
              {
                icon: TrendingUp,
                title: "Valorização do Imóvel",
                description: "Aumente o valor de mercado da sua propriedade",
              },
              {
                icon: Shield,
                title: "Proteção contra Inflação",
                description: "Livre-se dos aumentos constantes na tarifa de energia",
              },
              {
                icon: Calculator,
                title: "Retorno Garantido",
                description: "Investimento com payback entre 3 a 5 anos",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg"
              >
                <benefit.icon className="w-12 h-12 text-[#FF6B35] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#004E64] mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#004E64] mb-6">Como Funciona o Processo</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Análise e Projeto",
                description: "Avaliamos seu consumo e criamos um projeto personalizado",
              },
              {
                step: "02",
                title: "Instalação",
                description: "Nossa equipe técnica realiza a instalação completa",
              },
              {
                step: "03",
                title: "Economia Imediata",
                description: "Comece a economizar na sua conta de luz imediatamente",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-[#FF6B35] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-[#004E64] mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#004E64] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#004E64] via-[#005A7A] to-[#004E64] opacity-50"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-[#FF6B35]">Pronto para Economizar?</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Faça uma simulação gratuita e descubra quanto você pode economizar com energia solar
            </p>
            <Link href="/contato">
            <button className="bg-white text-[#004E64] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#FF6B35] hover:text-white transition-all duration-300 transform hover:scale-105 inline-flex items-center">
              Solicitar Orçamento Gratuito
            </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
