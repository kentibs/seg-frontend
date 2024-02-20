import { createSlice } from "@reduxjs/toolkit";

const theInitialState = {
  homeDarkMode: false,
};

export const homeDarkModeSlice = createSlice({
  name: "homeDarkMode",
  initialState: theInitialState,
  reducers: {
    setHomeDarkMode(state, action) {
      state.homeDarkMode = action.payload.homeDarkMode;
      return;
    },
  },
});

export const homeDarkModeActions = homeDarkModeSlice.actions;
export default homeDarkModeSlice;
