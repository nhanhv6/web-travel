import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-black h-[80vh]">
      <div className="z-10 absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
      <Image
        src="/assets/images/hero-section/9ebf5767-4dde-4d30-8652-2ddefea9c9a6.jpg"
        alt="Motorcycle hero image"
        fill
        className="object-cover"
        priority
      />
      <div className="z-20 relative flex flex-col justify-center mx-auto px-4 h-full container">
        <h1 className="mb-4 font-bold text-white text-4xl md:text-6xl">
          Experience the <span className="text-red-600">Thrill</span> of the
          Ride
        </h1>
        <p className="mb-8 max-w-2xl text-gray-200 text-xl">
          Discover our premium selection of motorcycles and professional
          services
        </p>
        <div className="flex sm:flex-row flex-col gap-4">
          <Link
            href="#motorcycles"
            className="inline-flex justify-center items-center bg-red-600 hover:bg-red-700 px-8 py-3 rounded-md font-medium text-white transition-colors"
          >
            Explore Motorcycles
          </Link>
          <Link
            href="#contact"
            className="inline-flex justify-center items-center bg-white hover:bg-gray-100 px-8 py-3 rounded-md font-medium text-gray-900 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
