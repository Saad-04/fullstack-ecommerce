import { useState } from "react";
import MetaData from "../layouts/MetaData.js";
import './search.css'
import { useNavigate } from 'react-router-dom'
// import { useSearchParams } from "react-router-dom";
import React from "react";

const Search = () => {
  let [keyword, setKeyword] = useState('')
  const navigate = useNavigate()
  // const [query, setQuery] = useSearchParams()


  const submitForm = (e) => {
    e.preventDefault();
    keyword = keyword.trim()
    // setQuery({ keyword })
    if (keyword) return navigate(`/products/${keyword}`)
    // console.log(keyword)

    // else {
    //   navigate(`/products`)
    // }
  }

  const inputChange = (e) => {
    e.preventDefault()
    setKeyword(e.target.value)

  }
  return (
    <>
      <MetaData title="Search A Product -- ECOMMERCE" />
      <form className="searchBox" onSubmit={submitForm} >
        <input type="text" placeholder="Search a Product ..." onChange={inputChange} />
        <input type="submit" value='Search' />
      </form>
    </>
  );
};

export default Search;
