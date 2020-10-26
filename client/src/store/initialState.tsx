import { IAppState } from "../interfaces";

const initialState: IAppState = {
  players: {
    players: [],
    loading: false,
  },

  query: {
    query: " ",
  },

  position: {
    position: "",
  },
};

export default initialState;
