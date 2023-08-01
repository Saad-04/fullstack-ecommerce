// import {configureStore} from '@reduxjs/toolkit'
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import logger from "redux-logger";
import { productReducer } from "./reducers/productReducer";
import { composeWithDevTools } from "redux-devtools-extension";

// export const store = createStore(
//   combineReducers({
//     product: productReducer,
// }),
// applyMiddleware(logger, thunk)
// );

const reducer = combineReducers({
  product: productReducer,
});
let initialState = {};

const middleware = [thunk];

export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
