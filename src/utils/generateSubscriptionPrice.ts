import { PLAN, PlanTypes } from "./planName";
import { ADD_ON, AddOnTypes } from "./addOnName";

export const SUBSCRIPTION_TERM = {
  monthly: "Monthly",
  yearly: "Yearly",
} as const;

type Keys = keyof typeof SUBSCRIPTION_TERM;
export type SubcriptionTermTypes = (typeof SUBSCRIPTION_TERM)[Keys];

type Plan = Record<PlanTypes, number>;
type AddOn = Record<AddOnTypes, number>;

export type SubcriptionPriceType = {
  term: string;
} & Plan &
  AddOn;

export const generateSubscriptionPrice = (
  term: string
): SubcriptionPriceType => {
  switch (term) {
    case SUBSCRIPTION_TERM.monthly:
      return {
        term: "mo",
        [PLAN.arcade]: 9,
        [PLAN.advanced]: 12,
        [PLAN.pro]: 15,
        [ADD_ON.onlineService]: 1,
        [ADD_ON.largerStorage]: 2,
        [ADD_ON.customProfile]: 2,
      };
    default:
      return {
        term: "yr",
        [PLAN.arcade]: 90,
        [PLAN.advanced]: 120,
        [PLAN.pro]: 150,
        [ADD_ON.onlineService]: 10,
        [ADD_ON.largerStorage]: 20,
        [ADD_ON.customProfile]: 20,
      };
  }
};
