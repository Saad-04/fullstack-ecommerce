import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProfileUpdate = createAsyncThunk("profile/update", async (info, thunkAPI) => {
    try {
        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.put(`/api/v1/profile/update`, info, config);
        return await data.success
    } catch (error) {
        return error.response.data.message
    }
}
)