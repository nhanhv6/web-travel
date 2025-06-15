"use client";

import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { useState } from "react";

const NEXT_PUBLIC_EMAIL_KEY = "Haithanhtran228@gmail.com";

export default function ContactSection() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [showAlert, setShowAlert] = useState(false);

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Submit form handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setAlert(null);
    setShowAlert(false);

    try {
      const res = await fetch(
        `https://formsubmit.co/ajax/${NEXT_PUBLIC_EMAIL_KEY}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (res.ok) {
        setAlert({
          type: "success",
          message: "Sent successfully! Thank you for contacting us.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setAlert({ type: "error", message: "Send failed. Please try again." });
      }
    } catch {
      setAlert({
        type: "error",
        message: "Connection error. Please try again.",
      });
    } finally {
      setShowAlert(true);
      setIsLoading(false);
      setTimeout(() => {
        setShowAlert(false);
        setTimeout(() => setAlert(null), 500);
      }, 3000);
    }
  };

  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="mx-auto px-4 container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-bold text-3xl md:text-4xl">Contact Us</h2>
          <div className="bg-red-600 mx-auto mb-6 w-20 h-1"></div>
          <p className="mx-auto max-w-3xl text-gray-700">
            Have questions or want to schedule a tour? Reach out to us directly
            or explore our experiences through trusted platforms.
          </p>
        </div>

        <div className="gap-12 grid lg:grid-cols-2">
          {/* Form */}
          <div>
            <div className="bg-white shadow-lg p-8 rounded-lg">
              <h3 className="mb-6 font-semibold text-2xl">Send Us a Message</h3>
              {alert && showAlert && (
                <div
                  className={`mb-4 rounded-md p-4 ${
                    alert.type === "success"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}>
                  {alert.message}
                </div>
              )}
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="gap-6 grid md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-1 font-medium text-gray-700 text-sm">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="px-4 py-2 border border-gray-300 focus:border-red-500 rounded-md focus:ring-red-500 w-full"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-1 font-medium text-gray-700 text-sm">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="px-4 py-2 border border-gray-300 focus:border-red-500 rounded-md focus:ring-red-500 w-full"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-1 font-medium text-gray-700 text-sm">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="px-4 py-2 border border-gray-300 focus:border-red-500 rounded-md focus:ring-red-500 w-full"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-1 font-medium text-gray-700 text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="px-4 py-2 border border-gray-300 focus:border-red-500 rounded-md focus:ring-red-500 w-full"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                    required></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md font-medium text-white transition-colors"
                  disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
                {showAlert && alert && (
                  <div
                    className={`mt-4 px-4 py-2 rounded ${
                      alert.type === "success"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}>
                    {alert.message}
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white shadow-lg p-8 rounded-lg">
              <h3 className="mb-6 font-semibold text-2xl">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="mt-1 mr-4 w-6 h-6 text-red-600" />
                  <div>
                    <h4 className="font-semibold">WhatsApp</h4>
                    <a
                      href="tel:+84343980055"
                      className="text-gray-700 hover:underline">
                      (+84) 343 980 055
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Globe className="mt-1 mr-4 w-6 h-6 text-red-600" />
                  <div>
                    <h4 className="font-semibold">TripAdvisor</h4>
                    <a
                      href="https://www.tripadvisor.com/Attraction_Review-g298082-d24433110-Reviews-Beep_Beep_Biking_Tour_Hoi_An-Hoi_An_Quang_Nam_Province.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 underline">
                      View on TripAdvisor
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="mt-1 mr-4 w-6 h-6 text-red-600" />
                  <div>
                    <h4 className="font-semibold">GetYourGuide</h4>
                    <a
                      href="https://www.getyourguide.com/hoi-an-l831/hoi-an-heritage-walking-tour-small-group-with-local-guide-t655493/?ranking_uuid=16599930-5dad-48c6-ac64-f66942a8a183"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-600 underline">
                      View on GetYourGuide
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Optional business hours block */}
            <div className="bg-white shadow-lg p-8 rounded-lg">
              <h3 className="mb-6 font-semibold text-2xl">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Monday - Sunday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
