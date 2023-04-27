import { useFormContext } from "../context/useFormContext";
import { Info } from "./Info";
import { Plan } from "./Plan";
import { AddOn } from "./AddOn";

import style from "../styles/Form.module.css";

export const Form = () => {
  const { currentStep } = useFormContext();
  return (
    <div className={style.container}>
      {currentStep === 0 && <Info />}
      {currentStep === 1 && <Plan />}
      {currentStep === 2 && <AddOn />}
    </div>
  );
};
