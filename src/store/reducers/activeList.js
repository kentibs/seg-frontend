import { createSlice } from "@reduxjs/toolkit";

const theInitialState = {
  activeList: "",
};

export const activeListSlice = createSlice({
  name: "activeList",
  initialState: theInitialState,
  reducers: {
    setActiveList(state, action) {
      state.activeList = action.payload.activeList;
      return;
    },
  },
});

export const activeListActions = activeListSlice.actions;
export default activeListSlice;
