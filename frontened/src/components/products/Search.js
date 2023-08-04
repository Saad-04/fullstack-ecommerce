import { useState } from "react";
import MetaData from "../layouts/MetaData.js";
import './search.css'
import { useNavigate } from 'react-router-dom'
import { useSearchParams } from "react-router-dom";
import React from "react";

const Search = () => {
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()
  const [query, setQuery] = useSearchParams()


  const submitForm = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      setQuery({ keyword })
      navigate(`/products?keyword=${query.get('keyword')}}`)
      console.log(keyword)
    }
    else {
      navigate(`/products`)
    }
  }

  let inputChange = (e) => {
    setKeyword(e.target.value)
  }
  return (
    <>
      <MetaData title="Search A Product -- ECOMMERCE" />
      <form className="searchBox" onSubmit={submitForm} >
        <input type="text" placeholder="Search a Product ..." />
        <input type="submit" value="Search" onChange={inputChange} />
      </form>
    </>
  );
};

export default Search;
