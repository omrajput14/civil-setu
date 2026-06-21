"use client";

import React, { createContext, useContext, useState } from "react";

type GrievanceContextType = {
  category: string;
  setCategory: (val: string) => void;
  landmark: string;
  setLandmark: (val: string) => void;
  submitGrievance: () => void;
};

const GrievanceContext = createContext<GrievanceContextType | undefined>(undefined);

export function GrievanceProvider({ children }: { children: React.ReactNode }) {
  const [category, setCategory] = useState("electricity");
  const [landmark, setLandmark] = useState("");

  const submitGrievance = () => {
    console.log("Submitting grievance:", { category, landmark });
    // Reset state after submit
    setCategory("electricity");
    setLandmark("");
  };

  return (
    <GrievanceContext.Provider value={{ category, setCategory, landmark, setLandmark, submitGrievance }}>
      {children}
    </GrievanceContext.Provider>
  );
}

export function useGrievance() {
  const context = useContext(GrievanceContext);
  if (context === undefined) {
    throw new Error("useGrievance must be used within a GrievanceProvider");
  }
  return context;
}
