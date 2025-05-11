export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "John D.",
      avatar: "https://i.pravatar.cc/150?img=32",
      text: `Our bike tour with Hai was absolutely brilliant and a highlight of our trip!\n
We cycled through the countryside, visited a tofu farmer and vegetable fields, and met a 100-year-old farmer.\n
Seeing water buffalo, high-fiving kids, and riding basket boats made the experience unforgettable.\n
The food and drinks were delicious, and the sunset boat ride back to Hoi An was magical.\n
Huge thanks to Hai for making my birthday so special and memorable!`,
      rating: 5,
    },
    {
      name: "Sarah M.",
      avatar: "https://i.pravatar.cc/150?img=47",
      text: `We joined the Beep Beep Biking Hoi An tour with Hai and Vy — it was so much fun!\n
Bikes were delivered to our hotel, and we cycled through beautiful rice fields and local villages.\n
We learned how to make tofu, met a 99-year-old farmer, and tried traditional farming techniques.\n
In the coconut forest, we enjoyed coconut water, pancakes, and tried crab fishing in spinning boats.\n
Hai and Vy were knowledgeable, friendly, and made the tour feel authentic and well-organized.`,
      rating: 5,
    },
    {
      name: "Robert K.",
      avatar: "https://i.pravatar.cc/150?img=12",
      text: `This bike tour with Hai was one of the best parts of our Vietnam journey.\n
She brought bikes to our hotel and guided us through hidden countryside gems.\n
We visited a tofu house, met locals, and had fun in the coconut village boats.\n
The variety of stops and experiences made the tour exciting from start to finish.\n
Hai is kind, respectful, and clearly loved by the people she introduced us to — highly recommended!`,
      rating: 5,
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto px-4 container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-3xl md:text-4xl">
            What Our Customers Say
          </h2>
          <div className="bg-red-600 mx-auto mb-6 w-20 h-1"></div>
        </div>
        <div className="gap-8 grid md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-8 rounded-lg text-center"
            >
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="mx-auto mb-4 rounded-full w-16 h-16 object-cover"
              />
              <div className="flex justify-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ${
                      i < testimonial.rating
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-4 text-gray-700 italic whitespace-pre-line">
                "{testimonial.text}"
              </p>
              <p className="font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
