import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userProfile = createAsyncThunk("user/profile", async (thunkAPI) => {
    try {
        const { data } = await axios.get(
            `/api/v1/profile`);
        return await data.user;
    } catch (error) {
        return error.response.data.message
    }
}
)
