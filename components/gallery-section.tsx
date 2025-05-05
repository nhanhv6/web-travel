import Image from "next/image"

export default function GallerySection() {
  const images = [
    "/assets/images/gallery/gallery-1.jpg",
    "/assets/images/gallery/gallery-2.jpg",
    "/assets/images/gallery/gallery-3.jpg",
    "/assets/images/gallery/gallery-4.jpg",
    "/assets/images/gallery/gallery-5.jpg",
    "/assets/images/gallery/gallery-6.jpg",
    "/assets/images/gallery/gallery-7.jpg",
    "/assets/images/gallery/gallery-8.jpg",
  ];
  return (
    <section id="gallery" className="py-20">
      <div className="mx-auto px-4 container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-3xl md:text-4xl">Gallery</h2>
          <div className="bg-red-600 mx-auto mb-6 w-20 h-1"></div>
          <p className="mx-auto max-w-3xl text-gray-700">
            Take a look at our showroom, workshop, and some of our happy customers with their motorcycles.
          </p>
        </div>
        <div className="gap-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((value, index) => (
            <div key={index} className="group relative rounded-lg h-64 overflow-hidden">
              <Image
                 src={value}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 flex justify-center items-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-white p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
