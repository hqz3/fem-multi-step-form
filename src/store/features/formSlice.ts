import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FormError {
  label: null | string;
  message: string;
}

interface Form {
  name: string;
  email: string;
  phone: string;
  error: FormError;
}

const initialState: Form = {
  name: "",
  email: "",
  phone: "",
  error: {
    label: null,
    message: "",
  },
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setError: (state, action: PayloadAction<FormError>) => {
      state.error = action.payload;
    },
    resetError: (state) => {
      state.error = { label: null, message: "" };
    },
  },
});

export const { setName, setEmail, setPhone, setError, resetError } =
  formSlice.actions;
