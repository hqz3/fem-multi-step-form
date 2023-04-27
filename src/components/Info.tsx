import { useFormContext } from "../context/useFormContext";
import { infoFormLabels } from "../utils/validateInfoForm";
import style from "../styles/Info.module.css";

export const Info = () => {
  const { name, setName, email, setEmail, phone, setPhone, error, setError } =
    useFormContext();

  const inputs = [
    {
      value: name,
      setState: setName,
      label: infoFormLabels.name,
      type: "text",
      placeholder: "e.g. Stephen King",
    },
    {
      value: email,
      setState: setEmail,
      label: infoFormLabels.email,
      type: "email",
      placeholder: "e.g. stephenking@lorem.com",
    },
    {
      value: phone,
      setState: setPhone,
      label: infoFormLabels.phone,
      type: "tel",
      placeholder: "e.g. +1 234 567 890",
    },
  ];

  return (
    <section className={style.info}>
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
                input.setState(e.target.value);
                if (error.label === input.label) {
                  setError({ label: null, message: "" });
                }
              }}
            />
          </label>
        ))}
      </form>
    </section>
  );
};
