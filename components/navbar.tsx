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
  const [isScrolled, setIsScrolled] = useState(false)
  const [showSegmentsDropdown, setShowSegmentsDropdown] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Início" },
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
    { href: "/cases", label: "Cases" },
    { href: "/sobre", label: "Sobre Nós" },
    { href: "/depoimentos", label: "Depoimentos" },
    { href: "/contato", label: "Contato" },
    { href: "/faq", label: "FAQ" },
  ]

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eALzW5oxAYTEV8khzb3mvp8qg2Qpy3.png"
                alt="GDTEC Energia Solar"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
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
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="tel:+5511999999999"
              className="flex items-center space-x-2 text-[#2D4A5B] hover:text-[#EB582D] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">(11) 99999-9999</span>
            </motion.a>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-[#EB582D] hover:bg-[#EB582D]/90 text-white">Orçamento Grátis</Button>
            </motion.div>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#2D4A5B] hover:text-[#EB582D] transition-colors"
            >
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
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
                  <a href="tel:+5511999999999" className="flex items-center space-x-2 text-[#2D4A5B]">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">(11) 99999-9999</span>
                  </a>
                  <Button className="w-full bg-[#EB582D] hover:bg-[#EB582D]/90 text-white">Orçamento Grátis</Button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
