"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import MobileMenu from "./mobile-menu";
import { useTourContext } from "@/context/TourContext";
import { useRouter, usePathname } from "next/navigation";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { tours } = useTourContext();
  const router = useRouter();
  const pathname = usePathname();

  const navigateToHomeAndAnchor = (hash: string) => {
    console.log({ pathname, hash, isNotHome: pathname !== "/" });
    if (pathname !== "/") {
      router.push(`/#${hash}`);
    } else {
      scrollToSection(hash);
    }
    setMobileMenuOpen(false);
  };

  const scrollToSection = (hash: string) => {
    const element = document.getElementById(hash);
    if (element) {
      const headerOffset = 80; // Điều chỉnh theo chiều cao header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - headerOffset,
        behavior: "smooth",
      });
      console.log(`Scrolling to element with id: ${hash}`);
    } else {
      console.log(`Element with id: ${hash} not found`);
    }
  };

  const renderNavButton = (hash: string, label: string) => (
    <button
      onClick={() => navigateToHomeAndAnchor(hash)}
      className="font-medium hover:text-red-600 transition-colors"
    >
      {label}
    </button>
  );

  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash.replace("#", "");
      const tryScroll = () => {
        const element = document.getElementById(hash);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - headerOffset,
            behavior: "smooth",
          });
          console.log(`Scrolled to element with id: ${hash}`);
        } else {
          console.log(`Retrying scroll to: ${hash}`);
          setTimeout(tryScroll, 100);
        }
      };
      tryScroll();
    }
  }, [pathname]);

  const renderTourDropdown = () => (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center focus:outline-none font-medium hover:text-red-600 transition-colors">
        Tours <ChevronDown className="ml-1 w-4 h-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-48">
        {tours.map((tour) => (
          <DropdownMenuItem asChild key={tour.id}>
            <Link href={`/tours/${tour.slug}`} className="w-full cursor-pointer">
              {tour.slug}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <header className="top-0 z-50 sticky bg-white shadow-md">
      <div className="flex justify-between items-center mx-auto px-4 py-4 container">
        <button onClick={() => router.push("/")} className="flex items-center space-x-2">
          <span className="font-bold text-red-600 text-2xl">DEMOMOTO</span>
        </button>
        <nav className="hidden md:flex items-center space-x-8">
          {renderNavButton("home", "Home")}
          {renderNavButton("about", "About")}
          {renderNavButton("bicycles", "Bicycles")}
          {renderTourDropdown()}
          {renderNavButton("services", "Services")}
          {renderNavButton("gallery", "Gallery")}
          {renderNavButton("contact", "Contact")}
        </nav>
        <div className="md:hidden">
          <button className="p-2" onClick={() => setMobileMenuOpen(true)}>
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      <MobileMenu
        isOpen={mobileMenuOpen}
        tours={tours}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}