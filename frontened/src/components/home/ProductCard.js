import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import "./home.css";
function ProductCard({ product }) {
  const options = {
    edit: false,
    color: "lightGrey",
    activeColor: "tomato",
    value: product.ratings,
    size: window.innerWidth < 600?10:16,
    isHalf: true
  };
  //
  return (
    <Link className="productCard" to={`/product/detail/${product._id}`}>
      <img src={product.image[0].url} alt={product.name} />
      <p>{product.name}</p>
      <ReactStars {...options} />
      <span>Review:<span>{product.numOfReview}</span> </span>
      <div>
      <span>{`Rs ${product.price}`}</span>
      </div>
    </Link>
  );
}

export default ProductCard;
