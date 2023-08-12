import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const loginUser = createAsyncThunk("user/login", async ({ email, password }, thunkAPI) => {
    try {
        const config = { Headers: { "Content-Type": "application/json" } }//here we set headers when user login successfully
        await axios.post('http://localhost:4000/api/v1/login', { email, password }, config);
        //this user is object of user model 
    } catch (error) {
        return (error.response.data.message);
    }
});
