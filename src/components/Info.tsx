import { useDispatch, useSelector } from "react-redux";
// Redux actions
import {
  setName,
  setEmail,
  setPhone,
  resetError,
} from "../store/features/formSlice";
// Redux selectors
import { selectForm } from "../store";

import { FORM_LABEL } from "../utils/validateInfoForm";
import style from "../styles/Info.module.css";

export const Info = () => {
  const dispatch = useDispatch();

  const { name, email, phone, error } = useSelector(selectForm);

  const inputs = [
    {
      value: name,
      label: FORM_LABEL.name,
      action: setName,
      type: "text",
      placeholder: "e.g. Stephen King",
    },
    {
      value: email,
      label: FORM_LABEL.email,
      action: setEmail,
      type: "email",
      placeholder: "e.g. stephenking@lorem.com",
    },
    {
      value: phone,
      label: FORM_LABEL.phone,
      action: setPhone,
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
                if (error.label === input.label) dispatch(resetError());
              }}
            />
          </label>
        ))}
      </form>
    </section>
  );
};
