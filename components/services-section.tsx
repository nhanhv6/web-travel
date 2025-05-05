import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      title: "Maintenance & Repairs",
      description: "Regular maintenance and repair services to keep your bicycles running smoothly.",
      icon: "🔧",
    },
    {
      title: "Performance Upgrades",
      description: "Enhance your bicycles's performance with our custom upgrade packages.",
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
      description: "Keep your bicycles looking its best with our detailing services.",
      icon: "✨",
    },
  ]

  return (
    <section id="services" className="bg-gray-900 py-20 text-white">
      <div className="mx-auto px-4 container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-3xl md:text-4xl">Our Services</h2>
          <div className="bg-red-600 mx-auto mb-6 w-20 h-1"></div>
          <p className="mx-auto max-w-3xl text-gray-300">
            We offer a comprehensive range of services to keep your bicycles in perfect condition. Our expert
            technicians use the latest tools and genuine parts for all services.
          </p>
        </div>
        <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg hover:scale-[1.02] transition-transform">
              <div className="mb-4 text-4xl">{service.icon}</div>
              <h3 className="mb-3 font-bold text-xl">{service.title}</h3>
              <p className="mb-4 text-gray-400">{service.description}</p>
              <Link href="#" className="flex items-center font-medium text-red-500 hover:text-red-400">
                Learn more <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
