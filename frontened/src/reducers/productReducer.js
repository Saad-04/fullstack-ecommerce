import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/constants.js";

export function productReducer(state = { product: [] }, action) {
  switch (action.type) {
    case ALL_PRODUCT_REQUEST:
      return {
        loading: true,
        product: [],
      };
      break;
    case ALL_PRODUCT_SUCCESS:
      return {
        loading: false,
        productCount: action.payload.productCount,
        product: action.payload.products,
      };
      break;
    case ALL_PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
      break;
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
      break;

    default:
      return state;
  }
}
