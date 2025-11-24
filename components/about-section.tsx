import { Button } from "@/components/ui/button"
import { Award, Users, Zap, Shield } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Certificações",
    description: "Empresa certificada com as principais normas do setor",
  },
  {
    icon: Users,
    title: "Equipe Especializada",
    description: "Engenheiros e técnicos altamente qualificados",
  },
  {
    icon: Zap,
    title: "Tecnologia Avançada",
    description: "Equipamentos de última geração e alta eficiência",
  },
  {
    icon: Shield,
    title: "Garantia Estendida",
    description: "Garantia de até 25 anos nos equipamentos",
  },
]

export default function AboutSection() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111111] mb-6">
              Sobre a<span className="text-[#FF6B35]"> GDTEC</span>
            </h2>

            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              A GDTEC é referência em soluções fotovoltaicas no Brasil. Nossa missão é democratizar o acesso à energia limpa e renovável.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Com mais de 500 projetos entregues e uma equipe de engenheiros especializados, oferecemos desde o projeto
              até a manutenção do seu sistema solar, garantindo máxima eficiência e economia.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-[#FF6B35] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#111111] mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/gdtecbaner.jpg"
                alt="Equipe GDTEC instalando painéis solares"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#004E64]/20 to-transparent"></div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF6B35] mb-1">1.000+</div>
                <div className="text-sm text-gray-600">Projetos Entregues</div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FF6B35] mb-1">30.000+</div>
                <div className="text-sm text-gray-600">Módulos Instalados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
