import axios from "axios";
import { ALL_REVIEW_REQUEST, ALL_REVIEW_SUCCESS } from "../constants/constants";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const ALL_PRODUCT_REQUEST = "ALL_PRODUCT_REQUEST";
export const ALL_PRODUCT_SUCCESS = "ALL_PRODUCT_SUCCESS";
export const ALL_PRODUCT_FAIL = "ALL_PRODUCT_FAIL";

const getProduct = async (dispatch) => {
  try {
    dispatch({ type: ALL_REVIEW_REQUEST });
    const { data } = await axios.get("/api/v1/products");

    dispatch({
      type: ALL_REVIEW_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCT_FAIL,
      payload: error.message,
    });
  }
};

export default getProduct;
