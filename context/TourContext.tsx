"use client";

import { Tour } from "@/types";
import React, { createContext, useContext, useState, useEffect } from "react";

interface TourContextType {
  tours: Tour[];
  loading: boolean;
  error: string | null;
  fetchTours: () => void;
}

interface TourProviderProps {
  children: React.ReactNode;
}

const TourContext = createContext<TourContextType | undefined>(undefined);

export const useTourContext = () => {
  const context = useContext(TourContext);
  if (!context) {
    throw new Error("useTourContext must be used within a TourProvider");
  }
  return context;
};

// Custom hook to fetch tours
const useTours = () => {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const res = await fetch("/data/db.json");
      if (!res.ok) throw new Error("Failed to fetch tours");
      const data = await res.json();
      setTours(data.tours);
    } catch (err) {
      setError("Failed to load tours");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return { tours, loading, error, fetchTours };
};

const TourProvider = ({ children }: TourProviderProps) => {
  const tourContextValue = useTours();

  return (
    <TourContext.Provider value={tourContextValue}>
      {children}
    </TourContext.Provider>
  );
};

export default TourProvider;
