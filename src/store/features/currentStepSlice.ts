import { createSlice } from "@reduxjs/toolkit";

type Step = {
  currentStep: number;
};

const initialState: Step = { currentStep: 0 };

export const currentStepSlice = createSlice({
  name: "currentStep",
  initialState,
  reducers: {
    incrementStep: (state) => {
      state.currentStep += 1;
    },
    decrementStep: (state) => {
      state.currentStep -= 1;
    },
  },
});

export const { incrementStep, decrementStep } = currentStepSlice.actions;
