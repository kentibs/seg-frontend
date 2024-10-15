import { createSlice } from "@reduxjs/toolkit";

const theInitialState = {
  absoluteSideBar: "",
};

export const absoluteSideBarSlice = createSlice({
  name: "absoluteSideBar",
  initialState: theInitialState,
  reducers: {
    setAbsoluteSideBar(state, action) {
      state.absoluteSideBar = action.payload.absoluteSideBar;
      return;
    },
  },
});

export const absoluteSideBarActions = absoluteSideBarSlice.actions;
export default absoluteSideBarSlice;
