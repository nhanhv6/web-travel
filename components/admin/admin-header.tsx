"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function AdminHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Dashboard", href: "/admin" },
    { name: "Tours", href: "/admin/tours" },
    { name: "Motorcycles", href: "/admin/motorcycles" },
    { name: "Bookings", href: "/admin/bookings" },
    { name: "Users", href: "/admin/users" },
  ];

  const handleLogout = () => {
    // In a real app, you would handle logout logic here
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/";
  };

  return (
    <header className="bg-gray-900 text-white">
      <div className="mx-auto px-4 container">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/admin" className="flex-shrink-0">
              <span className="font-bold text-red-500 text-xl">Thanh Hải travel</span>
              <span className="bg-red-600 ml-2 px-2 py-0.5 rounded text-sm">
                Admin
              </span>
            </Link>
            <nav className="hidden md:block ml-10">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      pathname === item.href
                        ? "bg-gray-800 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
          <div className="hidden md:block">
            <Button
              variant="ghost"
              className="hover:bg-gray-700 text-gray-300 hover:text-white"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 w-5 h-5" />
              Logout
            </Button>
          </div>
          <div className="md:hidden">
            <button
              className="focus:outline-none text-gray-400 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 sm:px-3 pt-2 pb-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === item.href
                    ? "bg-gray-800 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button
              className="block hover:bg-gray-700 px-3 py-2 rounded-md w-full font-medium text-gray-300 hover:text-white text-base text-left"
              onClick={() => {
                handleLogout();
                setMobileMenuOpen(false);
              }}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
