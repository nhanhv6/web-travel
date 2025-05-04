"use client"

import { useState } from "react"
import Link from "next/link"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import MobileMenu from "./mobile-menu"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-red-600">DEMOMOTO</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="font-medium hover:text-red-600 transition-colors">
            Home
          </Link>
          <Link href="#about" className="font-medium hover:text-red-600 transition-colors">
            About
          </Link>
          <Link href="#motorcycles" className="font-medium hover:text-red-600 transition-colors">
            Motorcycles
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center font-medium hover:text-red-600 transition-colors focus:outline-none">
              Tours <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-48">
              <DropdownMenuItem asChild>
                <Link href="#tours" className="w-full cursor-pointer">
                  All Tours
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#tours" className="w-full cursor-pointer">
                  Mountain Pass Adventure
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#tours" className="w-full cursor-pointer">
                  Coastal Highway Expedition
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#tours" className="w-full cursor-pointer">
                  Off-Road Wilderness Trail
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="#tours" className="w-full cursor-pointer">
                  Historic Villages Tour
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="#services" className="font-medium hover:text-red-600 transition-colors">
            Services
          </Link>
          <Link href="#gallery" className="font-medium hover:text-red-600 transition-colors">
            Gallery
          </Link>
          <Link href="#contact" className="font-medium hover:text-red-600 transition-colors">
            Contact
          </Link>
        </nav>
        <div className="md:hidden">
          <button className="p-2" onClick={() => setMobileMenuOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  )
}
