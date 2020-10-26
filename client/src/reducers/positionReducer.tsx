import initialState from "../store/initialState";
import { IAppState, IAction } from "../interfaces";
import { GET_POSITION, POSITION_LOADING } from "../actions/types";

const positionReducer = (state: IAppState = initialState, action: IAction) => {
  switch (action.type) {
    case GET_POSITION:
      return {
        ...state,
        position: action.payload,
      };
    case POSITION_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default positionReducer;
