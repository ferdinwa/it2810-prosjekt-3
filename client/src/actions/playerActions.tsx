import axios from "axios";
import { GET_PLAYERS, PLAYERS_LOADING } from "../actions/types";

//method to get players from database, and set the payload to this list
export const getPlayers = (
  query: string,
  position: string,
  nation: string,
  club: string,
  age: number,
  score: number,
  dispatch: any,
  limit: number,
  skip: number
) => {
  dispatch(setPlayersLoading());
  console.log("getPlayers", score);
  axios
    .get(
      `/api/players?playerName=${query}&position=${position}&nation=${nation}&club=${club}&limit=${limit}&skip=${skip}&age=${age}&score=${score}`
    )
    .then((res) => {
      console.log("PLAYERS", res);
      dispatch({
        type: GET_PLAYERS,
        payload: res.data,
        new: query,
      });
    });
};

export const setPlayersLoading = () => {
  return {
    type: PLAYERS_LOADING,
  };
};
