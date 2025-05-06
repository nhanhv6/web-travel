"use client";

import { Tour } from "@/types";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const useTours = () => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTours = async () => {
    setLoading(true);
    setError(null);

    const { data, error } = await supabase.from("tours").select("*");

    if (error) {
      console.error("Error fetching tours:", error);
      setError("Failed to fetch tours");
    } else {
      setTours(data || []);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return { tours, loading, error, fetchTours };
};
