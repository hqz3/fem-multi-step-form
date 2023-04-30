import { useSelector } from "react-redux";
import { selectCurrentStep } from "../store";
import { Info } from "./Info";
import { Plan } from "./Plan";
import { AddOn } from "./AddOn";
import { Summary } from "./Summary";
import { ThankYou } from "./ThankYou";
import style from "../styles/Form.module.css";

export const Form = () => {
  const { currentStep } = useSelector(selectCurrentStep);
  return (
    <div className={style.container}>
      {currentStep === 0 && <Info />}
      {currentStep === 1 && <Plan />}
      {currentStep === 2 && <AddOn />}
      {currentStep === 3 && <Summary />}
      {currentStep === 4 && <ThankYou />}
    </div>
  );
};
