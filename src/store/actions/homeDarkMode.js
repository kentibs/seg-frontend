import { homeDarkModeActions } from "../reducers/homeDarkMode";

export const setHomeDarkMode = (homeDarkMode) => {
  return async (dispatch) => {
    await dispatch(
      homeDarkModeActions.setHomeDarkMode({
        homeDarkMode: homeDarkMode,
      })
    );
  };
};
