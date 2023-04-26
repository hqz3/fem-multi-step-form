import { Info } from "./Info";
import { useFormContext } from "../context/useFormContext";

import style from "../styles/Form.module.css";

export const Form = () => {
  const { currentStep } = useFormContext();
  return <div className={style.container}>{currentStep === 0 && <Info />}</div>;
};
