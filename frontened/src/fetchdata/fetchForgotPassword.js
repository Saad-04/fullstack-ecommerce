// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchPasswordForgot = createAsyncThunk("password/forgot", async (email, thunkAPI) => {
//     try {
//         const config = { headers: { "Content-Type": "application/json" } };

//         const { data } = await axios.post(`/api/v1/password/forgot`, email, config);
//         return await data.message
//     } catch (error) {
//         return error.response.data.message;
//     }
// }
// )
