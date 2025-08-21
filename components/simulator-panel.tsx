"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, X, MessageCircle, Zap } from "lucide-react"

export default function SimulatorPanel() {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    cep: "",
    state: "",
    billValue: "",
    utility: "",
    email: "",
  })
  const [results, setResults] = useState<any>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simple calculation simulation
    const billValue = Number.parseFloat(formData.billValue)
    if (billValue > 0) {
      const annualSavings = billValue * 12 * 0.9 // 90% savings
      const systemCost = billValue * 50 // Rough estimate
      const paybackYears = systemCost / annualSavings

      setResults({
        annualSavings: annualSavings.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
        systemCost: systemCost.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
        paybackYears: paybackYears.toFixed(1),
        co2Reduction: (annualSavings * 0.5).toFixed(0), // Rough CO2 calculation
      })
    }
  }

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <>
      {/* Floating Button */}
                      <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-0 z-40 bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-l-full pr-4 pl-6 py-7 flex items-center transform hover:scale-110 group hover:right-2"
        >
          <div className="relative mr-2">
            <Calculator className="w-5 h-5 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 group-hover:drop-shadow-lg" />
            <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-full scale-0 group-hover:scale-200 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100"></div>
          </div>
          <span className="font-semibold text-sm whitespace-nowrap">Simular Economia</span>
        </Button>

      {/* Sliding Panel */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex-1 bg-black/50 backdrop-blur-sm" 
              onClick={() => setIsOpen(false)} 
            />

            {/* Panel */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 200,
                duration: 0.5 
              }}
              className="w-full max-w-md bg-white shadow-2xl"
            >
              <div className="h-full overflow-y-auto">
              {/* Header */}
              <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="bg-[#004E64] text-white p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold">Simulador Solar</h2>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/20"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
                <p className="text-white/90">Descubra quanto você pode economizar com energia solar</p>
              </motion.div>

              {/* Form */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="p-6"
              >
                {!results ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">CEP</label>
                      <Input
                        type="text"
                        placeholder="00000-000"
                        value={formData.cep}
                        onChange={(e) => handleChange("cep", e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Estado</label>
                      <Select onValueChange={(value) => handleChange("state", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione seu estado" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="SP">São Paulo</SelectItem>
                          <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                          <SelectItem value="MG">Minas Gerais</SelectItem>
                          <SelectItem value="RS">Rio Grande do Sul</SelectItem>
                          <SelectItem value="PR">Paraná</SelectItem>
                          <SelectItem value="SC">Santa Catarina</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Valor da Conta de Luz (R$)</label>
                      <Input
                        type="number"
                        placeholder="500"
                        value={formData.billValue}
                        onChange={(e) => handleChange("billValue", e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Concessionária</label>
                      <Select onValueChange={(value) => handleChange("utility", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione sua concessionária" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="enel">Enel</SelectItem>
                          <SelectItem value="cpfl">CPFL</SelectItem>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="cemig">Cemig</SelectItem>
                          <SelectItem value="copel">Copel</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                      <Input
                        type="email"
                        placeholder="seu@email.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white py-3">
                      <Zap className="w-4 h-4 mr-2" />
                      Calcular Economia
                    </Button>
                  </form>
                ) : (
                  <div className="space-y-6">
                    <Card className="border-[#FF6B35] border-2">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-[#004E64] text-center">Seus Resultados</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="text-center p-4 bg-[#F5F5F5] rounded-lg">
                          <div className="text-2xl font-bold text-[#FF6B35] mb-1">{results.annualSavings}</div>
                          <div className="text-sm text-gray-600">Economia Anual</div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-3 bg-[#F5F5F5] rounded-lg">
                            <div className="text-lg font-bold text-[#004E64]">{results.paybackYears} anos</div>
                            <div className="text-xs text-gray-600">Payback</div>
                          </div>
                          <div className="text-center p-3 bg-[#F5F5F5] rounded-lg">
                            <div className="text-lg font-bold text-[#004E64]">{results.co2Reduction} kg</div>
                            <div className="text-xs text-gray-600">CO₂ evitado/ano</div>
                          </div>
                        </div>

                        <div className="text-center text-sm text-gray-600 p-3 bg-blue-50 rounded-lg">
                          💡 Investimento estimado: {results.systemCost}
                        </div>
                      </CardContent>
                    </Card>

                    <div className="space-y-3">
                      <Button
                        className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white"
                        onClick={() => window.open("https://wa.me/5511999999999", "_blank")}
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Falar no WhatsApp
                      </Button>

                      <Button
                        variant="outline"
                        className="w-full bg-transparent"
                        onClick={() => {
                          setResults(null)
                          setFormData({
                            cep: "",
                            state: "",
                            billValue: "",
                            utility: "",
                            email: "",
                          })
                        }}
                      >
                        Nova Simulação
                      </Button>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
