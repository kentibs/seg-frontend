import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "./reducers/register";
import errorMsgSlice from "./reducers/errorMsg";
import authSlice from "./reducers/auth";
import tokenSlice from "./reducers/token";
import tabSlice from "./reducers/tabs";
import specialSlice from "./reducers/specialToken";
import histTabSlice from "./reducers/histTabs";
import loginContentSlice from "./reducers/loginContent";
import notificationSlice from "./reducers/notification";
import darkModeSlice from "./reducers/darkMode";

const store = configureStore({
  reducer: {
    register: registerSlice.reducer,
    errorMsg: errorMsgSlice.reducer,
    auth: authSlice.reducer,
    token: tokenSlice.reducer,
    tabs: tabSlice.reducer,
    special: specialSlice.reducer,
    histTabs: histTabSlice.reducer,
    loginContent: loginContentSlice.reducer,
    notification: notificationSlice.reducer,
    darkMode: darkModeSlice.reducer,
  },
});

export default store;
