import { createSlice } from "@reduxjs/toolkit";

const theInitialState = {
  activeFreq: "",
};

export const activeFreqSlice = createSlice({
  name: "activeFreq",
  initialState: theInitialState,
  reducers: {
    setActiveFreq(state, action) {
      state.activeFreq = action.payload.activeFreq;
      return;
    },
  },
});

export const activeFreqActions = activeFreqSlice.actions;
export default activeFreqSlice;
