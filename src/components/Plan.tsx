import { planName } from "../utils/planName";
import style from "../styles/Plan.module.css";

export const Plan = () => {
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
          <div key={plan.name} className={style.plan__container}>
            <img
              className={style.plan__logo}
              src={`../src/assets/images/${plan.imgSrc}`}
              alt={plan.name}
            />
            <div className={style.plan__details}>
              <h4 className={style.plan__title}>{plan.name}</h4>
              <p className={style.plan__price}>$10/yr</p>
              <p className={style.plan__discount}>2 months free</p>
            </div>
          </div>
        ))}
      </div>
      <div className={style.billing__container}>
        <span className={style.billing__monthly}>Monthly</span>
        <div className={style.billing__sliderContainer}>
          <input className={style.billing__slider} type="checkbox" />
        </div>
        <span className={style.billing__yearly}>Yearly</span>
      </div>
    </form>
  );
};
