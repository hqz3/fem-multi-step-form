import { FormError } from "./FormError";

export const validatePhone = (label: string, phone: string) => {
  if (!phone.trim().length)
    throw new FormError(label, "This field is required");

  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  if (!phone.match(phoneRegex))
    throw new FormError(label, "Not a valid phone number");
};
