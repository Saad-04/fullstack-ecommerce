import { createSlice } from "@reduxjs/toolkit";
import {
  allProductRequest,
  allProductSuccess,
  allProductFail,
  clearError,
} from "../constants/constants.js";

export function productReducer(state = { product: [] }, action) {
  switch (action.type) {
    case allProductRequest:
      return {
        loading: true,
        product: [],
      };
      break;
    case allProductSuccess:
      return {
        loading: false,
        productCount: action.payload.productCount,
        product: action.payload.products,
      };
      break;
    case allProductFail:
      return {
        loading: false,
        error: action.payload,
      };
      break;
    case clearError:
      return {
        ...state,
        error: null,
      };
      break;

    default:
      return state;
  }
}
 

// let initialState = {
//   loading: true,
//   error: null,
//   product: [],
// };

// export const productSlice = createSlice({
//   name: "product",
//   initialState,
//   reducers: {
//     allProductRequest: (state, action) => {
//       state.loading = true;
//       state.product = [];
//       state.error = null;
//     },

//     allProductSuccess: (state, action) => {
//       state.loading = false;
//       state.product = action.payload.products;
//       state.productCount = action.payload.productCount;
//       state.error = null;
//     },

//     allProductFail: (state, action) => {
//       state.loading = false;
//       state.error = action.payload.error;
//     },
//     clearError: (state, action) => {
//       return {
//         ...state,
//       };
//     },
//   },
// });
// export const {
//   allProductRequest,
//   allProductSuccess,
//   allProductFail,
//   clearError,
// } = productSlice.actions;
// export default productSlice.reducer;
