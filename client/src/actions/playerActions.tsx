import axios from "axios";
import { GET_PLAYERS, PLAYERS_LOADING } from "../actions/types";

export const getPlayers = (query: string, dispatch: any) => {
  console.log("Halla");

  dispatch(setPlayersLoading());
  axios.get("/api/players?playerName=" + query).then((res) => {
    console.log("PLAYERS", res);

    dispatch({
      type: GET_PLAYERS,
      payload: res.data,
    });
  });
};

export const setPlayersLoading = () => {
  return {
    type: PLAYERS_LOADING,
  };
};
