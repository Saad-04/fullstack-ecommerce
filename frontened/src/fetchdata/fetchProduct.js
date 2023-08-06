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
export const fetchProduct = createAsyncThunk("product/getProduct", async ({ keyword = '', currentPage, price = [0, 30000] ,category}) => {
  try {
    let link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gt]=${price[0]}&price[lt]=${price[1]}&category=${category}`

    if(!category && !keyword  ){
      link = `/api/v1/products`
    }
    if(category === 'all' && price ){
      link = `/api/v1/products`
    }
    if(keyword && !category ){
      link = `/api/v1/products?keyword=${keyword}&page=${currentPage}`
    }

    const { data } = await axios.get(link);
  return data
  } catch (error) {
    return error.response.data.message;
  }
});