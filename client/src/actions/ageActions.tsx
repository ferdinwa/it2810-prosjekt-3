import { SET_AGE } from "./types";

export const setAge = (age: string) => {
  return {
    type: SET_AGE,
    payload: age,
  };
};
