"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showSegmentsDropdown, setShowSegmentsDropdown] = useState(false)
  const pathname = usePathname()
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre energia solar da GDTEC.")
    window.open(`https://wa.me/5527992632552?text=${message}`, "_blank")
  }

  const navLinks = [
    { href: "/", label: "Início" },
    { href: "/sobre", label: "Sobre Nós" },
    {
      href: "/segmentos",
      label: "Segmentos",
      hasDropdown: true,
      subLinks: [
        { href: "/segmentos/residencial", label: "Residencial" },
        { href: "/segmentos/comercial", label: "Comercial" },
        { href: "/segmentos/industrial", label: "Industrial" },
        { href: "/segmentos/rural", label: "Rural" },
      ],
    },
    { href: "/cases", label: "Projetos de Sucesso" },
    { href: "/financiamentos", label: "Financiamentos" },
    { href: "/depoimentos", label: "Depoimentos" },
    { href: "/contato", label: "Contato" },
    { href: "/faq", label: "FAQ" },
  ]

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md transform-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3 group -ml-1 sm:-ml-3 lg:-ml-3">
            <div className="hover:scale-105 transition-transform duration-200">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eALzW5oxAYTEV8khzb3mvp8qg2Qpy3.png"
                alt="GDTEC Energia Solar"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                {link.hasDropdown ? (
                  <div
                    onMouseEnter={() => setShowSegmentsDropdown(true)}
                    onMouseLeave={() => setShowSegmentsDropdown(false)}
                  >
                                      <Link
                    href={link.href}
                    className={`flex items-center space-x-1 transition-colors duration-200 font-medium relative ${
                      isActiveLink(link.href) ? "text-[#EB582D]" : "text-[#111111] hover:text-[#EB582D]"
                    }`}
                  >
                    <span className="relative">
                      {link.label}
                      <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#EB582D] transition-all duration-300 group-hover:w-full ${
                        isActiveLink(link.href) ? "w-full" : ""
                      }`}></span>
                    </span>
                    <ChevronDown className="w-4 h-4" />
                  </Link>

                    <AnimatePresence>
                      {showSegmentsDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                        >
                          {link.subLinks?.map((subLink) => (
                            <Link
                              key={subLink.href}
                              href={subLink.href}
                              className={`block px-4 py-2 transition-colors ${
                                isActiveLink(subLink.href)
                                  ? "text-[#EB582D] bg-[#F5F5F5]"
                                  : "text-[#111111] hover:text-[#EB582D] hover:bg-[#F5F5F5]"
                              }`}
                            >
                              {subLink.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={`transition-colors duration-200 font-medium relative group ${
                      isActiveLink(link.href) ? "text-[#EB582D]" : "text-[#111111] hover:text-[#EB582D]"
                    }`}
                  >
                    <span className="relative">
                      {link.label}
                      <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-[#EB582D] transition-all duration-300 group-hover:w-full ${
                        isActiveLink(link.href) ? "w-full" : ""
                      }`}></span>
                    </span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4 -mr-2 sm:-mr-4 lg:-mr-6">
            
            <div className="hover:scale-105 transform duration-200">
              <Button className="bg-[#EB582D] hover:bg-[#EB582D]/90 text-white" onClick={handleWhatsAppClick}>Orçamento Grátis</Button>
            </div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#2D4A5B] hover:text-[#EB582D] transition-colors"
            >
              <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </div>
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-white border-t border-gray-200 shadow-lg overflow-hidden"
            >
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="px-2 pt-2 pb-3 space-y-1"
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={`block px-3 py-2 rounded-md transition-colors relative group ${
                        isActiveLink(link.href)
                          ? "text-[#EB582D] bg-[#F5F5F5]"
                          : "text-[#111111] hover:text-[#EB582D] hover:bg-[#F5F5F5]"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="relative">
                        {link.label}
                        <span className={`absolute -bottom-0.5 left-3 right-3 h-0.5 bg-[#EB582D] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                          isActiveLink(link.href) ? "scale-x-100" : ""
                        }`}></span>
                      </span>
                    </Link>
                    {link.hasDropdown && (
                      <div className="ml-4 space-y-1">
                        {link.subLinks?.map((subLink) => (
                          <Link
                            key={subLink.href}
                            href={subLink.href}
                            className={`block px-3 py-1 text-sm rounded-md transition-colors ${
                              isActiveLink(subLink.href)
                                ? "text-[#EB582D] bg-[#F5F5F5]"
                                : "text-[#111111] hover:text-[#EB582D] hover:bg-[#F5F5F5]"
                            }`}
                            onClick={() => setIsOpen(false)}
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  className="px-3 py-2 space-y-2"
                >
                  <a href="tel:+5527992632552" className="flex items-center space-x-2 text-[#2D4A5B]">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">(27) 99263-2552</span>
                  </a>
                  <Button className="w-full bg-[#EB582D] hover:bg-[#EB582D]/90 text-white">Orçamento Grátis</Button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
