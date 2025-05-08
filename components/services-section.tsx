import { HeartHandshake, Users, Star } from "lucide-react";

export default function ValuesSection() {
  const values = [
    {
      title: "Authenticity",
      description: "Sharing the authentic culture and traditions of Hoi An.",
      icon: <HeartHandshake className="w-10 h-10 text-red-500" />,
    },
    {
      title: "Community",
      description:
        "Supporting the local community and promoting sustainable tourism practices.",
      icon: <Users className="w-10 h-10 text-red-500" />,
    },
    {
      title: "Excellence",
      description: "Striving for excellence in everything we do.",
      icon: <Star className="w-10 h-10 text-red-500" />,
    },
  ];

  return (
    <section id="values" className="bg-gray-900 py-20 text-white">
      <div className="mx-auto px-4 container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-3xl md:text-4xl">Our Values</h2>
          <div className="bg-red-600 mx-auto mb-6 w-20 h-1"></div>
          <p className="mx-auto max-w-2xl text-gray-300">
            Our core values reflect our mission to offer meaningful experiences
            while respecting the culture, people, and environment of Hoi An.
          </p>
        </div>

        <div className="gap-8 grid md:grid-cols-3">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-lg hover:scale-[1.02] transition-transform"
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="mb-3 font-bold text-xl">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
