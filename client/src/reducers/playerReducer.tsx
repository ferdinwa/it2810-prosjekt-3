import {
  GET_PLAYERS,
  PLAYERS_LOADING,
  SET_POSITION,
  SET_NATION,
  SET_CLUB,
} from "../actions/types";
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
      };
    case SET_POSITION:
      return {
        ...state,
        position: action.payload,
      };
    case PLAYERS_LOADING:
      return {
        ...state,
        loading: true,
      };

    case SET_NATION:
      return {
        ...state,
        nation: action.payload,
      };

    case SET_CLUB:
      return {
        ...state,
        club: action.payload,
      };
    default:
      return state;
  }
}
