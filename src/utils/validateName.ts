import { FormError } from "./FormError";
import { FORM_LABEL } from "./validateInfoForm";

export const validateName = (name: string) => {
  if (!name.trim().length)
    throw new FormError(FORM_LABEL.name, "This field is required");

  const nameRegex = /^[a-z ,.'-]+$/i;
  if (!name.match(nameRegex))
    throw new FormError(FORM_LABEL.name, "Not a valid name");
};
