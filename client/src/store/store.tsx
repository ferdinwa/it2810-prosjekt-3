import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import initialState from "./initialState";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware)
    //   (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    //     (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    // )
  )
);

export default store;
