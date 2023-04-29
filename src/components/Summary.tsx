import { useDispatch, useSelector } from "react-redux";
// Redux actions
import { setStep } from "../store/features/currentStepSlice";
// Redux selectors
import { selectCurrentPlan } from "../store";

import { generateSubscriptionPrice } from "../utils/generateSubscriptionPrice";
import { generateTotalPrice } from "../utils/generateTotalPrice";
import { ADD_ON } from "../utils/addOnName";
import style from "../styles/Summary.module.css";

export const Summary = () => {
  const dispatch = useDispatch();
  const {
    currentPlan,
    currentSubscriptionTerm,
    onlineService,
    largerStorage,
    customProfile,
  } = useSelector(selectCurrentPlan);

  const prices = generateSubscriptionPrice(currentSubscriptionTerm);
  const term = prices.term;

  const total = generateTotalPrice(
    prices,
    currentPlan,
    onlineService,
    largerStorage,
    customProfile
  );

  let addOns = [
    {
      name: ADD_ON.onlineService,
      selected: onlineService,
      price: prices[ADD_ON.onlineService],
    },
    {
      name: ADD_ON.largerStorage,
      selected: largerStorage,
      price: prices[ADD_ON.largerStorage],
    },
    {
      name: ADD_ON.customProfile,
      selected: customProfile,
      price: prices[ADD_ON.customProfile],
    },
  ];

  addOns = addOns.filter((addOn) => !!addOn.selected);

  return (
    <section>
      <h1 className="form__title">Finishing up</h1>
      <p className="form__description">
        Double-check everything looks OK before confirming.
      </p>
      <div className={style.summary}>
        <div className={style.plan__container}>
          <div className={style.plan__details}>
            <p className={style.plan__name}>
              {currentPlan} ({currentSubscriptionTerm})
            </p>
            <a
              className={style.plan__change}
              href="#"
              onClick={() => dispatch(setStep(1))}
            >
              Change
            </a>
          </div>
          <p className={style.plan__price}>
            ${prices[currentPlan]}/{prices.term}
          </p>
        </div>
        <div className={style.addOns__container}>
          {addOns.map((addOn) => (
            <div key={addOn.name} className={style.addOn}>
              <p>{addOn.name}</p>
              <p className={style.addOn__price}>
                +${addOn.price}/{term}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className={style.total}>
        <p>
          Total (per{" "}
          {currentSubscriptionTerm
            .toLowerCase()
            .slice(0, currentSubscriptionTerm.length - 2)}
          )
        </p>
        <p className={style.total__price}>
          +${total}/{term}
        </p>
      </div>
    </section>
  );
};
