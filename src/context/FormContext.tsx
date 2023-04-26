import { createContext, useState } from "react";

interface FormContextInterface {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

export const FormContext = createContext<FormContextInterface>({
  currentStep: 0,
  setCurrentStep: () => undefined,
});

export const FormContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentStep, setCurrentStep] = useState(0);

  const value = {
    currentStep,
    setCurrentStep,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
