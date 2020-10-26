import { SET_POSITION, POSITION_LOADING } from "./types";

export const setPosition = (pos: string) => {
  return { type: SET_POSITION, payload: pos };
};

export const setPositionLoading = () => {
  return {
    type: POSITION_LOADING,
  };
};
