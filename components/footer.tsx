import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image
                src="/GDTEC_logo_branco.png"
                alt="GDTEC Energia Solar"
                width={250}
                height={100}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transformando a energia do sol em economia real para nossos clientes. Soluções
              completas em energia solar fotovoltaica.
            </p>
            <div className="flex space-x-4">
             <a href="https://www.instagram.com/gdtecsolar/" className="text-gray-400 hover:text-[#EB582D] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/gdtecsolar/" className="text-gray-400 hover:text-[#EB582D] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/gdtecsolar/" className="text-gray-400 hover:text-[#EB582D] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              {/*<a href="#" className="text-gray-400 hover:text-[#EB582D] transition-colors">
                <Youtube className="w-5 h-5" />
              </a>*/}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#EB582D]">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="/segmentos" className="text-gray-400 hover:text-white transition-colors">
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
                  Projetos de Sucesso
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
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
              <Dialog>
                <DialogTrigger className="text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-[#EB582D] pb-0.5">
                  Política de Privacidade
                </DialogTrigger>
                <DialogContent className="max-w-3xl bg-white text-gray-700">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-[#EB582D]">Política de Privacidade</DialogTitle>
                    <DialogDescription className="text-gray-500">
                      Entenda como coletamos, utilizamos e protegemos os seus dados nos serviços GDTEC.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 text-sm leading-relaxed max-h-[70vh] overflow-y-auto pr-2">
                    <p>
                      Valorizamos a transparência e tratamos suas informações pessoais com responsabilidade. Os dados
                      informados em formulários, simulações ou canais de atendimento são armazenados de maneira segura e
                      utilizados exclusivamente para apresentar soluções em energia solar, realizar follow-ups e cumprir
                      obrigações legais.
                    </p>
                    <div>
                      <h4 className="text-[#004E64] font-semibold mb-2">Como utilizamos seus dados</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>Envio de propostas personalizadas e acompanhamento comercial.</li>
                        <li>Comunicação sobre etapas do projeto, suporte técnico e novidades relevantes.</li>
                        <li>Geração de relatórios internos para melhoria contínua dos serviços.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[#004E64] font-semibold mb-2">Seus direitos</h4>
                      <p>
                        Você pode solicitar a atualização ou remoção dos seus dados a qualquer momento. Basta entrar em
                        contato pelos canais oficiais da GDTEC que responderemos rapidamente, seguindo as diretrizes da
                        LGPD.
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger className="text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-[#EB582D] pb-0.5">
                  Termos de Uso
                </DialogTrigger>
                <DialogContent className="max-w-3xl bg-white text-gray-700">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-[#EB582D]">Termos de Uso</DialogTitle>
                    <DialogDescription className="text-gray-500">
                      Saiba como utilizar o site e os serviços digitais da GDTEC com segurança e clareza.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 text-sm leading-relaxed max-h-[70vh] overflow-y-auto pr-2">
                    <p>
                      Ao navegar por nossas páginas, o usuário concorda em utilizar os conteúdos apenas para fins
                      informativos ou de contratação dos serviços GDTEC. Todo o material visual e textual é protegido
                      por direitos autorais e não pode ser reproduzido sem autorização prévia.
                    </p>
                    <div>
                      <h4 className="text-[#004E64] font-semibold mb-2">Responsabilidades do usuário</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        <li>Fornecer informações verídicas ao solicitar orçamento ou suporte.</li>
                        <li>Não realizar ações que comprometam a segurança ou disponibilidade do site.</li>
                        <li>Respeitar a privacidade e a propriedade intelectual da GDTEC.</li>
                      </ul>
                    </div>
                    <p>
                      Reservamo-nos o direito de atualizar estes termos para acompanhar ajustes legais ou melhorias de
                      produto. Recomendamos revisar o conteúdo regularmente.
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
