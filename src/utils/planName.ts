export const PLAN = {
  arcade: "Arcade",
  advanced: "Advanced",
  pro: "Pro",
} as const;

type Keys = keyof typeof PLAN;
export type PlanType = (typeof PLAN)[Keys];
