import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto px-4 container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-bold text-gray-800 text-4xl">
            THANH HAI TRAVEL COMPANY
          </h2>
          <div className="bg-red-600 mx-auto w-20 h-1"></div>
        </div>

        <div className="items-start gap-12 grid md:grid-cols-2">
          <div>
            <h3 className="mb-4 font-semibold text-gray-800 text-2xl">
              About Us
            </h3>
            <p className="mb-4 text-gray-700">
              At Thanh Hai Travel, we are passionate about sharing the beauty and charm of Hoi An with travelers from around the world. As a local tour operator, we specialize in creating unforgettable experiences that showcase the best of this enchanting town and its surroundings.
            </p>
            <p className="mb-4 text-gray-700">
              Our mission is to provide our guests with a deep understanding and appreciation of Hoi An's rich history, culture, and natural beauty.
            </p>

            <h3 className="mt-8 mb-4 font-semibold text-gray-800 text-2xl">
              Why Choose Us
            </h3>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>
                <strong>Local expertise:</strong> Our guides are all locals who know Hoi An intimately, and can provide insights and anecdotes that you won't find in any guidebook.
              </li>
              <li>
                <strong>Small group sizes:</strong> We keep our group sizes small to ensure that you get a personalized experience and can interact with our guides and the locals.
              </li>
              <li>
                <strong>Authentic experiences:</strong> We're passionate about sharing the authentic culture and traditions of Hoi An, and we strive to create experiences that are meaningful and memorable.
              </li>
              <li>
                <strong>Sustainable tourism:</strong> We're committed to sustainable tourism practices that benefit the local community and minimize our impact on the environment.
              </li>
            </ul> 
          </div>

          <div className="relative shadow-2xl border-[6px] border-red-100 rounded-2xl aspect-[5/4] overflow-hidden">
            <Image
              src="/assets/images/about/about-1.jpg"
              alt="Thanh Hai Travel - Hoi An"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <div className="absolute inset-0 bg-black/10 rounded-2xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
