import { GET_SCORE } from "./types";

export const getScore = (score: number) => {
  console.log("Score", score);
  return {
    type: GET_SCORE,
    payload: score,
  };
};
