import { SET_AGE } from "./types";

export const setAge = (age: number) => {
  return {
    type: SET_AGE,
    payload: age,
  };
};
