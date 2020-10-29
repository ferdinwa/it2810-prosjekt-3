import axios from "axios";
import { GET_PLAYERS, PLAYERS_LOADING } from "../actions/types";


export const getPlayers = (
  query: string,
  position: string,
  nation: string,
  club: string,
  age: number,
  dispatch: any,
  limit: number,
  skip: number
) => {
  dispatch(setPlayersLoading());
  axios
    .get(
      `/api/players?playerName=${query}&position=${position}&nation=${nation}&club=${club}&limit=${limit}&skip=${skip}&age=${age}`
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
