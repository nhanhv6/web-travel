import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import GallerySection from "@/components/gallery-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import ToursSection from "@/components/tours-section";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ToursSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <Separator />
        <ContactSection />
      </main>
    </div>
  );
}
