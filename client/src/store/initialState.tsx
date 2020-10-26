import { IAppState, IPlayer } from "../interfaces";

const initialState: IAppState = {
  players: {
    players: new Array<IPlayer>(),
    loading: false,
  },

  query: {
    query: " ",
  },

  position: "",
};

export default initialState;
