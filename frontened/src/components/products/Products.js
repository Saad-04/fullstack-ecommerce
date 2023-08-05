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
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

function Products() {
  const [price, setPrice] = useState([0, 30000])//this for slider 
  const dispatch = useDispatch();
  const alert = useAlert();
  const { keyword } = useParams() //here we access keyword which pass in search.js page 
  let [currentPage, setCurrentPage] = useState(1)//this is for pagination
  const { product, loading, error, productCount, resultPerPage } = useSelector(
    (state) => state.product.products
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(fetchProduct({ keyword, currentPage, price })); //here we pass keyword which come from fetchProduct.js parameter
  }, [dispatch, error, product, keyword, alert, currentPage, price]);

  // If there's an error, display the error message using the alert
  useEffect(() => {
    if (error) {
      <Loader />;
      alert.error(error);
    }
  }, [error, product, alert]);
  // if loading is true and product is not defined then show loader 
  if (loading || !product) {
    return <Loader />;
  }

  const setCurrentPageNo = (e) => {
    setCurrentPage(e)//this e is current page number 
  }

  // slider area start here 


  function valuetext(value) {
    return `${value}°C`;
  }
  const handleChange = (event, newValue) => {
    setPrice(newValue);
  };
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
              product.map((every) => {
                return <ProductCard product={every} key={product._id} />;
              })}
          </div>

          <div className="filterBox">
            <Box sx={{ width: 200 }}>
              <Slider
                getAriaLabel={() => 'Temperature range'}
                value={price}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                max={30000}
                min={0}
              />
            </Box>
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
