import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      title: "Maintenance & Repairs",
      description: "Regular maintenance and repair services to keep your motorcycle running smoothly.",
      icon: "🔧",
    },
    {
      title: "Performance Upgrades",
      description: "Enhance your motorcycle's performance with our custom upgrade packages.",
      icon: "⚡",
    },
    {
      title: "Custom Modifications",
      description: "Personalize your ride with our custom modification services.",
      icon: "🔩",
    },
    {
      title: "Diagnostics",
      description: "Advanced diagnostic services to identify and resolve complex issues.",
      icon: "🔍",
    },
    {
      title: "Tire Services",
      description: "Professional tire mounting, balancing, and replacement services.",
      icon: "🛞",
    },
    {
      title: "Detailing & Cleaning",
      description: "Keep your motorcycle looking its best with our detailing services.",
      icon: "✨",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We offer a comprehensive range of services to keep your motorcycle in perfect condition. Our expert
            technicians use the latest tools and genuine parts for all services.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-8 transition-transform hover:scale-[1.02]">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <Link href="#" className="text-red-500 hover:text-red-400 font-medium flex items-center">
                Learn more <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
