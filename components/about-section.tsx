import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="mx-auto px-4 container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-3xl md:text-4xl">About DemoMoto</h2>
          <div className="bg-red-600 mx-auto w-20 h-1"></div>
        </div>
        <div className="items-center gap-12 grid md:grid-cols-2">
          <div>
            <h3 className="mb-4 font-semibold text-2xl">Your Trusted Motorcycle Partner</h3>
            <p className="mb-6 text-gray-700">
              Founded in 2010, DemoMoto has been providing premium motorcycles and exceptional service to enthusiasts
              across the country. Our passion for motorcycles drives us to offer only the best products and services to
              our valued customers.
            </p>
            <p className="mb-6 text-gray-700">
              With a team of experienced professionals and state-of-the-art facilities, we ensure that every bicycles
              we sell meets the highest standards of quality and performance.
            </p>
            <div className="flex items-center gap-8 mt-8">
              <div className="text-center">
                <p className="font-bold text-red-600 text-4xl">10+</p>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-red-600 text-4xl">500+</p>
                <p className="text-gray-600">Happy Customers</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-red-600 text-4xl">50+</p>
                <p className="text-gray-600">Expert Staff</p>
              </div>
            </div>
          </div>
          <div className="relative shadow-xl rounded-lg h-[400px] overflow-hidden">
            <Image src="/assets/images/about/about-1.jpg" alt="Motorcycle shop" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
