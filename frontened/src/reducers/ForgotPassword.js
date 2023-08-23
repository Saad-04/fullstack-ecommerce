// import { createSlice } from "@reduxjs/toolkit";
// import { fetchPasswordForgot } from "../fetchdata/fetchForgotPassword.js";
// const initialState = {

//     loading: false,
//     error: null,
//     message: null

// };
// const forgotPasswordSlice = createSlice({
//     name: "forgotPassword",
//     initialState,
//     reducers: {
//         clearErrors: (state, action) => {
//             state.loading = false;
//             state.error = null;
//             return state
//         }
//     },
//     extraReducers: (builder) => {

//         builder
//             .addCase(fetchPasswordForgot.pending, (state, action) => {
//                 state.loading = true;
//                 state.error = null;
//                 return state
//             })
//             .addCase(fetchPasswordForgot.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.message = action.payload;
//                 return state
//             })
//             .addCase(fetchPasswordForgot.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload
//                 return state
//             })
//     },
// });
// export const { clearErrors } = forgotPasswordSlice.actions
// export default forgotPasswordSlice.reducer;
