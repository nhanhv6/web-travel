"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, LogOut, User } from "lucide-react";
import MobileMenu from "./mobile-menu";
import { useTourContext } from "@/context/TourContext";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { supabase } from "@/lib/supabaseClient";
import { useAlert } from "@/context/AlertProvider";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { tours } = useTourContext();
  const { showAlert } = useAlert();
  const router = useRouter();
  const pathname = usePathname();

  const navigateToHomeAndAnchor = (hash: string) => {
    if (pathname !== "/") {
      router.push(`/#${hash}`);
    } else if (hash === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      scrollToSection(hash);
    }
    setMobileMenuOpen(false);
  };

  const scrollToSection = (hash: string) => {
    const element = document.getElementById(hash);
    if (element) {
      const headerOffset = 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - headerOffset,
        behavior: "smooth",
      });
    } else {
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

  const renderTourDropdown = () => (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center focus:outline-none font-medium hover:text-red-600 transition-colors">
        Tours <ChevronDown className="ml-1 w-4 h-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-48">
        {tours.map((tour) => (
          <DropdownMenuItem asChild key={tour.id}>
            <Link
              href={`/tours/${tour.slug}`}
              className="w-full cursor-pointer"
            >
              {tour.slug}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );

  const checkLogin = async () => {
    const { data, error } = await supabase.auth.getUser();
    if (data?.user) {
      setIsLoggedIn(true);
      showAlert("You are logged in.", "success");
    } else {
      setIsLoggedIn(false);
      showAlert("You are not logged in.", "error");
    }
  };

  const handleLogin = () => {
    router.push("/login");
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    showAlert("You are logged out.", "success");
    setIsLoggedIn(false);
    router.push("/");
  };

  useEffect(() => {
    checkLogin();
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash.replace("#", "");
      const tryScroll = () => {
        const element = document.getElementById(hash);
        if (element) {
          const headerOffset = 80;
          const elementPosition =
            element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: elementPosition - headerOffset,
            behavior: "smooth",
          });
        } else {
          setTimeout(tryScroll, 100);
        }
      };
      tryScroll();
    }
  }, [pathname]);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setIsLoggedIn(!!session?.user);
      }
    );

    // Cleanup listener khi unmount
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return (
    <header className="top-0 z-50 sticky bg-white shadow-md">
      <div className="flex justify-between items-center mx-auto px-4 py-4 container">
        {/* Left: Logo */}
        <button
          onClick={() => router.push("/")}
          className="flex items-center space-x-2"
        >
          <span className="font-bold text-red-600 text-2xl">
            Thanh Hải Travel
          </span>
        </button>

        {/* Middle: Hidden on mobile */}
        <nav className="hidden md:flex items-center space-x-8">
          {renderNavButton("home", "Home")}
          {renderNavButton("about", "About")}
          {renderTourDropdown()}
          {renderNavButton("services", "Services")}
          {renderNavButton("gallery", "Gallery")}
          {renderNavButton("contact", "Contact")}
        </nav>

        {/* Right: Mobile menu & Auth */}
        <div className="flex items-center gap-2 md:space-x-4">
          {/* Auth Buttons - always visible */}
          {isLoggedIn ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="lg" className="p-2">
                  <User className="w-5 h-5" />
                  <span className="ml-1">Hi Admin!</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/admin/tours" className="w-full cursor-pointer">
                    Manage Tours
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="cursor-pointer"
                >
                  <LogOut className="mr-2 w-4 h-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              onClick={handleLogin}
              variant="default"
              size="sm"
              className="bg-neutral-700 hover:bg-neutral-800 px-4 py-2 text-white"
            >
              LogIn
            </Button>
          )}

          {/* Mobile menu button */}

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
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
