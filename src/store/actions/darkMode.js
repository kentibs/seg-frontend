import { darkModeActions } from "../reducers/darkMode";

const saveThemeToStorage = (darkMode) => {
  localStorage.setItem(
    "modeToggle",
    JSON.stringify({
      darkMode: darkMode,
    })
  );
};

export const setDarkMode = (darkMode) => {
  return async (dispatch) => {
    await dispatch(
      darkModeActions.setDarkMode({
        darkMode: darkMode,
      })
    );
    saveThemeToStorage(darkMode);
  };
};
