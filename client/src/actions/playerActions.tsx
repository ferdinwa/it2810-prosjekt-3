import axios from "axios";
import { number } from "yargs";
import { GET_PLAYERS, PLAYERS_LOADING } from "../actions/types";

export const getPlayers = (query: string, dispatch: any, limit: number, skip: number) => {
  console.log("Halla");
  console.log(`limit: ${limit}`)
  console.log(`skip: ${skip}`)

  dispatch(setPlayersLoading());
  axios.get(`/api/players?playerName=${query}&limit=${limit}&skip=${skip}`).then((res) => {
    console.log("PLAYERS", res);

    dispatch({
      type: GET_PLAYERS,
      payload: res.data,
      new: query
    });
  });
};

export const setPlayersLoading = () => {
  return {
    type: PLAYERS_LOADING,
  };
};
