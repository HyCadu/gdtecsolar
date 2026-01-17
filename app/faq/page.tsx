"use client"

import { motion } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqCategories = [
    {
      title: "Geral sobre Energia Solar",
      questions: [
        {
          question: "Como funciona a energia solar fotovoltaica?",
          answer:
            "A energia solar fotovoltaica converte a luz do sol em eletricidade através de painéis solares. Os painéis captam a radiação solar e a transformam em corrente contínua, que é convertida em corrente alternada por um inversor para uso em sua residência ou empresa.",
        },
        {
          question: "Quanto posso economizar com energia solar?",
          answer:
            "A economia pode chegar até 95% na conta de luz. O valor exato depende do seu consumo atual, localização, orientação do telhado e dimensionamento do sistema. Em média, nossos clientes economizam entre 70% a 95% na conta de energia.",
        },
        {
          question: "Qual é a vida útil dos painéis solares?",
          answer:
            "Os painéis solares têm vida útil superior a 25 anos, com garantia de performance de pelo menos 80% da capacidade original após este período. Os inversores têm garantia de 10 a 12 anos, podendo ser estendida.",
        },
      ],
    },
    {
      title: "Instalação e Manutenção",
      questions: [
        {
          question: "Quanto tempo demora a instalação?",
          answer:
            "A instalação residencial típica leva de 1 a 3 dias. Para sistemas comerciais e industriais, o prazo varia de 1 a 4 semanas, dependendo da complexidade e potência do sistema.",
        },
        {
          question: "É necessário fazer manutenção nos painéis?",
          answer:
            "A manutenção é mínima. Recomendamos limpeza dos painéis a cada 6 meses e inspeção anual do sistema. Oferecemos planos de manutenção preventiva para garantir máxima performance.",
        },
        {
          question: "O sistema funciona em dias nublados?",
          answer:
            "Sim, os painéis solares funcionam mesmo em dias nublados, porém com menor eficiência. Em dias totalmente nublados, a produção pode ser de 10% a 25% da capacidade máxima.",
        },
      ],
    },
    {
      title: "Financeiro e Retorno",
      questions: [
        {
          question: "Qual é o tempo de retorno do investimento?",
          answer:
            "O payback médio varia de 3 a 6 anos, dependendo do consumo, tarifa local e dimensionamento do sistema. Após este período, a energia gerada é praticamente gratuita por mais de 20 anos.",
        },
        {
          question: "Existem opções de financiamento?",
          answer:
            "Sim, trabalhamos com diversas linhas de crédito especializadas em energia solar, incluindo financiamento em até 120 meses com taxas atrativas. Também aceitamos cartão de crédito e parcelamento próprio.",
        },
        {
          question: "O sistema valoriza meu imóvel?",
          answer:
            "Sim, imóveis com energia solar são valorizados em média 3% a 6% no mercado. Além disso, são mais atrativos para locação e venda, sendo um diferencial competitivo importante.",
        },
      ],
    },
    {
      title: "Técnico e Regulamentação",
      questions: [
        {
          question: "Preciso de autorização da distribuidora?",
          answer:
            "Sim, é necessário solicitar acesso à distribuidora local. Cuidamos de todo o processo burocrático, incluindo projeto, documentação e acompanhamento até a aprovação final.",
        },
        {
          question: "Posso vender energia excedente?",
          answer:
            "Através do sistema de compensação de energia elétrica, você injeta energia excedente na rede e recebe créditos para usar quando necessário. É como ter a rede elétrica como uma 'bateria virtual'.",
        },
        {
          question: "Meu telhado suporta os painéis?",
          answer:
            "Realizamos análise estrutural completa antes da instalação. A maioria dos telhados suporta sem problemas, pois os painéis são relativamente leves (cerca de 20kg/m²). Se necessário, fazemos reforços estruturais.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-[#004E64]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center mb-6"
          >
            <HelpCircle className="w-12 h-12 text-white mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="text-[#FF6B35]">Perguntas Frequentes</span>
            </h1>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Tire todas suas dúvidas sobre energia solar e nossos serviços
          </motion.p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-[#004E64] mb-8 border-b-2 border-[#FF6B35] pb-4">
                {category.title}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 10 + questionIndex
                  const isOpen = openItems.includes(globalIndex)

                  return (
                    <div
                      key={questionIndex}
                      className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#F5F5F5] transition-colors"
                      >
                        <h3 className="text-lg font-semibold text-[#004E64] pr-4">{faq.question}</h3>
                        <ChevronDown
                          className={`w-5 h-5 text-[#FF6B35] transition-transform flex-shrink-0 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? "auto" : 0,
                          opacity: isOpen ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4">
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#004E64] mb-6"
          >
            Não encontrou sua resposta?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 mb-8"
          >
            Nossa equipe de especialistas está pronta para esclarecer todas suas dúvidas
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8 py-4 text-lg relative group">
              <span className="relative">
                Falar com Especialista
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#004E64] text-[#004E64] hover:bg-[#004E64] hover:text-white px-8 py-4 text-lg bg-transparent relative group"
            >
              <span className="relative">
                Solicitar Orçamento
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#004E64] transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Button>
          </motion.div>
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
            <span className="text-[#FF6B35]">Pronto para começar?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Solicite um orçamento gratuito e descubra quanto você pode economizar
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button size="lg" className="bg-white text-[#004E64] hover:bg-[#FF6B35] hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Solicitar Orçamento Grátis
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
