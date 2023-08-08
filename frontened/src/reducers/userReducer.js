import {  createSlice } from "@reduxjs/toolkit";
import {loginUser} from '../fetchdata/loginUser.js'

const initialState = {
  user:{},
  loading:false,
  error:null,
  isAuthenticated:false
  
};
const userLoginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearErrors:(state,action)=>{
        state.loading = false;
        state.error = null
      }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
       state.loading = false
       state.user = action.payload
       state.isAuthenticated = true
      })
      .addCase(loginUser.pending, (state, action) => {
        state.loading = true
       state.isAuthenticated = false
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.isAuthenticated = false
        state.user = null
        state.error = action.payload
      });
  },
});
export default userLoginSlice.reducer;
