import { useDispatch, useSelector } from "react-redux";
// Redux actions
import {
  setCurrentPlan,
  setCurrentSubscriptionTerm,
} from "../store/features/currentPlanSlice";
// Redux selectors
import { selectCurrentPlan } from "../store";

import { planName } from "../utils/planName";
import {
  subscriptionTerm,
  generateSubscriptionPrice,
} from "../utils/generateSubscriptionPrice";

import style from "../styles/Plan.module.css";

export const Plan = () => {
  const dispatch = useDispatch();
  const { currentPlan, currentSubscriptionTerm } =
    useSelector(selectCurrentPlan);

  const prices = generateSubscriptionPrice(currentSubscriptionTerm);

  const plans = [
    { name: planName.arcade, imgSrc: "icon-arcade.svg" },
    { name: planName.advanced, imgSrc: "icon-advanced.svg" },
    { name: planName.pro, imgSrc: "icon-pro.svg" },
  ];

  return (
    <section>
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
            onClick={() => dispatch(setCurrentPlan(plan.name))}
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
              {currentSubscriptionTerm === subscriptionTerm.yearly && (
                <p className={style.plan__discount}>2 months free</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className={style.subscription__container}>
        <span
          className={`${style.subscription__monthly} ${
            currentSubscriptionTerm === subscriptionTerm.monthly
              ? style.subscription__selected
              : ""
          }`}
        >
          Monthly
        </span>
        <div className={style.subscription__sliderContainer}>
          <input
            className={style.subscription__slider}
            type="checkbox"
            checked={currentSubscriptionTerm !== subscriptionTerm.monthly}
            onChange={(e) => {
              const checked = e.target.checked;
              // Set to monthly
              if (!checked)
                dispatch(setCurrentSubscriptionTerm(subscriptionTerm.monthly));
              // Set to yearly
              else
                dispatch(setCurrentSubscriptionTerm(subscriptionTerm.yearly));
            }}
          />
        </div>
        <span
          className={`${style.subscription__yearly} ${
            currentSubscriptionTerm === subscriptionTerm.yearly
              ? style.subscription__selected
              : ""
          }`}
        >
          Yearly
        </span>
      </div>
    </section>
  );
};
