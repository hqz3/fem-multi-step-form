import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  SUBSCRIPTION_TERM,
  SubcriptionTermTypes,
} from "../../utils/generateSubscriptionPrice";
import { PLAN, PlanTypes } from "../../utils/planName";

type Plan = {
  currentPlan: PlanTypes;
  currentSubscriptionTerm: SubcriptionTermTypes;
  onlineService: boolean;
  largerStorage: boolean;
  customProfile: boolean;
};

const initialState: Plan = {
  currentPlan: PLAN.arcade,
  currentSubscriptionTerm: SUBSCRIPTION_TERM.monthly,
  onlineService: false,
  largerStorage: false,
  customProfile: false,
};

export const currentPlanSlice = createSlice({
  name: "currentPlan",
  initialState,
  reducers: {
    setCurrentPlan: (state, action: PayloadAction<PlanTypes>) => {
      state.currentPlan = action.payload;
    },
    setCurrentSubscriptionTerm: (
      state,
      action: PayloadAction<SubcriptionTermTypes>
    ) => {
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
