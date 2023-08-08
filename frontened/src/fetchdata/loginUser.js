import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const loginUser = createAsyncThunk("product/getProduct", async ({ email, password }) => {
    try {
        const config = { Headers: { "Contect-Type": "application/json" } }
        const { data } = await axios.post('/api/v1/login', { email, password }, config);
        return data
    } catch (error) {
        return error.response.data.message;
    }
});