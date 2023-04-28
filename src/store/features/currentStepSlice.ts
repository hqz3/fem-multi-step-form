import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Step = {
  currentStep: number;
};

const initialState: Step = { currentStep: 1 };

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
    setStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
  },
});

export const { incrementStep, decrementStep, setStep } =
  currentStepSlice.actions;
