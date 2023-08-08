import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer.js";
import detailProduct from "./reducers/detailProduct.js";
import userLogin from "./reducers/userReducer.js";
import { combineReducers } from "@reduxjs/toolkit";
const rootReducers = combineReducers({
  product: productReducer,
  detailPro: detailProduct,
  user: userLogin
})
export const store = configureStore({
  reducer: rootReducers
});
