import { combineReducers } from "redux";
import playerReducer from "./playerReducer";
import positionReducer from "./positionReducer";

export default combineReducers({
  players: playerReducer,
  position: positionReducer,
});

// export default positionReducer;
