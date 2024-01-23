import { createSlice } from "@reduxjs/toolkit";

const theInitialState = {
  darkMode: false,
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: theInitialState,
  reducers: {
    setDarkMode(state, action) {
      state.darkMode = action.payload.darkMode;
      return;
    },
  },
});

export const darkModeActions = darkModeSlice.actions;
export default darkModeSlice;
