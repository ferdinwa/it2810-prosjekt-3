import { SET_NATION } from "./types";

export const setNation = (nation: string) => {
  return { type: SET_NATION, payload: nation };
};
