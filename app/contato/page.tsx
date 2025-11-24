"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      details: ["(27) 99263-2552"],
      action: "tel:+5527992632552",
    },
    {
      icon: Mail,
      title: "E-mail",
      details: ["contato@gdtec.com.br", "vendas@gdtec.com.br"],
      action: "mailto:contato@gdtec.com.br",
    },
    {
      icon: MapPin,
      title: "Endereço",
      details: [
        "Edifício Ventura Office",
        "Av. Paulo Pereira Gomes, 1156-A",
        "Morada de Laranjeiras, Serra - ES",
        "CEP: 29166-828",
      ],
      action: "#",
    },
    {
      icon: Clock,
      title: "Horário",
      details: ["Segunda à Sexta: 8h às 18h", "Sábado: 8h às 12h"],
      action: "#",
    },
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
            Entre em Contato
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Estamos prontos para ajudar você a dar o primeiro passo rumo à energia solar
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#004E64] to-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#004E64] mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-[#004E64] mb-8">Envie sua Mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo *</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">E-mail *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telefone *</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full"
                      placeholder="(27) 99263-2552"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Assunto</label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Assunto da mensagem"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full"
                    placeholder="Conte sobre o seu consumo de energia (valor da conta, kWh, etc.)"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full bg-[#FF6B35] hover:bg-[#FF6B35]/90 text-white">
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-[#004E64] mb-6">Nossa Localização</h3>
                <div className="rounded-xl overflow-hidden h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4383.320656145741!2d-40.23091475089489!3d-20.19886400312071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb81e9e0e3044c9%3A0x5704ffc712b4e63f!2sAv.%20Paulo%20Pereira%20Gomes%2C%201156%20-%20a%20-%20Morada%20de%20Laranjeiras%2C%20Serra%20-%20ES%2C%2029166-828!5e0!3m2!1spt-BR!2sbr!4v1763927213037!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização GDTEC - Morada de Laranjeiras, Serra - ES"
                  />
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-r from-[#004E64] to-[#FF6B35] rounded-2xl shadow-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Atendimento Rápido</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3" />
                    <span>WhatsApp: (27) 99263-2552</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3" />
                    <span>E-mail: contato@gdtec.com.br</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3" />
                    <span>Resposta em até 2 horas</span>
                  </div>
                </div>
                <Button
                  size="lg"
                  className="w-full mt-6 bg-white text-[#004E64] hover:bg-white/90"
                  onClick={() => {
                    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre energia solar da GDTEC.")
                    window.open(`https://wa.me/5527992632552?text=${message}`, "_blank")
                  }}
                >
                  Chamar no WhatsApp
                </Button>
              </div>
            </motion.div>
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
            Prefere falar por telefone?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Nossa equipe está disponível para esclarecer suas dúvidas e fazer seu orçamento
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="tel:+5527992632552">
              <Button size="lg" className="bg-white text-[#004E64] hover:bg-white/90 px-8 py-4 text-lg font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                Ligar Agora
              </Button>
            </a>
            
          </motion.div>
        </div>
      </section>
    </div>
  )
}
