"use client";

import React, { createContext, useContext } from "react";
import { Tour } from "@/types";
import { useTours } from "@/hooks";

interface TourContextType {
  tours: Tour[];
  loading: boolean;
  error: string | null;
  fetchTours: () => void;
}

const TourContext = createContext<TourContextType | undefined>(undefined);

export const useTourContext = () => {
  const context = useContext(TourContext);
  if (!context) {
    throw new Error("useTourContext must be used within a TourProvider");
  }
  return context;
};

const TourProvider = ({ children }: { children: React.ReactNode }) => {
  const tourContextValue = useTours();

  return (
    <TourContext.Provider value={tourContextValue}>
      {children}
    </TourContext.Provider>
  );
};

export default TourProvider;
