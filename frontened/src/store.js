import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer.js";
import detailProduct from "./reducers/detailProduct.js";

export const store = configureStore({
  reducer: {
    product: productReducer,
    detailPro:detailProduct
  },
});
