import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProductDetail = createAsyncThunk(
  "product/detail",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/v1/product/detail/${id}`);

      if (data) {
        return data;
      }
    } catch (error) {
      return error.response.data.message;
    }
  }
);
