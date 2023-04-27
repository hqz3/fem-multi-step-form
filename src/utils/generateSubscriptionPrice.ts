import { planName } from "./planName";
import { addOnName } from "./addOnName";

export const subscriptionTerm = {
  monthly: "Monthly",
  yearly: "Yearly",
};

export const generateSubscriptionPrice = (term: string) => {
  switch (term) {
    case subscriptionTerm.monthly:
      return {
        term: "mo",
        [planName.arcade]: 9,
        [planName.advanced]: 12,
        [planName.pro]: 15,
        [addOnName.onlineService]: 1,
        [addOnName.largerStorage]: 2,
        [addOnName.customProfile]: 2,
      };
    case subscriptionTerm.yearly:
      return {
        term: "yr",
        [planName.arcade]: 90,
        [planName.advanced]: 120,
        [planName.pro]: 150,
        [addOnName.onlineService]: 10,
        [addOnName.largerStorage]: 20,
        [addOnName.customProfile]: 20,
      };
  }
};
