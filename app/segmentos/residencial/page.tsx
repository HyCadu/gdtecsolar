"use client"

import { motion } from "framer-motion"
import { Home, Zap, TrendingUp, Shield, Calculator, Phone } from "lucide-react"

export default function ResidencialPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gdtec-blue to-gdtec-green py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <Home className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Energia Solar Residencial</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Transforme sua casa em uma fonte de energia limpa e econômica
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gdtec-dark mb-6">
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
                <benefit.icon className="w-12 h-12 text-gdtec-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gdtec-dark mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gdtec-dark mb-6">Como Funciona o Processo</h2>
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
                <div className="w-16 h-16 bg-gdtec-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gdtec-dark mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gdtec-blue">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Pronto para Economizar?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Faça uma simulação gratuita e descubra quanto você pode economizar com energia solar
            </p>
            <button className="bg-gdtec-green text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gdtec-green/90 transition-colors inline-flex items-center">
              <Phone className="mr-2 w-5 h-5" />
              Solicitar Orçamento Gratuito
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
