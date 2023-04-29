import { validateName } from "./validateName";
import { validateEmail } from "./validateEmail";
import { validatePhone } from "./validatePhone";
import { FormError } from "./FormError";

interface ReturnInterface {
  label: null | string;
  message: string;
}

export const FORM_LABEL = {
  name: "Name",
  email: "Email Address",
  phone: "Phone Number",
} as const;

export const validateInfoForm = (
  name: string,
  email: string,
  phone: string
): ReturnInterface => {
  try {
    validateName(name);
    validateEmail(email);
    validatePhone(phone);
  } catch (error) {
    if (error instanceof FormError) {
      const { label, message } = error;
      return { label, message };
    }
  }

  return { label: null, message: "" };
};
