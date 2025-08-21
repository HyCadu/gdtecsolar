"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calculator, X, Zap, TrendingDown, Clock, Leaf } from "lucide-react"

export default function SolarSimulator() {
  const [isOpen, setIsOpen] = useState(false)
  const [monthlyBill, setMonthlyBill] = useState("")
  const [results, setResults] = useState<{
    systemSize: number
    monthlySavings: number
    annualSavings: number
    paybackTime: number
    co2Reduction: number
  } | null>(null)

  const calculateSavings = () => {
    const bill = Number.parseFloat(monthlyBill)
    if (!bill || bill <= 0) return

    // Simplified calculation logic
    const systemSize = Math.round((bill * 12) / 1200) // Rough estimate: 1kWp per R$1200/year
    const monthlySavings = bill * 0.9 // 90% savings
    const annualSavings = monthlySavings * 12
    const systemCost = systemSize * 4500 // R$4500 per kWp average
    const paybackTime = Math.round((systemCost / annualSavings) * 10) / 10
    const co2Reduction = systemSize * 1.2 // 1.2 tons CO2/year per kWp

    setResults({
      systemSize,
      monthlySavings,
      annualSavings,
      paybackTime,
      co2Reduction,
    })
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gdtec-green text-white p-4 rounded-full shadow-lg hover:bg-gdtec-green/90 transition-colors z-40"
      >
        <Calculator className="w-6 h-6" />
      </motion.button>

      {/* Simulator Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gdtec-dark">Simulador Solar</h3>
                <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Valor da sua conta de luz mensal (R$)
                  </label>
                  <input
                    type="number"
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(e.target.value)}
                    placeholder="Ex: 350"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gdtec-blue focus:border-transparent"
                  />
                </div>

                <button
                  onClick={calculateSavings}
                  disabled={!monthlyBill}
                  className="w-full bg-gdtec-blue text-white py-3 rounded-lg hover:bg-gdtec-blue/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Calcular Economia
                </button>

                {results && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4 pt-4 border-t border-gray-200"
                  >
                    <h4 className="text-lg font-semibold text-gdtec-dark">Seus Resultados:</h4>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gdtec-blue/10 p-4 rounded-lg">
                        <Zap className="w-6 h-6 text-gdtec-blue mb-2" />
                        <p className="text-sm text-gray-600">Sistema</p>
                        <p className="text-lg font-bold text-gdtec-dark">{results.systemSize} kWp</p>
                      </div>

                      <div className="bg-gdtec-green/10 p-4 rounded-lg">
                        <TrendingDown className="w-6 h-6 text-gdtec-green mb-2" />
                        <p className="text-sm text-gray-600">Economia/mês</p>
                        <p className="text-lg font-bold text-gdtec-dark">R$ {results.monthlySavings.toFixed(0)}</p>
                      </div>

                      <div className="bg-gdtec-orange/10 p-4 rounded-lg">
                        <Clock className="w-6 h-6 text-gdtec-orange mb-2" />
                        <p className="text-sm text-gray-600">Payback</p>
                        <p className="text-lg font-bold text-gdtec-dark">{results.paybackTime} anos</p>
                      </div>

                      <div className="bg-green-100 p-4 rounded-lg">
                        <Leaf className="w-6 h-6 text-green-600 mb-2" />
                        <p className="text-sm text-gray-600">CO₂/ano</p>
                        <p className="text-lg font-bold text-gdtec-dark">-{results.co2Reduction}t</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-gdtec-blue to-gdtec-green p-4 rounded-lg text-white">
                      <p className="text-sm opacity-90">Economia em 25 anos:</p>
                      <p className="text-2xl font-bold">R$ {(results.annualSavings * 25).toLocaleString()}</p>
                    </div>

                    <button className="w-full bg-gdtec-green text-white py-3 rounded-lg hover:bg-gdtec-green/90 transition-colors">
                      Solicitar Orçamento Detalhado
                    </button>
                  </motion.div>
                )}

                <p className="text-xs text-gray-500 text-center">
                  * Valores aproximados. Solicite um orçamento para cálculos precisos.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
