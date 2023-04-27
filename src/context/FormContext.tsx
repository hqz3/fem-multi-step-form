import { createContext, useState } from "react";
import { subscriptionTerm } from "../utils/generateSubscriptionPrice";
import { planName } from "../utils/planName";

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
  currentPlan: string;
  setCurrentPlan: React.Dispatch<React.SetStateAction<string>>;
  currentTerm: string;
  setCurrentTerm: React.Dispatch<React.SetStateAction<string>>;
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
  currentPlan: planName.arcade,
  setCurrentPlan: () => undefined,
  currentTerm: subscriptionTerm.monthly,
  setCurrentTerm: () => undefined,
});

export const FormContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<ErrorInterface>({
    label: null,
    message: "",
  });
  const [currentPlan, setCurrentPlan] = useState(planName.arcade);
  const [currentTerm, setCurrentTerm] = useState(subscriptionTerm.monthly);

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
    currentPlan,
    setCurrentPlan,
    currentTerm,
    setCurrentTerm,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
