import { createSlice } from "@reduxjs/toolkit";

const theInitialState = {
  showCardNotification: false,
  cardNotificationType: null,
  cardMessage: null,
};
export const notificationSlice = createSlice({
  name: "notification",
  initialState: theInitialState,
  reducers: {
    showCardNotification(state, action) {
      state.showCardNotification = true;
      state.cardNotificationType = action.payload.type;
      state.cardMessage = action.payload.message;
    },
    hideCardNotification(state) {
      state.showCardNotification = false;
      state.cardNotificationType = null;
      state.cardMessage = null;
    },
  },
});

export const notificationActions = notificationSlice.actions;
export default notificationSlice;
