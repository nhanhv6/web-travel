import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About DemoMoto</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Your Trusted Motorcycle Partner</h3>
            <p className="text-gray-700 mb-6">
              Founded in 2010, DemoMoto has been providing premium motorcycles and exceptional service to enthusiasts
              across the country. Our passion for motorcycles drives us to offer only the best products and services to
              our valued customers.
            </p>
            <p className="text-gray-700 mb-6">
              With a team of experienced professionals and state-of-the-art facilities, we ensure that every motorcycle
              we sell meets the highest standards of quality and performance.
            </p>
            <div className="flex items-center gap-8 mt-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-red-600">10+</p>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-red-600">500+</p>
                <p className="text-gray-600">Happy Customers</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-red-600">50+</p>
                <p className="text-gray-600">Expert Staff</p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image src="/placeholder.svg?height=800&width=600" alt="Motorcycle shop" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
