import { createSlice } from "@reduxjs/toolkit";

const theInitialState = {
  sideBar: "on",
};

export const sideBarSlice = createSlice({
  name: "sideBar",
  initialState: theInitialState,
  reducers: {
    setSideBar(state, action) {
      state.sideBar = action.payload.sideBar;
      return;
    },
  },
});

export const histTabActions = sideBarSlice.actions;
export default sideBarSlice;
