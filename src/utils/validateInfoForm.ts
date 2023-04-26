import { validateName } from "./validateName";
import { validateEmail } from "./validateEmail";
import { validatePhone } from "./validatePhone";
import { FormError } from "./FormError";

interface ReturnInterface {
  label: null | string;
  message: string;
}

export const infoFormLabels = {
  name: "Name",
  email: "Email Address",
  phone: "Phone Number",
};

export const validateInfoForm = (
  name: string,
  email: string,
  phone: string
): ReturnInterface => {
  try {
    validateName(infoFormLabels.name, name);
    validateEmail(infoFormLabels.email, email);
    validatePhone(infoFormLabels.phone, phone);
  } catch (error) {
    if (error instanceof FormError) {
      const { label, message } = error;
      return { label, message };
    }
  }

  return { label: null, message: "" };
};
