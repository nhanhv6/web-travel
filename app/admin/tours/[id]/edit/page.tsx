import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import AdminHeader from "@/components/admin/admin-header";
import { Button } from "@/components/ui/button";
import { getTourById } from "@/app/action/tour-actions";
import TourForm from "@/components/admin/tour-form";

export default async function EditTourPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  console.log({ id });
  
  const tour = await getTourById(id);

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

          <h1 className="font-bold text-3xl">Edit Tour</h1>
        </div>

        <TourForm tour={tour} />
      </main>
    </div>
  );
}
