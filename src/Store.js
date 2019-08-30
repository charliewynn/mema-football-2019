import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducers/RootReducer";

const initialState = {};

export default function configureStore(config) {
  initialState.Config = config;
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
