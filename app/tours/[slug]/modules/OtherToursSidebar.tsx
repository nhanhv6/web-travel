"use client";

import Image from "next/image";
import { Tour } from "@/types";
import { useRouter } from "next/navigation";

interface OtherToursSidebarProps {
  otherTours: Tour[];
}

const OtherToursSidebar: React.FC<OtherToursSidebarProps> = ({ otherTours }) => {
  const router = useRouter();

  const navigateToTour = (slug: string) => {
    router.push(`/tours/${slug}`);
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
  };

  return (
    <div className="top-0 sticky max-w-full max-h-screen overflow-x-hidden overflow-y-auto">
      <h2 className="mb-6 font-semibold text-gray-900 text-2xl">Other Tours</h2>
      <div className="space-y-6">
        {otherTours.map((otherTour) => (
          <button
            key={otherTour.id}
            onClick={() => navigateToTour(otherTour.slug)}
            className="flex items-center gap-4 hover:bg-gray-100 active:bg-gray-200 hover:shadow-md p-3 rounded-lg w-full max-w-full overflow-hidden text-left active:scale-95 transition-all duration-300"
          >
            <div className="relative flex-shrink-0 rounded-lg w-16 h-16 overflow-hidden">
              <Image
                src={otherTour.image.replace("..", "") || "/placeholder.svg"}
                alt={otherTour.title}
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-gray-900 hover:text-red-600 text-lg truncate transition-colors duration-300">
                {otherTour.title}
              </h3>
              <p className="text-gray-600 text-sm line-clamp-2">
                {otherTour.description}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default OtherToursSidebar;