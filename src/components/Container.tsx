import { Sidebar } from "./Sidebar";
import { Form } from "./Form";
import { Navigation } from "./Navigation";

import style from "../styles/Container.module.css";
import { FormContextProvider } from "../context/FormContext";

export const Container = () => {
  return (
    <main className={style.main}>
      <FormContextProvider>
        <Sidebar />
        <Form />
        <Navigation />
      </FormContextProvider>
    </main>
  );
};
