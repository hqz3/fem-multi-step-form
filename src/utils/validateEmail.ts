import { FormError } from "./FormError";

export const validateEmail = (label: string, email: string) => {
  if (!email.trim().length)
    throw new FormError(label, "This field is required");

  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!email.toLowerCase().match(emailRegex))
    throw new FormError(label, "Not a valid email");
};
