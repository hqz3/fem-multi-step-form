import { useDispatch, useSelector } from "react-redux";
// Redux actions
import {
  decrementStep,
  incrementStep,
} from "../store/features/currentStepSlice";
import { setError } from "../store/features/formSlice";
// Redux selectors
import { selectCurrentStep, selectForm } from "../store";

import { validateInfoForm } from "../utils/validateInfoForm";
import style from "../styles/Navigation.module.css";

export const Navigation = () => {
  const dispatch = useDispatch();
  const { currentStep } = useSelector(selectCurrentStep);
  const { name, email, phone } = useSelector(selectForm);

  const handleBackClick = () => {
    dispatch(decrementStep());
  };

  const handleNextClick = () => {
    if (currentStep === 0) {
      const { label, message } = validateInfoForm(name, email, phone);
      if (label) {
        return dispatch(setError({ label, message }));
      }
    }
    if (currentStep === 4) return;
    dispatch(incrementStep());
  };

  if (currentStep == 4) return <></>;
  return (
    <nav className={style.navigation__container}>
      {currentStep !== 0 && (
        <a
          className={style.navigation__back}
          href="#"
          onClick={handleBackClick}
        >
          Go Back
        </a>
      )}
      <button className={style.navigation__button} onClick={handleNextClick}>
        {currentStep < 3 ? "Next Step" : "Confirm"}
      </button>
    </nav>
  );
};
