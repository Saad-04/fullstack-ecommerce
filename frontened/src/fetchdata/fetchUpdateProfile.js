import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const profileUpdate = createAsyncThunk("profile/update", async (info, thunkAPI) => {
    try {
        // const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.post(`/api/v1/profile/update`);
        return await data.success
    } catch (error) {
        return error.response.data.message
    }
}
)