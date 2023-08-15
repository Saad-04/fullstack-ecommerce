import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const loginUser = createAsyncThunk("user/login", async (info, thunkAPI) => {
    try {
        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.post(
            `/api/v1/login`,
            { email: info.loginEmail, password: info.loginPassword },
            config
        );
        return data.user
    } catch (error) {
        return error.response.data.message
    }

})
