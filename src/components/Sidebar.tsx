import { useSelector } from "react-redux";
import { selectCurrentStep } from "../store";
import style from "../styles/Sidebar.module.css";

type StepType = {
  number: number;
  title: string;
  description: string;
};

export const Sidebar = () => {
  const { currentStep } = useSelector(selectCurrentStep);
  const steps: StepType[] = [
    { number: 1, title: "Step 1", description: "Your info" },
    { number: 2, title: "Step 2", description: "Select plan" },
    { number: 3, title: "Step 3", description: "Add-ons" },
    { number: 4, title: "Step 4", description: "Summary" },
  ];

  return (
    <div className={style.steps__container}>
      {steps.map((step, index) => {
        return (
          <ol className={style.step__container} key={step.number}>
            <li
              className={`${style.step__number} ${
                index === currentStep ? style.step__selected : ""
              }`}
            >
              {step.number}
            </li>
            <p className={style.step__title}>{step.title}</p>
            <p className={style.step__description}>{step.description}</p>
          </ol>
        );
      })}
    </div>
  );
};
