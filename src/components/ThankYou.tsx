import style from "../styles/ThankYou.module.css";

export const ThankYou = () => {
  return (
    <section className={style.thankYou__container}>
      <img
        src="src/assets/images/icon-thank-you.svg"
        className={style.thankYou__image}
      ></img>
      <h1>Thank you!</h1>
      <p>
        {" "}
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </section>
  );
};
