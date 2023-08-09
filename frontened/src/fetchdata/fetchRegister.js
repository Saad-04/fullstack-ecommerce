import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk("user/register", async ( {myForm}) => {
    try {
        const config = { Headers: { "Contect-Type": "multipart/form-data" } }
        const { data } = await axios.post('/api/v1/register', myForm, config);
        return data.user
    } catch (error) {
        return error.response.data.message;
    }
});