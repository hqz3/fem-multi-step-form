import { infoFormLabels } from "../utils/validateInfoForm";
import {
  setName,
  setEmail,
  setPhone,
  setError,
} from "../store/features/formSlice";

import { useDispatch, useSelector } from "react-redux";
import { selectForm, store } from "../store";

import style from "../styles/Info.module.css";

export const Info = () => {
  const dispatch = useDispatch();

  const { name, email, phone, error } = useSelector(selectForm);
  console.log("Info", store.getState().form);

  const inputs = [
    {
      value: name,
      action: setName,
      label: infoFormLabels.name,
      type: "text",
      placeholder: "e.g. Stephen King",
    },
    {
      value: email,
      action: setEmail,
      label: infoFormLabels.email,
      type: "email",
      placeholder: "e.g. stephenking@lorem.com",
    },
    {
      value: phone,
      action: setPhone,
      label: infoFormLabels.phone,
      type: "tel",
      placeholder: "e.g. +1 234 567 890",
    },
  ];

  return (
    <section>
      <h1 className="form__title">Personal info</h1>
      <p className="form__description">
        Please provide your name, email address, and phone number.
      </p>
      <form className={style.info__form}>
        {inputs.map((input) => (
          <label key={input.label}>
            {input.label}
            {error.label === input.label && (
              <span className={style.error__message}>{error.message}</span>
            )}
            <input
              className={
                error.label === input.label ? style.error__outline : ""
              }
              type={input.type}
              placeholder={input.placeholder}
              value={input.value}
              onChange={(e) => {
                dispatch(input.action(e.target.value));

                if (error.label === input.label) {
                  dispatch(setError({ label: null, message: "" }));
                }
              }}
            />
          </label>
        ))}
      </form>
    </section>
  );
};
