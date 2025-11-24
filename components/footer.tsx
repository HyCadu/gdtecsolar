import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eALzW5oxAYTEV8khzb3mvp8qg2Qpy3.png"
                alt="GDTEC Energia Solar"
                width={120}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transformando a energia do sol em economia real para nossos clientes. Soluções
              completas em energia solar fotovoltaica.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#EB582D] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#EB582D] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#EB582D] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#EB582D] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#EB582D]">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-white transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="/sobre" className="text-gray-400 hover:text-white transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="/cases" className="text-gray-400 hover:text-white transition-colors">
                  Cases de Sucesso
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/contato" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#EB582D]">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">Energia Solar Residencial</span>
              </li>
              <li>
                <span className="text-gray-400">Energia Solar Industrial</span>
              </li>
              <li>
                <span className="text-gray-400">Energia Solar Rural</span>
              </li>
              <li>
                <span className="text-gray-400">Projetos para Igrejas</span>
              </li>
              <li>
                <span className="text-gray-400">Sistemas para Condomínios</span>
              </li>
              <li>
                <span className="text-gray-400">Manutenção e Monitoramento</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#EB582D]">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#EB582D] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">(27) 99263-2552</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#EB582D] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">contato@gdtec.com.br</p>
                  <p className="text-gray-400">vendas@gdtec.com.br</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#EB582D] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">
                  Av. Paulo Pereira Gomes, 1156-A | Edifício Ventura Office
                  <br />Morada de Laranjeiras
                  <br />Serra - ES, 29166-828
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">© 2024 GDTEC Energia Solar. Todos os direitos reservados.</p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                LGPD
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
