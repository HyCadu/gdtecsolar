const partners = [
  {
    name: "Canadian Solar",
    logo: "/canadian-solar-logo.png",
  },
  {
    name: "Jinko Solar",
    logo: "/jinko-solar-logo.png",
  },
  {
    name: "Fronius",
    logo: "/fronius-inverter-logo.png",
  },
  {
    name: "SMA",
    logo: "/placeholder.svg?height=80&width=160",
  },
  {
    name: "Growatt",
    logo: "/placeholder.svg?height=80&width=160",
  },
  {
    name: "Trina Solar",
    logo: "/placeholder.svg?height=80&width=160",
  },
]

const certifications = [
  {
    name: "ANEEL",
    logo: "/placeholder.svg?height=80&width=160",
  },
  {
    name: "INMETRO",
    logo: "/placeholder.svg?height=80&width=160",
  },
  {
    name: "ABGD",
    logo: "/placeholder.svg?height=80&width=160",
  },
  {
    name: "ISO 9001",
    logo: "/placeholder.svg?height=80&width=160",
  },
]

export default function PartnersCertifications() {
  return (
    <section className="py-16 md:py-16 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Partners Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              Nossos
              <span className="text-[#FF6B35]"> Parceiros</span>
            </h2>
            <p className="text-lg text-gray-600">Trabalhamos com as melhores marcas do mercado mundial</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="max-h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              Certificações e<span className="text-[#FF6B35]"> Qualidade</span>
            </h2>
            <p className="text-lg text-gray-600">Certificados pelos principais órgãos reguladores</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={cert.logo || "/placeholder.svg"}
                  alt={cert.name}
                  className="max-h-16 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
