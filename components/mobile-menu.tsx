"use client";

import { useState } from "react";
import Link from "next/link";
import { X, ChevronDown, ChevronUp, LogOut, User, LogIn } from "lucide-react";
import { Tour } from "@/types";
import { useRouter, usePathname } from "next/navigation";
import { Separator } from "@radix-ui/react-separator";

export default function MobileMenu({
  isOpen,
  onClose,
  tours = [],
}: {
  isOpen: boolean;
  tours: Tour[];
  onClose: () => void;
}) {
  const [toursOpen, setToursOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (hash: string) => {
    const element = document.getElementById(hash);
    if (element) {
      const headerOffset = 80; // Điều chỉnh theo chiều cao header
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - headerOffset,
        behavior: "smooth",
      });
      console.log(`Scrolled to element with id: ${hash}`);
    } else {
      console.log(`Element with id: ${hash} not found`);
    }
  };

  const navigateToHomeAndAnchor = (hash: string) => {
    if (pathname !== "/") {
      router.push(`/#${hash}`);
    } else {
      scrollToSection(hash);
    }
    onClose();
  };

  const navigateToTour = (slug: string) => {
    router.push(`/tours/${slug}`);
    // Cuộn lên đầu ngay sau khi điều hướng
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 0);
    onClose();
  };

  const renderNavButton = (hash: string, label: string) => (
    <button
      onClick={() => navigateToHomeAndAnchor(hash)}
      className="py-2 font-medium text-left"
    >
      {label}
    </button>
  );

  return (
    <div
      className={`md:hidden z-50 fixed inset-0 bg-black/50 ${
        isOpen ? "mobile-menu-enter" : "mobile-menu-exit"
      }`}
    >
      <div className="top-0 right-0 fixed bg-white shadow-lg p-5 w-3/4 max-w-sm h-full overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <span className="font-bold text-red-600 text-xl">Beep beep</span>
          <button onClick={onClose} className="p-2">
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col space-y-4">
          <Link href="/" className="py-2 font-medium" onClick={onClose}>
            Home
          </Link>
          {renderNavButton("about", "About")}
          {renderNavButton("bicycles", "Bicycles")}

          <div>
            <button
              className="flex justify-between items-center py-2 w-full font-medium"
              onClick={() => setToursOpen(!toursOpen)}
            >
              Tours
              {toursOpen ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>

            <div
              className={`${
                toursOpen
                  ? "max-h-[500px] opacity-100 transition-all ease-in-out duration-300"
                  : "max-h-0 opacity-0 transition-all ease-in-out duration-300"
              } overflow-hidden space-y-2 mt-2 pl-4 border-gray-200 border-l-2`}
            >
              {tours.map((tour) => (
                <button
                  key={tour.id}
                  onClick={() => navigateToTour(tour.slug)}
                  className="block py-1 w-full text-left"
                >
                  {tour.slug}
                </button>
              ))}
            </div>
          </div>

          {renderNavButton("services", "Services")}
          {renderNavButton("gallery", "Gallery")}
          {renderNavButton("contact", "Contact")}
        </nav>
      </div>
    </div>
  );
}
