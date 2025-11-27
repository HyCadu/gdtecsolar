"use client"

import { motion } from "framer-motion"
import { Star, Quote, User, Play, Pause, ArrowLeft, ArrowRight, Maximize2, Minimize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { handleWhatsAppClick } from "@/components/whatsapp-button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useState, useRef, useEffect, useCallback } from "react"

// Componente de Vídeo do Carrossel
function VideoPlayer({ 
  src, 
  title, 
  index,
  onPlay,
  videoRef: setVideoRef
}: { 
  src: string
  title: string
  index: number
  onPlay?: () => void
  videoRef?: (ref: HTMLVideoElement | null) => void
}) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Expõe a referência do vídeo para o componente pai
  useEffect(() => {
    if (setVideoRef && videoRef.current) {
      setVideoRef(videoRef.current)
    }
    return () => {
      if (setVideoRef) {
        setVideoRef(null)
      }
    }
  }, [setVideoRef])

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        // Pausa todos os outros vídeos antes de tocar este
        onPlay?.()
        videoRef.current.play()
      }
    }
  }

  const handleLoadedData = () => {
    setIsLoaded(true)
    // Atualiza a referência quando o vídeo é carregado
    if (setVideoRef && videoRef.current) {
      setVideoRef(videoRef.current)
    }
  }

  const toggleFullscreen = async () => {
    if (!containerRef.current) return

    try {
      if (!isFullscreen) {
        if (containerRef.current.requestFullscreen) {
          await containerRef.current.requestFullscreen()
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen()
        }
      }
    } catch (error) {
      console.error("Erro ao alternar tela cheia:", error)
    }
  }

  // Monitora mudanças de fullscreen
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [])


  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex items-center justify-center rounded-xl overflow-hidden shadow-2xl bg-gray-900 group mx-auto"
      style={{ 
        aspectRatio: '9/16',
        width: 'min(400px, 90vw)',
        maxHeight: '80vh'
      }}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-contain"
        onLoadedData={handleLoadedData}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        playsInline
        preload="metadata"
      />
      
      {/* Overlay com controles */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 z-10 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-0'}`}>
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2">
          <h3 className="text-white font-semibold text-lg truncate">{title}</h3>
          <div className="flex items-center gap-2">
            <button
              onClick={togglePlay}
              className="bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6" />
              ) : (
                <Play className="w-6 h-6 ml-1" />
              )}
            </button>
            <button
              onClick={toggleFullscreen}
              className="bg-[#004E64] hover:bg-[#004E64]/90 text-white rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label={isFullscreen ? "Sair da tela cheia" : "Tela cheia"}
            >
              {isFullscreen ? (
                <Minimize2 className="w-6 h-6" />
              ) : (
                <Maximize2 className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Botão de play central quando pausado */}
      {!isPlaying && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          onClick={(e) => {
            e.stopPropagation()
            togglePlay()
          }}
          className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors duration-300 z-20"
          aria-label="Reproduzir vídeo"
          type="button"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-20 h-20 bg-[#FF6B35] rounded-full flex items-center justify-center shadow-2xl pointer-events-none"
          >
            <Play className="w-10 h-10 text-white ml-1" />
          </motion.div>
        </motion.button>
      )}

      {/* Loading state */}
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border-4 border-[#FF6B35] border-t-transparent rounded-full"
          />
        </div>
      )}
    </motion.div>
  )
}

// Componente do Carrossel de Vídeos
function VideoCarousel() {
  const videos = [
    {
      src: "/vid/Depoimento1.MOV",
      title: "Depoimento 1",
    },
    {
      src: "/vid/Depoimento2.MOV",
      title: "Depoimento 2",
    },
    {
      src: "/vid/Depoimento3.MOV",
      title: "Depoimento 3",
    },
    {
      src: "/vid/Depoimento4.MOV",
      title: "Depoimento 4",
    },
  ]

  const [api, setApi] = useState<any>(null)
  const [current, setCurrent] = useState(0)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  // Função para pausar todos os vídeos exceto o atual
  const pauseAllVideosExcept = useCallback((currentIndex: number) => {
    videoRefs.current.forEach((video, index) => {
      if (video && index !== currentIndex && !video.paused) {
        video.pause()
      }
    })
  }, [])

  // Callback quando um vídeo começa a tocar
  const handleVideoPlay = useCallback((index: number) => {
    pauseAllVideosExcept(index)
  }, [pauseAllVideosExcept])

  useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      const newIndex = api.selectedScrollSnap()
      setCurrent(newIndex)
      // Pausa todos os vídeos quando muda de slide
      pauseAllVideosExcept(-1)
    })
  }, [api, pauseAllVideosExcept])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative"
    >
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-5xl mx-auto"
      >
        <CarouselContent className="-ml-2 md:-ml-4 flex items-center">
          {videos.map((video, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-auto flex items-center justify-center">
              <VideoPlayer 
                src={video.src} 
                title={video.title} 
                index={index}
                onPlay={() => handleVideoPlay(index)}
                videoRef={(ref) => {
                  videoRefs.current[index] = ref
                }}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Botões de navegação desktop */}
        <CarouselPrevious className="hidden md:flex -left-12 lg:-left-16 bg-white/90 hover:bg-white border-2 border-[#004E64] text-[#004E64] hover:text-[#FF6B35] shadow-lg transition-all duration-300 hover:scale-110" />
        <CarouselNext className="hidden md:flex -right-12 lg:-right-16 bg-white/90 hover:bg-white border-2 border-[#004E64] text-[#004E64] hover:text-[#FF6B35] shadow-lg transition-all duration-300 hover:scale-110" />
      </Carousel>

      {/* Controles mobile e indicadores */}
      <div className="mt-8 space-y-4">
        {/* Botões de navegação mobile */}
        <div className="flex justify-center gap-4 md:hidden">
          <motion.button
            onClick={() => api?.scrollPrev()}
            className="bg-[#004E64] text-white p-3 rounded-full shadow-lg hover:bg-[#FF6B35] transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Depoimento anterior"
          >
            <ArrowLeft className="w-5 h-5" />
          </motion.button>
          <motion.button
            onClick={() => api?.scrollNext()}
            className="bg-[#004E64] text-white p-3 rounded-full shadow-lg hover:bg-[#FF6B35] transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Próximo depoimento"
          >
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Indicadores de slide */}
        <div className="flex justify-center gap-2">
          {videos.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === index
                  ? "bg-[#FF6B35] w-8"
                  : "bg-gray-300 w-2 hover:bg-gray-400"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function DepoimentosPage() {
  const testimonials = [
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
  ]

  const stats = [
    { number: "98%", label: "Satisfação dos Clientes" },
    { number: "5000+", label: "Depoimentos Positivos" },
    { number: "4.9/5", label: "Avaliação Média" },
    { number: "95%", label: "Recomendação" },
  ]

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#004E64] to-[#FF6B35]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Depoimentos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Veja o que nossos clientes falam sobre a experiência com a GDTEC
          </motion.p>
        </div>
      </section>

      {/* Video Testimonials Section - Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-[#004E64] text-center mb-16"
          >
            Depoimentos em Vídeo
          </motion.h2>
          
          <VideoCarousel />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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
            {testimonials.map((testimonial, index) => (
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


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#004E64] to-[#FF6B35]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Seja o próximo a economizar
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Junte-se aos milhares de clientes satisfeitos e comece a economizar hoje mesmo
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button size="lg" className="bg-white text-[#004E64] hover:bg-white/90 px-8 py-4 text-lg font-semibold" onClick = {handleWhatsAppClick}>
              Solicitar Orçamento Grátis
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
