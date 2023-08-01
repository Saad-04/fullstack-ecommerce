import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import productReducer from "./reducers/productReducer.js";

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
