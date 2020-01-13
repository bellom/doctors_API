import { createStore, applyMiddleware } from "redux";
import asyncReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
  asyncReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
