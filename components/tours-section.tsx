import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, Users, ChevronRight } from "lucide-react"

export default function ToursSection() {
  const tours = [
    {
      id: 1,
      name: "Mountain Pass Adventure",
      image: "/placeholder.svg?height=600&width=800&text=Mountain+Pass",
      duration: "3 days",
      distance: "450 km",
      difficulty: "Intermediate",
      groupSize: "5-10 riders",
      description:
        "Experience the thrill of riding through scenic mountain passes with breathtaking views. This tour takes you through winding roads and spectacular landscapes.",
      price: "$599",
    },
    {
      id: 2,
      name: "Coastal Highway Expedition",
      image: "/placeholder.svg?height=600&width=800&text=Coastal+Highway",
      duration: "5 days",
      distance: "780 km",
      difficulty: "Beginner-Friendly",
      groupSize: "8-15 riders",
      description:
        "Ride along stunning coastal highways with ocean views and beach stops. Perfect for riders looking for a relaxed pace with beautiful scenery.",
      price: "$899",
    },
    {
      id: 3,
      name: "Off-Road Wilderness Trail",
      image: "/placeholder.svg?height=600&width=800&text=Wilderness+Trail",
      duration: "4 days",
      distance: "320 km",
      difficulty: "Advanced",
      groupSize: "4-8 riders",
      description:
        "Challenge yourself on rugged off-road trails through forests and wilderness. This adventure is designed for experienced riders seeking an adrenaline rush.",
      price: "$749",
    },
    {
      id: 4,
      name: "Historic Villages Tour",
      image: "/placeholder.svg?height=600&width=800&text=Historic+Villages",
      duration: "2 days",
      distance: "280 km",
      difficulty: "Beginner-Friendly",
      groupSize: "6-12 riders",
      description:
        "Discover charming historic villages and cultural landmarks on this leisurely paced tour. Enjoy local cuisine and learn about regional history.",
      price: "$399",
    },
  ]

  return (
    <section id="tours" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Tours</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Join our guided motorcycle tours and experience the thrill of the open road with fellow riders. Our
            professional guides ensure a safe and unforgettable adventure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-[1.02]"
            >
              <div className="relative h-64">
                <Image src={tour.image || "/placeholder.svg"} alt={tour.name} fill className="object-cover" />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {tour.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{tour.name}</h3>
                <p className="text-gray-700 mb-4">{tour.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-red-600 mr-2" />
                    <span className="text-gray-700">{tour.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-red-600 mr-2" />
                    <span className="text-gray-700">{tour.distance}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-red-600 mr-2" />
                    <span className="text-gray-700">{tour.difficulty}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-red-600 mr-2" />
                    <span className="text-gray-700">{tour.groupSize}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <Link
                    href={`/tours/${tour.id}`}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-medium transition-colors inline-flex items-center"
                  >
                    Book Now
                  </Link>
                  <Link
                    href={`/tours/${tour.id}`}
                    className="text-red-600 hover:text-red-700 font-medium flex items-center"
                  >
                    Tour Details <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/tours"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium transition-colors inline-flex items-center justify-center"
          >
            View All Tours
          </Link>
        </div>
      </div>
    </section>
  )
}
