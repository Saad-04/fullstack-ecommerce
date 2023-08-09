import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const loginUser = createAsyncThunk("user/login", async ({ email, password }) => {
    try {
        const config = { Headers: { "Contect-Type": "application/json" } }
        const { data } = await axios.post('/api/v1/login', { email, password }, config);
        return data.user
    } catch (error) {
        return error.response.data.message;
    }
});
