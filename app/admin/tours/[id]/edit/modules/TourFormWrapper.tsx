
import { getTourById } from "@/app/action/tour-actions";
import TourForm from "@/components/admin/tour-form";
import { notFound } from "next/navigation";
export default async function TourFormWrapper({ id }: { id: string }) {
  const tour = await getTourById(id);

  if (!tour) {
    notFound();
  }

  return <TourForm tour={tour} />;
}
