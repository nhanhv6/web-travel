import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="z-10 relative bg-gray-950 pt-20 pb-10 text-white">
      <div className="mx-auto px-4 container">
        <div className="gap-12 grid grid-cols-1 md:grid-cols-3">
          {/* Logo & Social */}
          <div>
            <h3 className="mb-4 font-extrabold text-red-500 text-3xl tracking-wide">Thanh Hải Travel</h3>
            <p className="mb-6 text-gray-400 leading-relaxed">
              Discover Hoi An like never before — authentic local experiences, community-focused, and top-notch service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-red-500 p-2 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-red-500 p-2 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-red-500 p-2 rounded-full transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 font-semibold text-xl">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "#about" },
                { label: "Tours", href: "#tours" },
                { label: "Services", href: "#services" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Values */}
          <div>
            <h4 className="mb-4 font-semibold text-xl">Our Values</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>
                <span className="block leading-relaxed">
                  <strong className="text-white">Authenticity:</strong> Sharing the authentic culture and traditions of Hoi An.
                </span>
              </li>
              <li>
                <span className="block leading-relaxed">
                  <strong className="text-white">Community:</strong> Supporting the local community and promoting sustainable tourism practices.
                </span>
              </li>
              <li>
                <span className="block leading-relaxed">
                  <strong className="text-white">Excellence:</strong> Striving for excellence in everything we do.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-gray-800 border-t text-gray-500 text-sm text-center">
          &copy; {new Date().getFullYear()} Thanh Hải Travel. All rights reserved.
        </div>
      </div>

      {/* Decorative Gradient Line */}
      <div className="top-0 left-0 absolute bg-gradient-to-r from-red-500 via-transparent to-red-500 opacity-60 w-full h-1" />
    </footer>
  );
}
