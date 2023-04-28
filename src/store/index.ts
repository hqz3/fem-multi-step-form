import { configureStore } from "@reduxjs/toolkit";
import { formSlice } from "./features/formSlice";
import { currentStepSlice } from "./features/currentStepSlice";
import { currentPlanSlice } from "./features/currentPlanSlice";

export const store = configureStore({
  reducer: {
    currentStep: currentStepSlice.reducer,
    form: formSlice.reducer,
    currentPlan: currentPlanSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const selectCurrentStep = (state: RootState) => state.currentStep;
export const selectForm = (state: RootState) => state.form;
export const selectCurrentPlan = (state: RootState) => state.currentPlan;
