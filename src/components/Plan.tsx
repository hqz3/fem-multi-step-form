import { useDispatch, useSelector } from "react-redux";
// Redux actions
import {
  setCurrentPlan,
  setCurrentSubscriptionTerm,
} from "../store/features/currentPlanSlice";
// Redux selectors
import { selectCurrentPlan } from "../store";

import { PLAN } from "../utils/planName";
import {
  SUBSCRIPTION_TERM,
  generateSubscriptionPrice,
} from "../utils/generateSubscriptionPrice";

import style from "../styles/Plan.module.css";

export const Plan = () => {
  const dispatch = useDispatch();
  const { currentPlan, currentSubscriptionTerm } =
    useSelector(selectCurrentPlan);

  const prices = generateSubscriptionPrice(currentSubscriptionTerm);
  const term = prices.term;

  const plans = [
    {
      name: PLAN.arcade,
      price: prices[PLAN.arcade],
      imgSrc: "icon-arcade.svg",
    },
    {
      name: PLAN.advanced,
      price: prices[PLAN.advanced],
      imgSrc: "icon-advanced.svg",
    },
    { name: PLAN.pro, price: prices[PLAN.pro], imgSrc: "icon-pro.svg" },
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
              src={`../assets/images/${plan.imgSrc}`}
              alt={plan.name}
            />
            <div className={style.plan__details}>
              <h4 className={style.plan__title}>{plan.name}</h4>
              <p className={style.plan__price}>
                ${plan.price}/{term}
              </p>
              {currentSubscriptionTerm === SUBSCRIPTION_TERM.yearly && (
                <p className={style.plan__discount}>2 months free</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className={style.subscription__container}>
        <span
          className={`${style.subscription__monthly} ${
            currentSubscriptionTerm === SUBSCRIPTION_TERM.monthly
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
            checked={currentSubscriptionTerm !== SUBSCRIPTION_TERM.monthly}
            onChange={(e) => {
              const checked = e.target.checked;
              // Set to monthly
              if (!checked)
                dispatch(setCurrentSubscriptionTerm(SUBSCRIPTION_TERM.monthly));
              // Set to yearly
              else
                dispatch(setCurrentSubscriptionTerm(SUBSCRIPTION_TERM.yearly));
            }}
          />
        </div>
        <span
          className={`${style.subscription__yearly} ${
            currentSubscriptionTerm === SUBSCRIPTION_TERM.yearly
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
