import React, { Fragment, useEffect, useState } from "react";
import ProductCard from "../home/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../layouts/loader/Loader";
import { fetchProduct } from "../../fetchdata/fetchProduct";
import { clearErrors } from "../../reducers/detailProduct";
import { useAlert } from "react-alert";
import MetaData from "../layouts/MetaData.js";
import "./product.css";
import { useParams } from "react-router-dom";
import Pagination from 'react-js-pagination'
import { FaStar } from 'react-icons/fa'
// import Slider from '@mui/material/Slider';
// import Box from '@mui/material/Box';

function Products() {


  let [price, setPrice] = useState([0, 30000])
  let [category, setcategory] = useState('all')
  let [rating, setRating] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)//this is for pagination
  const dispatch = useDispatch();
  const alert = useAlert();
  const { keyword } = useParams() //here we access keyword which pass in search.js page 
  const { product, loading, error, productCount, resultPerPage } = useSelector(
    (state) => state.product.products
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(fetchProduct({ keyword, currentPage, price, category, rating })); //here we pass keyword which come from fetchProduct.js parameter
  }, [dispatch, alert, error, keyword, currentPage, price, category, rating]);

  // If there's an error, display the error message using the alert
  useEffect(() => {
    if (error) {
      alert.error(error);
    }
  }, [error, product, price, alert]);
  // if loading is true and product is not defined then show loader 
  if (loading || !product) {
    return <Loader />;
  }

  const setCurrentPageNo = (pageNumber) => {//this is use for pagination not slider 
    setCurrentPage(pageNumber);
  };
  const priceChange = (e) => {
    let val = e.target.value.split('-')

    setPrice([parseInt(val[0]), parseInt(val[1])])
  };

  const options = [
    {
      value: '0-10000',
      text: '0-10000'
    },
    {
      value: '10000-20000',
      text: '10000-20000'
    },
    {
      value: '20000-30000',
      text: '20000-30000'
    }
  ]
  const categoryChange = (e) => {
    let cat = e.target.value
    setcategory(cat)
  }
  const categories = [
    { text: 'all', value: 'all' },
    { text: 'apple', value: 'apple' },
    { text: 'fish', value: 'fish' },
    { text: 'mango', value: "mango" },
    { text: 'orange', value: "orange" },
  ]
  // FaStar section start here 
  const fastarOptions = {
    size: 15,
    color: "gold",
    cursor: 'pointer'
  }
  const handleRating = (e) => {
    if (rating === e) {
      // If the same rating is clicked again, reset the rating filter
      setRating(0);
    } else {
      setRating(e);
    }
  }
  return (
    <Fragment>

      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="PRODUCTS -- ECOMMERCE" />
          <h2 className="productsHeading">Products</h2>

          <div className="products">

            {
              product.map((every, i) => {
                return (<ProductCard product={every} key={i} />)
              })
            }

          </div>
          <div className="filterBox">
            <p for='price' >price</p>
            <select onChange={priceChange} >
              {options.map((e, i) => {
                return <option key={i} value={e.value} >{e.text}</option>
              })}
            </select>
            <p for='category' >Category</p>
            <select onChange={categoryChange} >
              {categories.map((e, i) => {
                return <option key={i} value={e.value} >{e.text}</option>
              })}
            </select>
            <p for='ratings' >select rating</p>


            {[...Array(5)].map((e, i) => {
              let starValue = i + 1;
              return <FaStar onClick={() => handleRating(starValue)} key={i} {...fastarOptions} className="fastar" />
            })}
          </div>

          {resultPerPage < productCount &&
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>}

        </Fragment>
      )}
    </Fragment>
  );
}

export default Products;
