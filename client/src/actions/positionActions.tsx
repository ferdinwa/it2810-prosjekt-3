import { GET_POSITION, POSITION_LOADING } from "./types";

export const getPosition = (pos: string) => (dispatch: Function) => {
  dispatch({
    type: GET_POSITION,
    payload: pos,
  });
};

export const setPositionLoading = () => {
  return {
    type: POSITION_LOADING,
  };
};
