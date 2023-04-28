import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { subscriptionTerm } from "../../utils/generateSubscriptionPrice";
import { planName } from "../../utils/planName";

type Plan = {
  currentPlan: string;
  currentSubscriptionTerm: string;
  onlineService: boolean;
  largerStorage: boolean;
  customProfile: boolean;
};

const initialState: Plan = {
  currentPlan: planName.arcade,
  currentSubscriptionTerm: subscriptionTerm.monthly,
  onlineService: false,
  largerStorage: false,
  customProfile: false,
};

export const currentPlanSlice = createSlice({
  name: "currentPlan",
  initialState,
  reducers: {
    setCurrentPlan: (state, action: PayloadAction<string>) => {
      state.currentPlan = action.payload;
    },
    setCurrentSubscriptionTerm: (state, action: PayloadAction<string>) => {
      state.currentSubscriptionTerm = action.payload;
    },
    toggleOnlineService: (state) => {
      state.onlineService = !state.onlineService;
    },
    toggleLargerStorage: (state) => {
      state.largerStorage = !state.largerStorage;
    },
    toggleCustomProfile: (state) => {
      state.customProfile = !state.customProfile;
    },
  },
});

export const {
  setCurrentPlan,
  setCurrentSubscriptionTerm,
  toggleOnlineService,
  toggleLargerStorage,
  toggleCustomProfile,
} = currentPlanSlice.actions;
