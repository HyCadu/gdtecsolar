import HeroSection from "@/components/hero-section"
import StatsCounter from "@/components/stats-counter"
import ServicesSegments from "@/components/services-segments"
import SuccessCases from "@/components/success-cases"
import AboutSection from "@/components/about-section"
import Testimonials from "@/components/testimonials"
import PartnersCertifications from "@/components/partners-certifications"
import FAQ from "@/components/faq"
import ContactSection from "@/components/contact-section"
import SolarSimulator from "@/components/solar-simulator"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsCounter />
      <ServicesSegments />
      <SuccessCases />
      <AboutSection />
      <Testimonials />
      <PartnersCertifications />
      <ContactSection />
      <FAQ />
      <SolarSimulator />
    </main>
  )
}
