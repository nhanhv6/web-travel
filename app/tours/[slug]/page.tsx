 

import TourDetailClient from "./modules/TourDetailClient";

export default async function TourDetailPage({
  params,
}: {
  params: { slug: string };
}) {

  const { slug } = await params;
  return <TourDetailClient slug={slug} />;
}
