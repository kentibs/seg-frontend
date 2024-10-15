import { absoluteSideBarActions } from "../reducers/absoluteSideBar";

export const setSideBar = (absoluteSideBar) => {
  return async (dispatch) => {
    await dispatch(
      absoluteSideBarActions.setAbsoluteSideBar({
        absoluteSideBar: absoluteSideBar,
      })
    );
  };
};
