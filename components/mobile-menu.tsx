"use client"

import { useState } from "react"
import Link from "next/link"
import { X, ChevronDown, ChevronUp } from "lucide-react"

export default function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [toursOpen, setToursOpen] = useState(false)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 md:hidden">
      <div className="fixed right-0 top-0 h-full w-3/4 max-w-sm bg-white shadow-lg p-5 overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <span className="text-xl font-bold text-red-600">DEMOMOTO</span>
          <button onClick={onClose} className="p-2">
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="flex flex-col space-y-4">
          <Link href="/" className="py-2 font-medium" onClick={onClose}>
            Home
          </Link>
          <Link href="#about" className="py-2 font-medium" onClick={onClose}>
            About
          </Link>
          <Link href="#motorcycles" className="py-2 font-medium" onClick={onClose}>
            Motorcycles
          </Link>

          <div>
            <button
              className="flex items-center justify-between w-full py-2 font-medium"
              onClick={() => setToursOpen(!toursOpen)}
            >
              Tours
              {toursOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>

            {toursOpen && (
              <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-200">
                <Link href="#tours" className="block py-1" onClick={onClose}>
                  All Tours
                </Link>
                <Link href="#tours" className="block py-1" onClick={onClose}>
                  Mountain Pass Adventure
                </Link>
                <Link href="#tours" className="block py-1" onClick={onClose}>
                  Coastal Highway Expedition
                </Link>
                <Link href="#tours" className="block py-1" onClick={onClose}>
                  Off-Road Wilderness Trail
                </Link>
                <Link href="#tours" className="block py-1" onClick={onClose}>
                  Historic Villages Tour
                </Link>
              </div>
            )}
          </div>

          <Link href="#services" className="py-2 font-medium" onClick={onClose}>
            Services
          </Link>
          <Link href="#gallery" className="py-2 font-medium" onClick={onClose}>
            Gallery
          </Link>
          <Link href="#contact" className="py-2 font-medium" onClick={onClose}>
            Contact
          </Link>
        </nav>
      </div>
    </div>
  )
}
