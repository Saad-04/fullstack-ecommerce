import React, { Fragment, useEffect } from "react";
import ProductCard from "../home/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../layouts/loader/Loader";
import { fetchProduct } from "../../fetchdata/fetchProduct";
import { clearErrors } from "../../reducers/detailProduct";
import { useAlert } from "react-alert";
import MetaData from "../layouts/MetaData.js";
import "./product.css";
import { useParams } from "react-router-dom";


function Products() {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { product, loading, error } = useSelector(
    (state) => state.product.products
  );
  let { keyword } = useParams() //here we access keyword which pass in search.js page 

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(fetchProduct(keyword)); //here we pass keyword which come from fetchProduct.js parameter
  }, [dispatch, error, product, keyword, alert]);

  // If there's an error, display the error message using the alert
  useEffect(() => {
    if (error) {
      <Loader />;
      alert.error(error);
    }
  }, [error, product, alert]);
  if (loading || !product) {
    return <Loader />;
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
            {product &&
              product.map((every) => {
                return <ProductCard product={every} key={product._id} />;
              })}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
}

export default Products;
