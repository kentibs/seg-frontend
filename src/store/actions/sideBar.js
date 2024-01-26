import { sideBarActions } from "../reducers/sideBar";

export const setSideBar = (sideBar) => {
  return async (dispatch) => {
    await dispatch(sideBarActions.setSideBar({ sideBar: sideBar }));
  };
};
