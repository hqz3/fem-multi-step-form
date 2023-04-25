import style from "../styles/Navigation.module.css";

// TODO
// Render Back and Next buttons based on the current step index
// Pass in a step index via props

export const Navigation = () => {
  return (
    <nav className={style.navigation__container}>
      <a className={style.navigation__back} href="#">
        Go Back
      </a>
      <button className={style.navigation__button}>Next Step</button>
    </nav>
  );
};
