import {  createSlice } from "@reduxjs/toolkit";
import { fetchProduct } from "../fetchdata/fetchProduct.js";

const initialState = {
  products: [],
  loading:false,
  error:null
  
};
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.products= action.payload;
        state.loading = false;
      })
      .addCase(fetchProduct.pending, (state, action) => {
        state.loading = true
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      });
  },
});
export default productSlice.reducer;
