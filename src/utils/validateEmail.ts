import { FormError } from "./FormError";
import { FORM_LABEL } from "./validateInfoForm";

export const validateEmail = (email: string) => {
  if (!email.trim().length)
    throw new FormError(FORM_LABEL.email, "This field is required");

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!email.toLowerCase().match(emailRegex))
    throw new FormError(FORM_LABEL.email, "Not a valid email");
};
