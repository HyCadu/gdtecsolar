"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "Como funciona a energia solar fotovoltaica?",
    answer:
      "A energia solar fotovoltaica converte a luz do sol em energia elétrica através de painéis solares. Os painéis captam a radiação solar e a transformam em corrente contínua, que é convertida em corrente alternada pelo inversor para uso em sua residência ou empresa.",
  },
  {
    question: "Qual é o tempo de retorno do investimento?",
    answer:
      "O payback varia entre 3 a 6 anos, dependendo do consumo energético, localização e tamanho do sistema. Considerando que os painéis têm vida útil de 25+ anos, você terá mais de 20 anos de energia praticamente gratuita.",
  },
  {
    question: "O sistema funciona em dias nublados ou chuvosos?",
    answer:
      "Sim, o sistema continua gerando energia mesmo em dias nublados, porém com menor eficiência. Em dias chuvosos, a geração é reduzida, mas não para completamente. O sistema de compensação da distribuidora garante energia 24h.",
  },
  {
    question: "Preciso trocar meu relógio de energia?",
    answer:
      "Sim, é necessário instalar um relógio bidirecional que mede tanto a energia consumida quanto a injetada na rede. A troca é feita gratuitamente pela concessionária após aprovação do projeto.",
  },
  {
    question: "Qual é a garantia dos equipamentos?",
    answer:
      "Os painéis solares têm garantia de 25 anos para performance e 12 anos contra defeitos de fabricação. Os inversores têm garantia de 5 a 12 anos. Oferecemos também garantia de instalação por 5 anos.",
  },
  {
    question: "É possível financiar o sistema solar?",
    answer:
      "Sim, oferecemos diversas opções de financiamento com bancos parceiros, incluindo linhas específicas para energia renovável com taxas diferenciadas. Também aceitamos cartão de crédito e parcelamento próprio.",
  },
  {
    question: "Quanto tempo demora a instalação?",
    answer:
      "A instalação física leva de 1 a 3 dias, dependendo do tamanho do sistema. O processo completo, incluindo aprovação na concessionária e conexão à rede, leva entre 30 a 60 dias.",
  },
  {
    question: "O sistema requer manutenção?",
    answer:
      "A manutenção é mínima. Recomendamos limpeza dos painéis a cada 6 meses e inspeção anual do sistema. Oferecemos planos de manutenção preventiva para garantir máxima eficiência.",
  },
]

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]))
  }

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] mb-6">
            Perguntas
            <span className="text-[#FF6B35]"> Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600">Tire suas dúvidas sobre energia solar fotovoltaica</p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#F5F5F5] transition-colors duration-200"
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-lg font-semibold text-[#111111] pr-4">{faq.question}</h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-[#FF6B35] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#FF6B35] flex-shrink-0" />
                )}
              </button>

              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Não encontrou sua dúvida? Entre em contato conosco!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5527992632552"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#25D366] hover:bg-[#25D366]/90 text-white rounded-lg font-medium transition-colors duration-200 relative group"
            >
              <span className="relative">
                WhatsApp
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>
            <a
              href="#contato"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white rounded-lg font-medium transition-colors duration-200 relative group"
            >
              <span className="relative">
                Fale Conosco
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
