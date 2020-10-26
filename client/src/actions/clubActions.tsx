import { SET_CLUB } from "./types";

export const setClub = (club: string) => {
  return { type: SET_CLUB, payload: club };
};
