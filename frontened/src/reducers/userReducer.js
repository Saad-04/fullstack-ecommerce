import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser } from '../fetchdata/fetchLogin.js'
import { registerUser } from "../fetchdata/fetchRegister.js";
// import { registerUser } from '../fetchdata/fetchRegister.js'
const initialState = {
    user: {},
    loading: false,
    error: null,
    isAuthenticated: null

};
const userLoginSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        clearErrors: (state, action) => {
            state.loading = false;
            state.error = null;
            return state
        }
    },
    //  || registerUser.fulfilled
    extraReducers: (builder) => {
        builder.addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.isAuthenticated = true;
            state.error = null
        })
            .addCase(registerUser.pending, (state, action) => {
                state.loading = true;
                state.isAuthenticated = false;
                state.error = null;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.user = null;
                state.error = action.payload;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.error = null
                state.isAuthenticated = true;
            })
            .addCase(loginUser.pending, (state, action) => {
                state.loading = true;
                state.isAuthenticated = false;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.user = action.payload
            })
            .addCase(logoutUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.user = null;
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
                return state
            });
    },
});
export const { clearErrors } = userLoginSlice.actions
export default userLoginSlice.reducer;
