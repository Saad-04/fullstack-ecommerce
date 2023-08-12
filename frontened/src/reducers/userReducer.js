import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from '../fetchdata/fetchLogin.js'
import { registerUser } from "../fetchdata/fetchRegister.js";
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
        setLoginData: (state, action) => {
            state.user = action.payload;

        },
        resetLoginState: (state) => {
            state.user = null;
            state.error = null;
        },
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
                state.isAuthenticated = true;
                state.error = null
            })
            .addCase(loginUser.pending, (state, action) => {
                state.loading = true;
                state.isAuthenticated = false;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.user = null;
                state.error = action.payload;
            });
    },
});
export const { clearErrors, setLoginData, resetLoginState } = userLoginSlice.actions
export default userLoginSlice.reducer;
