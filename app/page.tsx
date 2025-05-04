import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import MotorcyclesSection from "@/components/motorcycles-section"
import ServicesSection from "@/components/services-section"
import GallerySection from "@/components/gallery-section"
import TestimonialsSection from "@/components/testimonials-section"
import ContactSection from "@/components/contact-section"
import ToursSection from "@/components/tours-section"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <MotorcyclesSection />
        <ToursSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <Separator />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
