import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, MapPin, Users, ArrowLeft, Edit } from "lucide-react";
import AdminHeader from "@/components/admin/admin-header";
import { Button } from "@/components/ui/button";
import { getTourById } from "@/app/action/tour-actions";
export default async function TourDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // In a real app, this would fetch from your database
  const tour = await getTourById(params?.id);

  if (!tour) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <AdminHeader />
      <main className="flex-1 mx-auto px-4 py-8 container">
        <div className="mb-6">
          <Button variant="outline" asChild className="mb-4">
            <Link href="/admin/tours" className="flex items-center">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Tours
            </Link>
          </Button>

          <div className="flex justify-between items-center">
            <h1 className="font-bold text-3xl">{tour.name}</h1>
            <Button asChild>
              <Link
                href={`/admin/tours/${tour.uuid}/edit`}
                className="flex items-center"
              >
                <Edit className="mr-2 w-4 h-4" />
                Edit Tour
              </Link>
            </Button>
          </div>
        </div>

        <div className="gap-8 grid md:grid-cols-3">
          <div className="space-y-6 md:col-span-2">
            <div className="relative rounded-lg h-[400px] overflow-hidden">
              <Image
                src={tour.image || "/placeholder.svg"}
                alt={tour.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div>
              <h2 className="mb-4 font-semibold text-2xl">Description</h2>
              <p className="text-gray-700">{tour.description}</p>
            </div>

            <div>
              <h2 className="mb-4 font-semibold text-2xl">Tour Details</h2>
              <div className="gap-4 grid grid-cols-2">
                <div className="flex items-center">
                  <Calendar className="mr-2 w-5 h-5 text-red-600" />
                  <div>
                    <p className="text-gray-500 text-sm">Duration</p>
                    <p className="font-medium">{tour.duration}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 w-5 h-5 text-red-600" />
                  <div>
                    <p className="text-gray-500 text-sm">Distance</p>
                    <p className="font-medium">{tour.distance}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 w-5 h-5 text-red-600" />
                  <div>
                    <p className="text-gray-500 text-sm">Difficulty</p>
                    <p className="font-medium">{tour.difficulty}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="mr-2 w-5 h-5 text-red-600" />
                  <div>
                    <p className="text-gray-500 text-sm">Group Size</p>
                    <p className="font-medium">{tour.groupSize}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="top-6 sticky bg-white shadow-md p-6 rounded-lg">
              <h2 className="mb-4 font-semibold text-xl">Tour Information</h2>

              <div className="space-y-4">
                <div>
                  <p className="text-gray-500 text-sm">Price</p>
                  <p className="font-bold text-red-600 text-2xl">
                    {tour.price}
                  </p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Status</p>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      tour.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {tour.status}
                  </span>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Created</p>
                  <p className="font-medium">May 15, 2023</p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Last Updated</p>
                  <p className="font-medium">June 3, 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
