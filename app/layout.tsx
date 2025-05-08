import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import TourProvider from "@/context/TourContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thanh Hải travel",
  description:
    "Discover our premium selection of bicycles and professional services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <TourProvider>
          <Header />
          {children}
          <Footer />
        </TourProvider>
      </body>
    </html>
  );
}
