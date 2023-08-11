import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from '../fetchdata/fetchLogin.js'
// import { registerUser } from '../fetchdata/fetchRegister.js'
const initialState = {
    user: {},
    loading: false,
    error: null,
    isAuthenticated: false

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
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload
                state.isAuthenticated = true;
                return state

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
export const { clearErrors } = userLoginSlice.actions
export default userLoginSlice.reducer;
