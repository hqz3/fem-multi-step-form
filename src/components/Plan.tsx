import { useFormContext } from "../context/useFormContext";
import { planName } from "../utils/planName";
import {
  subscriptionTerm,
  generateSubscriptionPrice,
} from "../utils/generateSubscriptionPrice";

import style from "../styles/Plan.module.css";

export const Plan = () => {
  const { currentPlan, setCurrentPlan, currentTerm, setCurrentTerm } =
    useFormContext();

  const prices = generateSubscriptionPrice(currentTerm);

  const plans = [
    { name: planName.arcade, imgSrc: "icon-arcade.svg" },
    { name: planName.advanced, imgSrc: "icon-advanced.svg" },
    { name: planName.pro, imgSrc: "icon-pro.svg" },
  ];

  return (
    <form className={style.plans}>
      <h1 className="form__title">Select your plan</h1>
      <p className="form__description">
        You have the option of monthly or yearly billing.
      </p>
      <div className={style.plans__container}>
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`${style.plan__container} ${
              currentPlan === plan.name ? style.plan__containerSelected : ""
            }`}
            onClick={() => setCurrentPlan(plan.name)}
          >
            <img
              className={style.plan__logo}
              src={`../src/assets/images/${plan.imgSrc}`}
              alt={plan.name}
            />
            <div className={style.plan__details}>
              <h4 className={style.plan__title}>{plan.name}</h4>
              <p className={style.plan__price}>
                ${prices[plan.name]}/{prices.term}
              </p>
              {currentTerm === subscriptionTerm.yearly && (
                <p className={style.plan__discount}>2 months free</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className={style.billing__container}>
        <span
          className={`${style.billing__monthly} ${
            currentTerm === subscriptionTerm.monthly
              ? style.billing__selected
              : ""
          }`}
        >
          Monthly
        </span>
        <div className={style.billing__sliderContainer}>
          <input
            className={style.billing__slider}
            type="checkbox"
            onChange={(e) => {
              const checked = e.target.checked;
              // Set to monthly
              if (!checked) setCurrentTerm(subscriptionTerm.monthly);
              // Set to yearly
              else setCurrentTerm(subscriptionTerm.yearly);
            }}
          />
        </div>
        <span
          className={`${style.billing__yearly} ${
            currentTerm === subscriptionTerm.yearly
              ? style.billing__selected
              : ""
          }`}
        >
          Yearly
        </span>
      </div>
    </form>
  );
};
