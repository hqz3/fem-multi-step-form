import { useDispatch, useSelector } from "react-redux";
// Redux actions
import {
  toggleOnlineService,
  toggleLargerStorage,
  toggleCustomProfile,
} from "../store/features/currentPlanSlice";
// Redux selectors
import { selectCurrentPlan } from "../store";

import { generateSubscriptionPrice } from "../utils/generateSubscriptionPrice";
import { ADD_ON } from "../utils/addOnName";
import style from "../styles/AddOn.module.css";

export const AddOn = () => {
  const dispatch = useDispatch();
  const {
    currentSubscriptionTerm,
    onlineService,
    largerStorage,
    customProfile,
  } = useSelector(selectCurrentPlan);

  const prices = generateSubscriptionPrice(currentSubscriptionTerm);
  const term = prices.term;

  const addOns = [
    {
      name: ADD_ON.onlineService,
      selected: onlineService,
      action: toggleOnlineService,
      price: prices[ADD_ON.onlineService],
      description: "Access to multiplayer games",
    },
    {
      name: ADD_ON.largerStorage,
      selected: largerStorage,
      action: toggleLargerStorage,
      price: prices[ADD_ON.largerStorage],
      description: "Extra 1TB of cloud save",
    },
    {
      name: ADD_ON.customProfile,
      selected: customProfile,
      action: toggleCustomProfile,
      price: prices[ADD_ON.customProfile],
      description: "Custom theme on your profile",
    },
  ];

  return (
    <section>
      <h1 className="form__title">Pick add-ons</h1>
      <p className="form__description">
        Add-ons help enhance your gaming experience.
      </p>
      {addOns.map((addOn) => (
        <div
          key={addOn.name}
          className={`${style.addOn__container} ${
            addOn.selected ? style.addOn__containerSelected : ""
          }`}
          onClick={() => {
            dispatch(addOn.action());
          }}
        >
          <input
            type="checkbox"
            checked={addOn.selected}
            onChange={() => undefined}
          />
          <div className={style.addOn__details}>
            <h5 className={style.addOn__name}>{addOn.name}</h5>
            <p className={style.addOn__description}>{addOn.description}</p>
          </div>
          <p className={style.addOn__price}>
            +${addOn.price}/{term}
          </p>
        </div>
      ))}
    </section>
  );
};
