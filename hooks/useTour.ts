import { Tour } from "@/types";
import { useState, useEffect } from "react";

const TOUR_DATA_PATH = "/data/db.json";

export default function useTour(slug: string) {
  const [tour, setTour] = useState<Tour | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTourData = async () => {
      try {
        const res = await fetch(TOUR_DATA_PATH); // Fetch toàn bộ dữ liệu từ file JSON
        const tours: Tour[] = await res.json();

        // Tìm tour có slug trùng với tham số
        const foundTour = tours.find((tour) => tour.slug === slug);

        if (foundTour) {
          setTour(foundTour);
        } else {
          setError("Tour not found");
        }
      } catch (err) {
        setError("Failed to load tour data");
      } finally {
        setLoading(false);
      }
    };

    fetchTourData();
  }, [slug]);

  return { tour, loading, error };
}
