"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  CreditCard,
  Building2,
  TrendingUp,
  FileText,
  Zap,
  HelpCircle,
  Calendar,
  Percent,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const financialPartners = [
  { name: "Banco do Brasil", logo: "/bancos/BB logo.jpg" },
  { name: "Santander", logo: "/bancos/santander-logo.png" },
  { name: "Sicredi", logo: "/bancos/logo-sicredi.png" },
  { name: "BV Financeira", logo: "/bancos/Banco_BV_Logo..png" },
  { name: "Bradesco", logo: "/bancos/bradesco-logo-4.png" },
  { name: "Sicoob", logo: "/bancos/Sicoob.png" },
  { name: "Santander Consumer", logo: "/bancos/santander-consumer-logo.png" },
  { name: "Banco ABC", logo: "/bancos/Banco ABC.png" },
]

const steps = [
  {
    icon: FileText,
    title: "Simulação inicial",
    description:
      "Envie seus dados pelo formulário do site ou entre em contato com nossa equipe comercial. Nós fazemos uma simulação gratuita com base no seu consumo de energia e no tamanho do sistema ideal.",
    number: "01",
  },
  {
    icon: CreditCard,
    title: "Análise de crédito",
    description:
      "Nosso time encaminha sua proposta aos bancos parceiros, que fazem uma análise rápida e segura.",
    number: "02",
  },
  {
    icon: Building2,
    title: "Aprovação e instalação",
    description:
      "Após a aprovação, o contrato é assinado e a GDTEC realiza toda a instalação do sistema fotovoltaico.",
    number: "03",
  },
  {
    icon: Zap,
    title: "Economia imediata",
    description:
      "Assim que o sistema entra em operação, sua conta de energia é substituída pela parcela do financiamento, gerando economia desde o primeiro mês.",
    number: "04",
  },
]

const conditions = [
  {
    icon: TrendingUp,
    title: "Parcelas a partir de",
    description: "Valor aproximado da sua conta de energia atual",
  },
  {
    icon: Calendar,
    title: "Prazos",
    description: "Até 84 meses (7 anos), dependendo da instituição",
  },
  {
    icon: Percent,
    title: "Taxas de juros",
    description: "Variáveis, com opções a partir de 0,99% ao mês",
  },
  {
    icon: CreditCard,
    title: "Entrada",
    description: "Pode ser zero ou conforme o perfil do cliente",
  },
  {
    icon: FileText,
    title: "Documentos necessários",
    description: "RG, CPF, comprovante de residência e comprovante de renda",
  },
]

const faqs = [
  {
    question: "Posso financiar mesmo com nome de pessoa jurídica?",
    answer:
      "Sim! Temos linhas de crédito específicas para empresas e propriedades rurais.",
  },
  {
    question: "Preciso dar entrada?",
    answer:
      "Depende do banco parceiro e do valor do projeto. Em muitos casos, o financiamento é feito sem entrada.",
  },
  {
    question: "O que acontece se eu quiser quitar antes do prazo?",
    answer:
      "Você pode antecipar parcelas ou quitar o contrato a qualquer momento, com desconto nos juros futuros.",
  },
  {
    question: "A parcela realmente substitui a conta de energia?",
    answer:
      "Na maioria dos casos, sim. O valor da parcela é igual ou menor que a sua conta de energia atual — e ao final do contrato, o sistema é seu, e a economia é total.",
  },
  {
    question: "O financiamento cobre todo o projeto?",
    answer:
      "Sim. O valor pode incluir equipamentos, instalação e homologação junto à concessionária.",
  },
]

export default function FinanciamentosPage() {
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
              <CreditCard className="w-5 h-5 text-[#FF6B35]" />
              <span className="font-semibold text-sm">Financiamento</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-[#FF6B35]">Financiamento de Energia Solar GDTEC</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-8">
              Troque sua conta de energia por uma parcela do seu financiamento
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6">
                Investimento acessível em{" "}
                <span className="text-[#FF6B35]">energia solar</span>
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                <p>
                  Na GDTEC, acreditamos que investir em energia solar deve ser acessível a todos.
                  Por isso, criamos parcerias com os principais bancos e instituições financeiras do
                  país para oferecer condições exclusivas de financiamento, que permitem instalar seu
                  sistema fotovoltaico sem precisar pagar tudo à vista.
                </p>
                <p>
                  Financiamos 100% do projeto, você paga uma parcela semelhante ao valor atual da sua
                  conta de energia e no final, o sistema é seu, gerando economia real todos os meses.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#F25C2E] via-[#F15A29] to-[#003B49] rounded-3xl p-8 md:p-12 shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <Zap className="w-12 h-12 text-white mx-auto mb-3" />
                    <div className="text-white text-3xl font-bold">100%</div>
                    <div className="text-white/90 text-sm">Financiado</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <TrendingUp className="w-12 h-12 text-white mx-auto mb-3" />
                    <div className="text-white text-3xl font-bold">Economia</div>
                    <div className="text-white/90 text-sm">Real</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Financial Partners Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              Nossos
              <span className="text-[#FF6B35]"> Parceiros Financeiros</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trabalhamos com bancos e fintechs que acreditam na energia limpa e no futuro sustentável
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {financialPartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center justify-center min-h-[140px]"
              >
                {partner.logo ? (
                  <div className="relative w-full h-16 mb-3 flex items-center justify-center">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={120}
                      height={60}
                      className="object-contain max-h-16 w-auto"
                    />
                  </div>
                ) : (
                  <Building2 className="w-12 h-12 text-[#FF6B35] mx-auto mb-3" />
                )}
                <h3 className="font-semibold text-[#111111] text-sm">{partner.name}</h3>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center text-gray-600 mt-8"
          >
            Cada parceiro possui linhas específicas para energia solar residencial, comercial e rural,
            com prazos e condições adaptadas ao seu perfil.
          </motion.p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              Como Funciona o
              <span className="text-[#FF6B35]"> Financiamento Solar</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Um processo simples e rápido em 4 etapas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-r from-[#F25C2E] via-[#F15A29] to-[#003B49] rounded-full flex items-center justify-center mb-4">
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div className="text-4xl font-bold text-[#FF6B35] opacity-20">
                            {step.number}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-[#111111] mb-3">{step.title}</h3>
                          <p className="text-gray-600 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-[#FF6B35] opacity-50" />
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              Condições Básicas de
              <span className="text-[#FF6B35]"> Financiamento</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition, index) => {
              const Icon = condition.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#F25C2E] via-[#F15A29] to-[#003B49] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#111111] mb-2">{condition.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{condition.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              Dúvidas
              <span className="text-[#FF6B35]"> Frequentes</span>
            </h2>
            <p className="text-lg text-gray-600">Tire suas dúvidas sobre financiamento solar</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-[#FF6B35] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <HelpCircle className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-[#111111] mb-3 text-lg">{faq.question}</h3>
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#004E64] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#004E64] via-[#005A7A] to-[#004E64] opacity-50"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-[#FF6B35]">Pronto para começar sua economia?</span>
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Nossa equipe está pronta para encontrar a melhor opção de financiamento para o seu
              projeto de energia solar.
            </p>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contato">
                <Button
                  size="lg"
                  className="bg-white text-[#004E64] hover:bg-[#FF6B35] hover:text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  Solicitar Simulação
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/#contato">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#004E64] px-8 py-6 text-lg font-semibold rounded-full bg-transparent transition-all duration-300 transform hover:scale-105"
                >
                  Falar com Especialista
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

