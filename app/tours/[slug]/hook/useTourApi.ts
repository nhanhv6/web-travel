import { useState, useEffect } from "react";
import { Tour } from "@/types";

const SUPABASE_URL = "https://ieyzyrjbancljmqbcmkc.supabase.co";
const API_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export function useTourApi(slug: string) {
  const [tour, setTour] = useState<Tour | null>(null);
  const [otherTours, setOtherTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTours = async () => {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/tours`, {
        headers: {
          apikey: API_KEY,
          Authorization: `Bearer ${API_KEY}`,
        },
      });
      if (!res.ok) {
        console.error("Failed to fetch tours data");
        setLoading(false);
        return;
      }
      const data: Tour[] = await res.json();

      // Find the current tour by slug
      const foundTour = data.find(
        (t) => decodeURIComponent(t.slug) === decodeURIComponent(slug)
      );
      setTour(foundTour || null);

      // Exclude the current tour to show other tours in the sidebar
      const filteredTours = data.filter(
        (t) => decodeURIComponent(t.slug) !== decodeURIComponent(slug)
      );
      setOtherTours(filteredTours);

      setLoading(false);
    };

    fetchTours();
  }, [slug]);

  return { tour, otherTours, loading };
}
