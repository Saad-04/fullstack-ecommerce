import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const loginUser = createAsyncThunk("user/login", async ({ email, password }) => {
    try {
        const config = { Headers: { "Content-Type": "application/json" } }//here we set headers when user login successfully
        const { data } = await axios.post('http://localhost:4000/api/v1/login', { email, password }, config);
        return data.user//this user is object of user model 
    } catch (error) {
        return error.message;
    }
});
