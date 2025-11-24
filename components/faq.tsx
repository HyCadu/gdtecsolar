"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Plus, Minus } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "Como funciona a energia solar fotovoltaica?",
    answer:
      "A energia solar fotovoltaica converte a luz do sol em energia elétrica através de painéis solares. Os painéis captam a radiação solar e a transformam em corrente contínua, que é convertida em corrente alternada por um inversor para uso doméstico ou comercial.",
  },
  {
    question: "Quanto posso economizar com energia solar?",
    answer:
      "A economia pode chegar até 95% na conta de luz. O valor exato depende do seu consumo atual, localização, orientação do telhado e dimensionamento do sistema. Nossa equipe faz uma análise personalizada para calcular sua economia.",
  },
  {
    question: "Qual é o tempo de retorno do investimento?",
    answer:
      "O payback médio varia entre 3 a 5 anos, dependendo do consumo e região. Considerando que o sistema tem vida útil de 25+ anos, você terá mais de 20 anos de energia praticamente gratuita.",
  },
  {
    question: "E se não houver sol suficiente?",
    answer:
      "O sistema funciona mesmo em dias nublados, apenas com menor eficiência. Além disso, você permanece conectado à rede elétrica, garantindo fornecimento contínuo. O excesso de energia gerado em dias ensolarados fica como crédito na distribuidora.",
  },
  {
    question: "Preciso fazer manutenção no sistema?",
    answer:
      "A manutenção é mínima. Recomenda-se limpeza dos painéis a cada 6 meses e inspeção anual do sistema. Os painéis têm garantia de 25 anos e os inversores de 10-12 anos.",
  },
  {
    question: "Posso instalar em qualquer tipo de telhado?",
    answer:
      "Sim, adaptamos o sistema para diferentes tipos de telhado: cerâmico, metálico, laje, fibrocimento. Nossa equipe técnica avalia a estrutura e define a melhor solução para cada caso.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gdtec-dark mb-6">Perguntas Frequentes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tire suas dúvidas sobre energia solar e nossos serviços
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full px-6 py-4 text-left flex items-center justify-between transition-colors relative group ${
                    openIndex === index ? "bg-gray-50" : "hover:bg-gray-50"
                  }`}
                >
                  <h3 className={`text-lg font-semibold pr-4 relative ${
                    openIndex === index ? "text-[#FF6B35]" : "text-gdtec-dark"
                  }`}>
                    <span className="relative">
                      {faq.question}
                      <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#FF6B35] transition-all duration-300 ${
                        openIndex === index ? "w-full" : "w-0 group-hover:w-full"
                      }`}></span>
                    </span>
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-[#FF6B35]" />
                    ) : (
                      <Plus className="w-5 h-5 text-gdtec-blue" />
                    )}
                  </div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">Não encontrou sua resposta?</p>
          <Link
            href="/contato"
            className="inline-flex items-center justify-center bg-[#FF6B35] text-white px-8 py-3 rounded-lg hover:bg-[#FF6B35]/90 transition-colors relative group"
          >
            <span className="relative">
              Entre em Contato
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
