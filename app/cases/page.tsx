"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowRight, MapPin, Zap, Calendar, Quote, Star, User, Play, Pause, Volume2, VolumeX, Maximize, ChevronLeft, ChevronRight } from "lucide-react"

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

const videoTestimonials = [
  {
    id: 1,
    title: "Depoimento 1",
    videoUrl: "/vid/Depoimento1.mp4",
  },
  {
    id: 2,
    title: "Depoimento 2",
    videoUrl: "/vid/Depoimento2.mp4",
  },
  {
    id: 3,
    title: "Depoimento 3",
    videoUrl: "/vid/Depoimento3.mp4",
  },
  {
    id: 4,
    title: "Depoimento 4",
    videoUrl: "/vid/Depoimento4.mp4",
  },
]

function VideoTestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen()
      }
    }
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? videoTestimonials.length - 1 : prev - 1))
    setIsPlaying(false)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === videoTestimonials.length - 1 ? 0 : prev + 1))
    setIsPlaying(false)
  }

  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          {/* Main Video Player - Vertical Story Format */}
          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl" style={{ width: '360px', height: '640px' }}>
            <video
              ref={videoRef}
              src={videoTestimonials[currentIndex].videoUrl}
              className="w-full h-full object-cover"
              onEnded={() => setIsPlaying(false)}
            />
            
            {/* Video Controls Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <button
                    onClick={handlePlayPause}
                    className="text-white hover:text-[#FF6B35] transition-colors"
                  >
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                  </button>
                  <button
                    onClick={handleMuteToggle}
                    className="text-white hover:text-[#FF6B35] transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                  </button>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-white text-sm font-medium">
                    {currentIndex + 1} / {videoTestimonials.length}
                  </span>
                  <button
                    onClick={handleFullscreen}
                    className="text-white hover:text-[#FF6B35] transition-colors"
                  >
                    <Maximize className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Progress Indicators */}
            <div className="absolute top-4 left-4 right-4 flex gap-1">
              {videoTestimonials.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 flex-1 rounded-full transition-all ${
                    index === currentIndex ? 'bg-[#FF6B35]' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function CasesPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="bg-[#004E64] py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-[#FF6B35]">Projetos de Sucesso</span>
            </h1>
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

      {/* Testimonials Section Title */}
      <section className="pt-12 pb-4 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#004E64] mb-3"
          >
            Depoimentos
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Veja o que nossos clientes falam sobre a experiência com a GDTEC
          </motion.p>
        </div>
      </section>

      {/* Video Testimonials Carousel Section */}
      <VideoTestimonialsCarousel />

      {/* Stats Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "98%", label: "Satisfação dos Clientes" },
              { number: "5000+", label: "Depoimentos Positivos" },
              { number: "4.9/5", label: "Avaliação Média" },
              { number: "95%", label: "Recomendação" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#FF6B35] mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Elizangela Guizolpho",
                role: "Cliente Residencial",
                location: "Espírito Santo",
                rating: 5,
                text: "Excelente empresa! Atendimento rápido, equipe muito atenciosa e o sistema de energia solar funcionando perfeitamente. Estou muito satisfeito com a economia e recomendo a todos!",
                savings: "Economia significativa",
              },
              {
                name: "Rhuan Ramos",
                role: "Cliente",
                location: "Espírito Santo",
                rating: 5,
                text: "GDtec Energia Solar é simplesmente a melhor do Espírito Santo, sem conversa! O pessoal manda muito bem, profissionalismo de outro nível. Quem conhece de perto sabe que a qualidade é top demais! Não tenho dúvidas de que logo, logo vai estar estourada no Brasil inteiro. Parabéns pra toda a equipe que faz acontecer e ainda ajuda a construir um futuro mais sustentável. Tamo junto!",
                savings: "Qualidade top",
              },
              {
                name: "Rafa Guizolpho",
                role: "Cliente",
                location: "Espírito Santo",
                rating: 5,
                text: "Uma empresa comprometida com seu cliente! Entregam no prazo garantido! Super indico!",
                savings: "Entrega no prazo",
              },
              {
                name: "Comercial Falqueto",
                role: "Cliente Comercial",
                location: "Espírito Santo",
                rating: 5,
                text: "Empresa de referência em energia solar no ES. Preço qualidade e responsabilidade é GDTEC SOLAR. No pós venda são campeões de respeito com o cliente. Eu recomendo.",
                savings: "Referência no ES",
              },
              {
                name: "Luis Fernando Lucas da Silva",
                role: "Cliente Residencial",
                location: "Espírito Santo",
                rating: 5,
                text: "Empresa excelente, melhor atendimento que tive pra instalar na minha casa!",
                savings: "Melhor atendimento",
              },
              {
                name: "Marcos Silva",
                role: "Cliente",
                location: "Espírito Santo",
                rating: 5,
                text: "Estão de parabéns, toda equipe da GDTEC, atendimento e muito atenciosos. Serviço de qualidade.",
                savings: "Serviço de qualidade",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 relative"
              >
                <Quote className="w-8 h-8 text-[#FF6B35] mb-4" />
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#004E64] to-[#FF6B35] rounded-full flex items-center justify-center mr-3">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#004E64]">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{testimonial.location}</p>
                  <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium inline-block">
                    Destaque: {testimonial.savings}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
