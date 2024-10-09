"use client";

import { createContext, ReactNode, useState } from "react";

// Define the type for the context
interface StepSliderContextType {
  sliderRange: number;
  setSliderRange: React.Dispatch<React.SetStateAction<number>>;
}

// Create a context with a default value of `undefined` for type safety
const StepSliderContext = createContext<StepSliderContextType | undefined>(
  undefined
);

function StepSliderProvider({ children }: { children: ReactNode }) {
  const [sliderRange, setSliderRange] = useState<number>(0);

  return (
    <StepSliderContext.Provider value={{ sliderRange, setSliderRange }}>
      {children}
    </StepSliderContext.Provider>
  );
}

export { StepSliderContext, StepSliderProvider };
