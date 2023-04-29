import { SubcriptionPriceType } from "./generateSubscriptionPrice";
import { PlanType } from "./planName";
import { ADD_ON } from "./addOnName";

export const generateTotalPrice = (
  prices: SubcriptionPriceType,
  currentPlan: PlanType,
  onlineService: boolean,
  largerStorage: boolean,
  customProfile: boolean
): number => {
  let total = 0;

  total += prices[currentPlan];
  if (onlineService) total += prices[ADD_ON.onlineService];
  if (largerStorage) total += prices[ADD_ON.largerStorage];
  if (customProfile) total += prices[ADD_ON.customProfile];
  return total;
};
