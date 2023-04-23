import style from "../styles/Container.module.css";
import { Sidebar } from "./Sidebar";
import { Form } from "./Form";
import { Navigation } from "./Navigation";

export const Container = () => {
  return (
    <main className={style.main}>
      <Sidebar />
      <Form />
      <Navigation />
    </main>
  );
};
