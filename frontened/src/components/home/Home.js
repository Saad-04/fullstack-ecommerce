import React, { Fragment, useEffect } from "react";
import "./home.css";
import { VscBracketDot } from "react-icons/vsc";
import ProductCard from "./ProductCard.js";
import { MetaData } from "../layouts/MetaData.js";
import getProduct from "../../actions/productAction.js";
import { useDispatch, useSelector } from "react-redux";

const product = {
  name: "saad",
  images: [
    {
      url: "https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2022/img/Amazon_Exports/XCM_CUTTLE_1469244_2584128_758x608_2X_en_US._SY608_CB609318944_.jpg ",
    },
  ],
  price: 1000,
  _id: "saad",
};

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct());
  }, dispatch);

  return (
    <Fragment>
      <MetaData title="saad ali" />
      <div className="banner">
        <p>Welcome to Ecommerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>

        <a href="#container">
          <button>
            Scroll <VscBracketDot />
          </button>
        </a>
      </div>

      <h2 className="homeHeading">Featured Products</h2>

      <div className="container" id="container">
        <ProductCard product={product} />
      </div>
    </Fragment>
  );
}

export default Home;
