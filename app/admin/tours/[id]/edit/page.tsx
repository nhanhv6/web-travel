import { Suspense } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import TourFormWrapper from "./modules/TourFormWrapper";
import Loading from "@/components/ui/loading";

export default async function EditTourPage({ params }: { params: { id: string } }) {
    const { id } = await params;
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

          <h1 className="font-bold text-3xl">Edit Tour</h1>
        </div>

        <Suspense fallback={<Loading />}>
          <TourFormWrapper id={id} />
        </Suspense>
      </main>
    </div>
  );
}
