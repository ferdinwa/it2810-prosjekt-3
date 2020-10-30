import { IAppState, IPlayer } from "../interfaces";

//set initial state
const initialState: IAppState = {
  players: {
    players: new Array<IPlayer>(),
    loading: false,
  },
  query: "",
  position: "",
  nation: "",
  club: "",
  age: 0,
  score: 0,
};

export default initialState;
