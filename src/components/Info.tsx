import { useFormContext } from "../context/useFormContext";
import style from "../styles/Info.module.css";

export const Info = () => {
  const { name, setName, email, setEmail, phone, setPhone } = useFormContext();

  const inputs = [
    {
      value: name,
      setState: setName,
      label: "Name",
      type: "text",
      placeholder: "e.g. Stephen King",
    },
    {
      value: email,
      setState: setEmail,
      label: "Email Address",
      type: "email",
      placeholder: "e.g. stephenking@lorem.com",
    },
    {
      value: phone,
      setState: setPhone,
      label: "Phone Number",
      type: "tel",
      placeholder: "e.g. +1 234 567 890",
    },
  ];

  /* <span className={style.error__message}>This field is required</span> */

  return (
    <section className={style.info}>
      <h1 className={style.info__title}>Personal info</h1>
      <p className={style.info__description}>
        Please provide your name, email address, and phone number.
      </p>
      <form className={style.info__form}>
        {inputs.map((input) => (
          <label key={input.label}>
            {input.label}
            <input
              type={input.type}
              placeholder={input.placeholder}
              value={input.value}
              onChange={(e) => {
                input.setState(e.target.value);
              }}
            />
          </label>
        ))}
      </form>
    </section>
  );
};
