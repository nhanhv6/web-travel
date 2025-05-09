import { Suspense } from "react";
import TourDetailClient from "./modules/TourDetailClient";
import Loading from "@/components/ui/loading";

export default async function TourDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  return (
    <Suspense fallback={<Loading />}>
      <TourDetailClient slug={slug} />
    </Suspense>
  );
}
