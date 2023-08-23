// import { createSlice } from "@reduxjs/toolkit";
// import { fetchPasswordUpdate } from "../fetchdata/fetchUpdatePassword.js";
// const initialState = {

//     loading: false,
//     error: null,
//     isUpdated: null

// };
// const updatePasswordSlice = createSlice({
//     name: "updatePassword",
//     initialState,
//     reducers: {
//         clearErrors: (state, action) => {
//             state.loading = false;
//             state.error = null;
//             return state
//         },
//         updatePasswordReset: (state, action) => {
//             state.isUpdated = false;
//             return state
//         }
//     },
//     //  || registerUser.fulfilled
//     extraReducers: (builder) => {

//         builder
//             .addCase(fetchPasswordUpdate.pending, (state, action) => {
//                 state.loading = true;
//                 return state
//             })
//             .addCase(fetchPasswordUpdate.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.isUpdated = action.payload;
//                 return state
//             })
//             .addCase(fetchPasswordUpdate.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload
//                 return state
//             })
//     },
// });
// export const { clearErrors, updatePasswordReset } = updatePasswordSlice.actions
// export default updatePasswordSlice.reducer;
