import { useFormContext } from "../context/useFormContext";
import { generateSubscriptionPrice } from "../utils/generateSubscriptionPrice";
import { addOnName } from "../utils/addOnName";
import style from "../styles/AddOn.module.css";

export const AddOn = () => {
  const { currentTerm } = useFormContext();

  const prices = generateSubscriptionPrice(currentTerm);

  const addOns = [
    {
      name: addOnName.onlineService,
      description: "Access to multiplayer games",
    },
    {
      name: addOnName.largerStorage,
      description: "Extra 1TB of cloud save",
    },
    {
      name: addOnName.customProfile,
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
        <div key={addOn.name} className={style.addOn__container}>
          <input type="checkbox" />
          <div className={style.addOn__details}>
            <h5 className={style.addOn__name}>{addOn.name}</h5>
            <p className={style.addOn__description}>{addOn.description}</p>
          </div>
          <p className={style.addOn__price}>
            {`+$${prices[addOn.name]}/${prices.term}`}
          </p>
        </div>
      ))}
    </section>
  );
};
