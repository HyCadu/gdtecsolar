"use client"

import { motion } from "framer-motion"
import { ArrowRight, MapPin, Zap, Calendar } from "lucide-react"

const cases = [
  {
    id: 1,
    title: "Residência Familiar - São Paulo",
    category: "Residencial",
    location: "São Paulo, SP",
    power: "8.5 kWp",
    savings: "95%",
    date: "2024",
    image: "/casa-solar.png",
    description: "Sistema completo de energia solar para família de 4 pessoas, com economia de 95% na conta de luz.",
  },
  {
    id: 2,
    title: "Indústria Metalúrgica",
    category: "Industrial",
    location: "Campinas, SP",
    power: "150 kWp",
    savings: "85%",
    date: "2024",
    image: "/industrial-solar.png",
    description: "Grande projeto industrial com sistema de energia solar para redução de custos operacionais.",
  },
  {
    id: 3,
    title: "Fazenda de Café",
    category: "Rural",
    location: "Minas Gerais",
    power: "45 kWp",
    savings: "90%",
    date: "2023",
    image: "/rural-solar.png",
    description: "Sistema solar para propriedade rural com foco em irrigação e processamento de café.",
  },
]

export default function CasesPage() {
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
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Projetos de Sucesso</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Conheça alguns dos nossos projetos realizados e os resultados alcançados
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((case_, index) => (
              <motion.div
                key={case_.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video bg-gradient-to-br from-gdtec-blue/10 to-gdtec-green/10 flex items-center justify-center">
                  <Zap className="w-16 h-16 text-gdtec-blue" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-gdtec-green/10 text-gdtec-green px-3 py-1 rounded-full text-sm font-medium">
                      {case_.category}
                    </span>
                    <span className="text-gray-500 text-sm">{case_.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gdtec-dark mb-3">{case_.title}</h3>
                  <p className="text-gray-600 mb-4">{case_.description}</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-700">
                      <MapPin className="w-4 h-4 mr-2 text-gdtec-blue" />
                      {case_.location}
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Zap className="w-4 h-4 mr-2 text-gdtec-blue" />
                      {case_.power} instalados
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Calendar className="w-4 h-4 mr-2 text-gdtec-blue" />
                      {case_.savings} de economia
                    </div>
                  </div>
                  <button className="w-full bg-gdtec-blue text-white py-3 rounded-lg hover:bg-gdtec-blue/90 transition-colors flex items-center justify-center">
                    Ver Detalhes
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
