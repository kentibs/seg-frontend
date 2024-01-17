import { createSlice } from "@reduxjs/toolkit";

const theInitialState = {
  activeLoginContent: "login",
  isLoginActive: false,
};

export const loginContentSlice = createSlice({
  name: "loginContent",
  initialState: theInitialState,
  reducers: {
    setLoginContent(state, action) {
      state.activeLoginContent = action.payload.activeLoginContent;
      state.isLoginActive = !!state.activeLoginContent;
      return;
    },
  },
});

export const loginContentActions = loginContentSlice.actions;
export default loginContentSlice;
