import style from "../styles/Info.module.css";

export const Info = () => {
  const inputs = [
    { label: "Name", type: "text", placeholder: "e.g. Stephen King" },
    {
      label: "Email Address",
      type: "email",
      placeholder: "e.g. stephenking@lorem.com",
    },
    { label: "Phone Number", type: "tel", placeholder: "e.g. +1 234 567 890" },
  ];

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
            {/* <span className={style.error__message}>This field is required</span> */}
            <input type={input.type} placeholder={input.placeholder} />
          </label>
        ))}
      </form>
    </section>
  );
};
