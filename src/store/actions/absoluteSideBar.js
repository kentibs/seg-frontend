import { absoluteSideBarActions } from "../reducers/absoluteSideBar";

export const setAbsoluteSideBar = (absoluteSideBar) => {
  return async (dispatch) => {
    await dispatch(
      absoluteSideBarActions.setAbsoluteSideBar({
        absoluteSideBar: absoluteSideBar,
      })
    );
  };
};
