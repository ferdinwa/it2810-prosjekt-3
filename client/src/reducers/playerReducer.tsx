import { CLIENT_RENEG_LIMIT } from "tls";
import { GET_PLAYERS, PLAYERS_LOADING } from "../actions/types";
import { IAppState, IAction } from "../interfaces";
import initialState from "../store/initialState";

//type Actions =
//| ReturnType<typeof AddPlayer> | ReturnType<typeof RemovePlayer>

export default function playerReducer(
  state: IAppState = initialState,
  action: IAction
) {
  switch (action.type) {
    case GET_PLAYERS:
      return {
        ...state,
        players: {
          players: action.payload,
          loading: false,
        },
        query: action.new
      };
    case PLAYERS_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
