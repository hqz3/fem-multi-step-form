import { createContext, useState } from "react";

export interface ErrorInterface {
  label: string | null;
  message: string;
}

export interface FormContextInterface {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  error: ErrorInterface;
  setError: React.Dispatch<React.SetStateAction<ErrorInterface>>;
}

export const FormContext = createContext<FormContextInterface>({
  currentStep: 0,
  setCurrentStep: () => undefined,
  name: "",
  setName: () => undefined,
  email: "",
  setEmail: () => undefined,
  phone: "",
  setPhone: () => undefined,
  error: { label: null, message: "" },
  setError: () => undefined,
});

export const FormContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<ErrorInterface>({
    label: null,
    message: "",
  });

  const value = {
    currentStep,
    setCurrentStep,
    name,
    setName,
    email,
    setEmail,
    phone,
    setPhone,
    error,
    setError,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
