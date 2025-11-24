import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import SimulatorPanel from "@/components/simulator-panel"
import { SimulatorProvider } from "@/contexts/simulator-context"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "GDTEC - Energia Solar | Soluções Sustentáveis",
  description:
    "A GDTEC é especialista em energia solar fotovoltaica. Oferecemos soluções completas para residências, empresas e agronegócio. Solicite seu orçamento gratuito!",
  keywords: "energia solar, fotovoltaica, sustentabilidade, economia de energia, GDTEC",
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon.jpg-PKv583Oe8nsnLM7dmk9VkDuYPCpqGs.jpeg",
    shortcut: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon.jpg-PKv583Oe8nsnLM7dmk9VkDuYPCpqGs.jpeg",
    apple: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon.jpg-PKv583Oe8nsnLM7dmk9VkDuYPCpqGs.jpeg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} antialiased`}>
      <head>
        <link
          rel="icon"
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/favicon.jpg-PKv583Oe8nsnLM7dmk9VkDuYPCpqGs.jpeg"
        />
      </head>
      <body className="font-sans">
        <SimulatorProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />

            {/* Global floating elements */}
            <WhatsAppButton />
            <SimulatorPanel />
          </div>
        </SimulatorProvider>
      </body>
    </html>
  )
}
