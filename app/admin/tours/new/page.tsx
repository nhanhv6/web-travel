import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import TourForm from "@/components/admin/tour-form";

export default function NewTourPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 mx-auto px-4 py-8 container">
        <div className="mb-6">
          <Button variant="outline" asChild className="mb-4">
            <Link href="/admin/tours" className="flex items-center">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Tours
            </Link>
          </Button>

          <h1 className="font-bold text-3xl">Create New Tour</h1>
        </div>

        <TourForm />
      </main>
    </div>
  );
}
