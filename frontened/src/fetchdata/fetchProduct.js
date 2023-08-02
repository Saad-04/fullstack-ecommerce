import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk("product/getProduct", async () => {
    try {
      const { data } = await axios.get("/api/v1/products");
  
      return data;
    } catch (error) {
      return error.response.data.message;
    }
  });