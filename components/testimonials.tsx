"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Maria Silva",
    role: "Proprietária Residencial",
    location: "São Paulo, SP",
    rating: 5,
    text: "A GDTEC transformou nossa relação com a energia elétrica. Economia real de 90% na conta de luz e atendimento excepcional.",
    avatar: "/professional-woman-smiling.png",
  },
  {
    name: "João Santos",
    role: "CEO Metalúrgica Santos",
    location: "ABC Paulista, SP",
    rating: 5,
    text: "Investimento que se pagou em menos de 4 anos. A equipe da GDTEC é altamente qualificada e o projeto superou expectativas.",
    avatar: "/smiling-businessman.png",
  },
  {
    name: "Carlos Oliveira",
    role: "Produtor Rural",
    location: "Interior de MG",
    rating: 5,
    text: "Nossa fazenda agora é autossuficiente em energia. A GDTEC entendeu perfeitamente nossas necessidades rurais.",
    avatar: "/smiling-farmer.png",
  },
  {
    name: "Ana Costa",
    role: "Síndica de Condomínio",
    location: "Rio de Janeiro, RJ",
    rating: 5,
    text: "O projeto para nosso condomínio foi executado com perfeição. Todos os moradores estão satisfeitos com a economia.",
    avatar: "/smiling-professional-woman.png",
  },
  {
    name: "Pastor Roberto",
    role: "Igreja Evangélica",
    location: "Brasília, DF",
    rating: 5,
    text: "A GDTEC nos ofereceu condições especiais e um projeto que respeitou as características do nosso templo.",
    avatar: "/mature-man-formal-smile.png",
  },
  {
    name: "Fernanda Lima",
    role: "Empresária",
    location: "Belo Horizonte, MG",
    rating: 5,
    text: "Profissionalismo do início ao fim. O sistema funciona perfeitamente e o suporte pós-venda é excelente.",
    avatar: "/confident-businesswoman.png",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] mb-6">
            O que Nossos Clientes
            <span className="text-[#FF6B35]"> Dizem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A satisfação dos nossos clientes é nossa maior conquista. Veja alguns depoimentos de quem já transformou sua
            energia com a GDTEC.
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg max-w-4xl mx-auto">
                    <CardContent className="p-8 md:p-12">
                      {/* Quote Icon */}
                      <div className="mb-6 text-center">
                        <Quote className="w-12 h-12 text-[#FF6B35] opacity-50 mx-auto" />
                      </div>

                      {/* Rating */}
                      <div className="flex items-center justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-[#FF6B35] text-[#FF6B35]" />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-gray-600 mb-8 leading-relaxed italic text-lg md:text-xl text-center">
                        "{testimonial.text}"
                      </p>

                      {/* Client Info */}
                      <div className="flex items-center justify-center space-x-4">
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div className="text-center">
                          <h4 className="font-semibold text-[#111111] text-lg">{testimonial.name}</h4>
                          <p className="text-gray-500">{testimonial.role}</p>
                          <p className="text-sm text-[#FF6B35]">{testimonial.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200 z-10"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-6 h-6 text-[#004E64]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors duration-200 z-10"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-6 h-6 text-[#004E64]" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? "bg-[#FF6B35]" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-[#F5F5F5] px-6 py-3 rounded-full">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#FF6B35] text-[#FF6B35]" />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-600">4.9/5 baseado em 500+ avaliações</span>
          </div>
        </div>
      </div>
    </section>
  )
}
