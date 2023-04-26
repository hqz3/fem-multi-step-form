import { useFormContext } from "../context/useFormContext";
import style from "../styles/Navigation.module.css";

export const Navigation = () => {
  const { currentStep, setCurrentStep } = useFormContext();

  const handleBackClick = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleNextClick = () => {
    if (currentStep === 0) {
      // Validate form
    }
    if (currentStep === 4) return;
    setCurrentStep(currentStep + 1);
  };

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
