import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import asyncReducer from './reducers';

const store = createStore(
  asyncReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
