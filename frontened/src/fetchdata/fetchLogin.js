import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const loginUser = createAsyncThunk("user/login", async ({ email, password }, thunkAPI) => {
    try {
        let link
        if (link === false) {
            link = `/api/v1/login`;
        }
        else {
            link = ''
        }
        const config = { Headers: { "Content-Type": "application/json" } }//here we set headers when user login successfully
        const { data } = await axios.post(link, { email, password }, config);
        return data
        //this user is object of user model 
    } catch (error) {
        return (error.message);
    }
});
