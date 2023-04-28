import { Sidebar } from "./Sidebar";
import { Form } from "./Form";
import { Navigation } from "./Navigation";

import style from "../styles/Container.module.css";

export const Container = () => {
  return (
    <main className={style.main}>
      <Sidebar />
      <Form />
      <Navigation />
    </main>
  );
};
