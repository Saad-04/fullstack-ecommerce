import { createSlice } from "@reduxjs/toolkit";
import { fetchProductDetail} from '../fetchdata/fetchDetailProduct.js'

const initialState = {
    detail: {},
    loading:false,
    error:null
  };

 const productDetailSlice = createSlice({
    name: "detailPro",
    initialState,
    reducers: {
      clearErrors:(state,action)=>{
        state.loading = false;
        state.error = null
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchProductDetail.fulfilled, (state, action) => {
          state.detail= action.payload;
          state.loading = false
        })
        .addCase(fetchProductDetail.pending, (state, action) => {
          state.loading = true;
           return state
        })
        .addCase(fetchProductDetail.rejected, (state, action) => {
          state.loading = false
          state.error = action.payload
        });
    },
  });
  export const { clearErrors } = productDetailSlice.actions;
  export default productDetailSlice.reducer;
  
  