"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, CreditCard, Zap, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function FinancingSection() {
  return (
    <section id="financiamentos" className="py-16 md:py-24 bg-gradient-to-br from-[#F5F5F5] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-[#FF6B35]/10 text-[#FF6B35] px-4 py-2 rounded-full mb-6">
              <CreditCard className="w-5 h-5" />
              <span className="font-semibold text-sm">Financiamento</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] mb-6 leading-tight">
              Troque sua conta de energia por uma{" "}
              <span className="text-[#FF6B35]">parcela do seu financiamento</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Financiamos 100% do projeto, você paga uma parcela semelhante ao valor atual da sua conta de energia e no final, o sistema é seu, gerando economia real todos os meses.
            </p>

            <Link href="/financiamentos">
              <Button
                size="lg"
                className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Saiba Mais
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>

          {/* Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-[#F25C2E] via-[#F15A29] to-[#003B49] rounded-3xl p-8 md:p-12 shadow-2xl">
              {/* Animated Icons */}
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center"
                >
                  <Zap className="w-12 h-12 text-white mx-auto mb-3" />
                  <div className="text-white text-2xl font-bold">100%</div>
                  <div className="text-white/90 text-sm">Financiado</div>
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center"
                >
                  <TrendingUp className="w-12 h-12 text-white mx-auto mb-3" />
                  <div className="text-white text-2xl font-bold">Economia</div>
                  <div className="text-white/90 text-sm">Real</div>
                </motion.div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FF6B35] rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#004E64] rounded-full opacity-20 blur-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

