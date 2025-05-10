"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, MapPin, Users, ChevronRight } from "lucide-react";
import { useTourContext } from "@/context/TourContext";

export default function ToursSection() {
  const { tours } = useTourContext();

  return (
    <section id="tours" className="bg-gray-50 py-20">
      <div className="mx-auto px-4 container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-3xl md:text-4xl">Our Tours</h2>
          <div className="bg-red-600 mx-auto mb-6 w-20 h-1"></div>
          <p className="mx-auto max-w-3xl text-gray-700">
            Join our guided bicycles tours and experience the thrill of the open
            road with fellow riders. Our professional guides ensure a safe and
            unforgettable adventure.
          </p>
        </div>

        <div className="gap-8 grid md:grid-cols-2">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-[1.02] transition-transform"
            >
              <div className="relative aspect-[16/9] sm:aspect-[21/9]">
                <Image
                  src={tour.image || "/placeholder.svg"}
                  alt={tour.title}
                  width={800}
                  height={450}
                  className="w-full h-auto object-contain"
                />
                <div className="top-4 right-4 absolute bg-red-600 px-3 py-1 rounded-full font-medium text-white text-sm">
                  {tour.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-3 font-bold text-2xl">{tour.slug}</h3>
                <p className="mb-4 text-gray-700">{tour.description}</p>

                <div className="gap-4 grid grid-cols-2 mb-6">
                  <div className="flex items-center">
                    <Calendar className="mr-2 w-5 h-5 text-red-600" />
                    <span className="text-gray-700">{tour.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 w-5 h-5 text-red-600" />
                    <span className="text-gray-700">{tour.distance}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 w-5 h-5 text-red-600" />
                    <span className="text-gray-700">{tour.difficulty}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="mr-2 w-5 h-5 text-red-600" />
                    <span className="text-gray-700">{tour.groupSize}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <Link
                    href={`/tours/${tour.slug}`}
                    className="inline-flex items-center bg-red-600 hover:bg-red-700 px-6 py-2 rounded-md font-medium text-white transition-colors"
                  >
                    Book Now
                  </Link>
                  <Link
                    href={`/tours/${tour.slug}`}
                    className="flex items-center font-medium text-red-600 hover:text-red-700"
                  >
                    Tour Details <ChevronRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
