import { createSlice } from "@reduxjs/toolkit";
import { profileUpdate } from "../fetchdata/fetchUpdateProfile.js";
const initialState = {
    
    loading: false,
    error: null,
    isUpdated: null

};
const profileUpdateSlice = createSlice({
    name: "profileUpdate",
    initialState,
    reducers: {
        clearErrors: (state, action) => {
            state.loading = false;
            state.error = null;
            return state
        },
        updateProfileReset: (state, action) => {
            state.isUpdated = false;
            return state
        }
    },
    //  || registerUser.fulfilled
    extraReducers: (builder) => {

        builder
            .addCase(profileUpdate.pending, (state, action) => {
                state.loading = true;
                return state
            })
            .addCase(profileUpdate.fulfilled, (state, action) => {
                state.loading = false;
                state.isUpdated = action.payload;
                return state
            })
            .addCase(profileUpdate.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload
                return state
            })
    },
});
export const { clearErrors, updateProfileReset } = profileUpdateSlice.actions
export default profileUpdateSlice.reducer;
