import { FormError } from "./FormError";

export const validateName = (label: string, name: string) => {
  if (!name.trim().length) throw new FormError(label, "This field is required");

  const nameRegex = /^[a-z ,.'-]+$/i;
  if (!name.match(nameRegex)) throw new FormError(label, "Not a valid name");
};
