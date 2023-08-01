import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  allProductRequest,
  allProductSuccess,
  allProductFail,
  clearError,
} from "../constants/constants.js";
import { useDispatch, useSelector } from "react-redux";
const initialState = {
  productssss: [],
};

export const fetchData = createAsyncThunk("product/getProduct", async () => {
  try {
    const { data } = await axios.get("/api/v1/products");

    return data;
  } catch (error) {
    return error.message;
  }
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // getProduct: (state, action) => {
    //   state.products = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.productssss = action.payload;
      })
      .addCase(fetchData.pending, (state, action) => {})
      .addCase(fetchData.rejected, (state, action) => {});
  },
});
export const { getProduct } = productSlice.actions;
export default productSlice.reducer;
