// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const fetchPasswordUpdate = createAsyncThunk("password/update", async (password, thunkAPI) => {
//     try {
//         const config = { headers: { "Content-Type": "application/json" } };

//         const { data } = await axios.put(`/api/v1/password/update`, password, config);
//         return await data.success
//     } catch (error) {
//         return error.response.data.message;
//     }
// }
// )
