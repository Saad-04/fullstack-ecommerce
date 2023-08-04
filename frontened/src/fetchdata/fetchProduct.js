import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { useSearchParams } from "react-router-dom";

export const fetchProduct = createAsyncThunk("product/getProduct", async () => {
  try {
    // const [query, setQuery] = useSearchParams()
    // let keyword = query.get('keyword')
    let { data } = await axios.get(`/api/v1/products}`);
    return data;
  } catch (error) {
    return error.response.data.message;
  }
});