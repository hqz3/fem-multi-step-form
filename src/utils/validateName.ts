import { FormError } from "./FormError";
import { INFO_LABEL } from "./validateInfoForm";

export const validateName = (name: string) => {
  if (!name.trim().length)
    throw new FormError(INFO_LABEL.name, "This field is required");

  const nameRegex = /^[a-z ,.'-]+$/i;
  if (!name.match(nameRegex))
    throw new FormError(INFO_LABEL.name, "Not a valid name");
};
