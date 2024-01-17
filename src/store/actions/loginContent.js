import { loginContentActions } from "../reducers/loginContent";

export const setLoginContent = (activeLoginContent) => {
  return async (dispatch) => {
    await dispatch(
      loginContentActions.setLoginContent({
        activeLoginContent: activeLoginContent,
      })
    );
  };
};
