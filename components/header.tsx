"use client";

import { useState } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import MobileMenu from "./mobile-menu";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="top-0 z-50 sticky bg-white shadow-md">
      <div className="flex justify-between items-center mx-auto px-4 py-4 container">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold text-red-600 text-2xl">DEMOMOTO</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="font-medium hover:text-red-600 transition-colors"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="font-medium hover:text-red-600 transition-colors"
          >
            About
          </Link>
          <Link
            href="#motorcycles"
            className="font-medium hover:text-red-600 transition-colors"
          >
            Motorcycles
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center focus:outline-none font-medium hover:text-red-600 transition-colors">
              Tours <ChevronDown className="ml-1 w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-48">
              <DropdownMenuItem asChild>
                <Link href="#tours" className="w-full cursor-pointer">
                  All Tours
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#tours" className="w-full cursor-pointer">
                  City Tour
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#tours" className="w-full cursor-pointer">
                  Countryside Tour
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#tours" className="w-full cursor-pointer">
                  Street food tour
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="#services"
            className="font-medium hover:text-red-600 transition-colors"
          >
            Services
          </Link>
          <Link
            href="#gallery"
            className="font-medium hover:text-red-600 transition-colors"
          >
            Gallery
          </Link>
          <Link
            href="#contact"
            className="font-medium hover:text-red-600 transition-colors"
          >
            Contact
          </Link>
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
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}
