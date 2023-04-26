import { Sidebar } from "./Sidebar";
import { Form } from "./Form";
import { Navigation } from "./Navigation";

import { FormContextProvider } from "../context/FormContext";

import style from "../styles/Container.module.css";

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
