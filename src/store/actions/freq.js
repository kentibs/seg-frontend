import { activeFreqActions } from "../reducers/freq";

export const setActiveFreq = (activeFreq) => {
  return async (dispatch) => {
    await dispatch(activeFreqActions.setActiveFreq({ activeFreq: activeFreq }));
  };
};
