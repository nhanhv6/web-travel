import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import TourProvider from "@/context/TourContext";
import { AlertProvider } from "@/context/AlertProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thanh Hải Travel",
  description: "Experience Authentic Hoi An with a Local Guide",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} flex flex-col min-h-screen bg-white text-gray-900`}
      >
        <TourProvider>
          <AlertProvider>
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </AlertProvider>
        </TourProvider>
      </body>
    </html>
  );
}
