import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-[80vh]">
      <div className="z-10 absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      <Image
        src="/assets/images/hero-section/9ebf5767-4dde-4d30-8652-2ddefea9c9a6.jpg"
        alt="Motorcycle hero image"
        fill
        className="object-cover"
        priority
      />

      <div className="z-20 relative flex flex-col justify-end items-center mx-auto px-4 pb-20 h-full text-center container">
        <h1 className="drop-shadow-lg font-extrabold text-white text-4xl md:text-6xl">
          Experience Authentic <span className="text-red-500">Hoi An</span> with
          a Local Guide
        </h1>
      </div>
    </section>
  );
}
