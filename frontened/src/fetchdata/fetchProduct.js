import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { useSearchParams } from "react-router-dom";

// export const fetchProduct = createAsyncThunk("product/getProduct", async (keyword='',currentPage) => {
//   try {
//     // const [query, setQuery] = useSearchParams()
//     // let keyword = query.get('keyword')
//     const  { data } = await axios.get(`/api/v1/products?keyword=${keyword}&page=${currentPage}`);
//     return data;
//   } catch (error) {
//     return error.response.data.message;
//   }
// });
export const fetchProduct = createAsyncThunk("product/getProduct", async ({ keyword = '', currentPage, price = [0, 30000], category, rating }) => {
  try {

    let link = `/api/v1/products`


    if (category) {
      link = `/api/v1/products?price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&page=${currentPage}&ratings[gte]=${rating}`
    }
    if (category && rating) {
      link = `/api/v1/products?price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}&page=${currentPage}&ratings=${rating}`
    }
    if (category === 'all' && !keyword) {
      link = `/api/v1/products?price[gte]=${price[0]}&price[lte]=${price[1]}&page=${currentPage}&ratings[gte]=${rating}`
    }
    if (keyword && !category) {
      link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${rating}`
    }
    if (!keyword && !category && rating) {
      link = `/api/v1/products?price[gte]=${price[0]}&price[lte]=${price[1]}&page=${currentPage}&ratings[gte]=${rating}`
    }

    // this query for rating 
    const { data } = await axios.get(link);
    return data
  } catch (error) {
    return error.response.data.message;
  }
});