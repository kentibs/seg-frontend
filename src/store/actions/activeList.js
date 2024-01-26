import { activeListActions } from "../reducers/activeList";

export const setActiveList = (activeList) => {
  return async (dispatch) => {
    await dispatch(activeListActions.setActiveList({ activeList: activeList }));
  };
};
