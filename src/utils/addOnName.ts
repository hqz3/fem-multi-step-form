export const ADD_ON = {
  onlineService: "Online service",
  largerStorage: "Larger storage",
  customProfile: "Customizable profile",
} as const;

type Keys = keyof typeof ADD_ON;
export type AddOnType = (typeof ADD_ON)[Keys];
