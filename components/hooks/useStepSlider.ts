import { useContext } from "react";
import { StepSliderContext } from "../contexts/stepSliderContext";

// Custom hook to consume the context
const useStepSlider = () => {
  const context = useContext(StepSliderContext);

  if (context === undefined) {
    throw new Error("useStepSlider must be used within a StepSliderProvider");
  }

  return context;
};

export { useStepSlider };
