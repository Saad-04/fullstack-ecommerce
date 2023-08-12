import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk("register", async ( {myForm} ) => {
    try {

        const config = { headers: { "Content-Type": "multipart/form-data" } };

        const { data } = await axios.post(`http://localhost:4000/api/v1/register`, myForm, config);
        return data.user;
    } catch (error) {
        console.log(error.message)
        return error.message;
    }
});