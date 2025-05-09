"use client";

import { Suspense, useCallback } from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Loading from "@/components/ui/loading";
import DOMPurify from "dompurify";
import OtherToursSidebar from "./OtherToursSidebar";
import { useTourApi } from "../hook";

export default function TourDetailClient({ slug }: { slug: string }) {
  const { tour, otherTours, loading } = useTourApi(slug);
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  if (loading) return <Loading />;
  if (!tour) return notFound();

  const sanitizedDescription = DOMPurify.sanitize(tour.content);

  return (
    <div className="relative mx-auto px-4 py-16 max-w-7xl text-gray-900">
      <div className="-z-10 absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-teal-50 opacity-70" />

      <div className="gap-12 grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-2">
          <div className="mb-10 text-center">
            <h1 className="bg-clip-text bg-gradient-to-r from-teal-500 to-indigo-600 drop-shadow font-extrabold text-transparent text-4xl md:text-5xl tracking-tight">
              {tour.title}
            </h1>
            <div className="inline-flex items-center gap-2 bg-yellow-100 shadow-sm mt-2 px-3 py-1 rounded-full font-semibold text-yellow-800 text-sm">
              ⭐ {tour.rating} / 5.0
            </div>
          </div>

          <div className="relative shadow-xl rounded-2xl overflow-hidden">
            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex">
                {tour.imageGallery?.map((img, i) => (
                  <div
                    className="relative min-w-full h-[500px] transition-all"
                    key={i}
                  >
                    <Image
                      src={img.replace("..", "")}
                      alt={`Slide ${i + 1}`}
                      fill
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={scrollPrev}
              className="top-1/2 left-4 z-10 absolute bg-white shadow-md hover:shadow-lg p-3 rounded-full transition -translate-y-1/2"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={scrollNext}
              className="top-1/2 right-4 z-10 absolute bg-white shadow-md hover:shadow-lg p-3 rounded-full transition -translate-y-1/2"
            >
              <ChevronRight />
            </button>
          </div>

          <div className="space-y-6 mt-12 text-gray-700 text-lg leading-relaxed">
            <p className="italic">{tour.description}</p>
            <div
              className="max-w-none prose prose-indigo prose-lg"
              dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
            />
          </div>

          <div className="gap-6 grid grid-cols-2 md:grid-cols-4 mt-12">
            {[
              ["🕒 Duration", tour.duration],
              ["⏰ Time", `${tour.time.start} - ${tour.time.end}`],
              ["🌐 Language", "English"],
              ["👥 Group Size", tour.groupSize],
            ].map(([label, value]) => (
              <div
                key={label}
                className="bg-white/90 shadow hover:shadow-lg backdrop-blur-md p-4 border border-gray-100 rounded-lg transition"
              >
                <p className="font-medium text-gray-500 text-sm">{label}</p>
                <p className="font-semibold text-gray-900 text-base">{value}</p>
              </div>
            ))}
          </div>

          {/* Price */}
          <div className="mt-12 text-center">
            <p className="drop-shadow-sm font-extrabold text-indigo-600 text-3xl">
              {tour.price.toLocaleString()} $
            </p>
            <p className="text-gray-500 text-sm">Per Person</p>
            <button className="bg-gradient-to-r from-indigo-500 to-teal-500 shadow-lg mt-4 px-6 py-3 rounded-xl font-semibold text-white hover:scale-105 transition transform">
              Book Now
            </button>
          </div>
        </div>

        {/* Sidebar: Other tours */}
        <div className="col-span-1">
          <Suspense fallback={<Loading />}>
            <OtherToursSidebar otherTours={otherTours} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
