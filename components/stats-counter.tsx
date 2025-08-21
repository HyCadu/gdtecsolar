"use client"

import { useEffect, useState, useRef } from "react"

interface CounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
}

function Counter({ end, duration = 2000, prefix = "", suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isVisible, end, duration])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-white">
      {prefix}
      {count.toLocaleString("pt-BR")}
      {suffix}
    </div>
  )
}

export default function StatsCounter() {
  return (
    <section className="bg-[#004E64] py-8 md:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-2">
            <Counter end={500} suffix="+" />
            <p className="text-white/90 text-base font-medium">Projetos Entregues</p>
            <p className="text-white/70 text-sm">Em todo o Brasil</p>
          </div>

          <div className="space-y-2">
            <Counter end={2} prefix="R$ " suffix="M+" />
            <p className="text-white/90 text-base font-medium">Economia Gerada</p>
            <p className="text-white/70 text-sm">Para nossos clientes</p>
          </div>

          <div className="space-y-2">
            <Counter end={15000} suffix="+" />
            <p className="text-white/90 text-base font-medium">Módulos Instalados</p>
            <p className="text-white/70 text-sm">Alta eficiência</p>
          </div>

          <div className="space-y-2">
            <Counter end={100} suffix="%" />
            <p className="text-white/90 text-base font-medium">Satisfação</p>
            <p className="text-white/70 text-sm">Dos clientes</p>
          </div>
        </div>
      </div>
    </section>
  )
}
