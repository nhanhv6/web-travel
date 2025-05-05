import Link from "next/link"
import { Facebook, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="mx-auto px-4 container">
        <div className="gap-8 grid md:grid-cols-4">
          <div>
            <h3 className="mb-4 font-bold text-xl">Beep beep</h3>
            <p className="mb-4 text-gray-400">
              Your trusted partner for all bicycles needs. Quality bikes, expert service, and passionate staff.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#motorcycles" className="text-gray-400 hover:text-white transition-colors">
                  Motorcycles
                </Link>
              </li>
              <li>
                <Link href="#tours" className="text-gray-400 hover:text-white transition-colors">
                  Tours
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-lg">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Maintenance & Repairs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Performance Upgrades
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Custom Modifications
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Diagnostics
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Tire Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-semibold text-lg">Newsletter</h4>
            <p className="mb-4 text-gray-400">Subscribe to our newsletter for the latest updates and offers.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 px-4 py-2 border border-gray-700 focus:border-red-500 rounded-md focus:ring-red-500 w-full text-white"
              />
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-md w-full font-medium text-white transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-gray-800 border-t text-gray-400 text-center">
          <p>&copy; {new Date().getFullYear()} DemoMoto. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
