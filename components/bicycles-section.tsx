import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function BicyclesSection() {
  const motorcycles = [
    {
      name: "Sport Racer 1000",
      price: "$12,999",
      image: "/assets/images/cycling-tour/31.jpg",
      specs: "1000cc • 180HP • 440lbs",
    },
    {
      name: "Adventure Tourer 850",
      price: "$14,500",
      image: "/assets/images/cycling-tour/9.jpg",
      specs: "850cc • 95HP • 505lbs",
    },
    {
      name: "Classic Cruiser 1200",
      price: "$16,750",
      image: "/assets/images/cycling-tour/17.jpg",
      specs: "1200cc • 86HP • 650lbs",
    },
    {
      name: "Urban Commuter 400",
      price: "$6,499",
      image: "/assets/images/cycling-tour/27.jpg",
      specs: "400cc • 45HP • 370lbs",
    },
    {
      name: "Off-Road Enduro 450",
      price: "$9,299",
      image: "/assets/images/cycling-tour/32.jpg",
      specs: "450cc • 55HP • 260lbs",
    },
    {
      name: "Street Fighter 750",
      price: "$10,999",
      image: "/assets/images/cycling-tour/16.jpg",
      specs: "750cc • 115HP • 425lbs",
    },
  ];

  return (
    <section id="bicycles" className="py-20">
      <div className="mx-auto px-4 container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-3xl md:text-4xl">Cycling Tour</h2>
          <div className="bg-red-600 mx-auto mb-6 w-20 h-1"></div>
          <p className="mx-auto max-w-3xl text-gray-700">
            You will be treated to a unique tofu- making experience with local
            legend Mr. Tu. Enjoying this special tofu pudding afterwards.
          </p>
        </div>
        <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
          {motorcycles.map((bike, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-[1.02] transition-transform"
            >
              <div className="relative h-64">
                <Image
                  src={bike.image || "/placeholder.svg"}
                  alt={bike.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="#"
            className="inline-flex justify-center items-center bg-red-600 hover:bg-red-700 px-8 py-3 rounded-md font-medium text-white transition-colors"
          >
            View Cycling Tour
          </Link>
        </div>
      </div>
    </section>
  );
}
