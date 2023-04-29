import { FormError } from "./FormError";
import { FORM_LABEL } from "./validateInfoForm";

export const validatePhone = (phone: string) => {
  if (!phone.trim().length)
    throw new FormError(FORM_LABEL.phone, "This field is required");

  const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

  if (!phone.match(phoneRegex))
    throw new FormError(FORM_LABEL.phone, "Not a valid phone number");
};
