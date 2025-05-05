export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "John D.",
      text: "I've been a customer for over 5 years now. The service is always excellent and the staff is knowledgeable and friendly. Highly recommended!",
      rating: 5,
    },
    {
      name: "Sarah M.",
      text: "Bought my first bicycles here and the experience was amazing. They helped me choose the perfect bike for my needs and provided great after-sales support.",
      rating: 5,
    },
    {
      name: "Robert K.",
      text: "The maintenance service is top-notch. My bike always runs perfectly after a service here. The prices are fair and the work is done quickly.",
      rating: 4,
    },
  ]

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto px-4 container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-3xl md:text-4xl">What Our Customers Say</h2>
          <div className="bg-red-600 mx-auto mb-6 w-20 h-1"></div>
        </div>
        <div className="gap-8 grid md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white shadow-lg p-8 rounded-lg">
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-500" : "text-gray-300"}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-4 text-gray-700 italic">"{testimonial.text}"</p>
              <p className="font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
