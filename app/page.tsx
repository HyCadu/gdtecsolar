import HeroSection from "@/components/hero-section"
import StatsCounter from "@/components/stats-counter"
import AboutSection from "@/components/about-section"
import ServicesSegments from "@/components/services-segments"
import SuccessCases from "@/components/success-cases"
import FinancingSection from "@/components/financing-section"
import PartnersCertifications from "@/components/partners-certifications"
import ContactSection from "@/components/contact-section"
import FAQ from "@/components/faq"
import SolarSimulator from "@/components/solar-simulator"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsCounter />
      <AboutSection />
      <ServicesSegments />
      <SuccessCases />
      <FinancingSection />
      <PartnersCertifications />
      <ContactSection />
      <FAQ />
      <SolarSimulator />
    </main>
  )
}
