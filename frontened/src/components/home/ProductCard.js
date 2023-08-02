import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import "./home.css";
function ProductCard({ product }) {
  const options = {
    edit: false,
    color: "rgba(255,255,255,0.1)",
    activeColor: "tomato",
    value: product.ratings,
    // isHalf: true
  };
  // 
  return (
    <Link className="productCard" to={product?._id} >
      <img src={product?.image[0]?.url} alt={product.name} />
      <p>{product?.name}</p>
      <ReactStars {...options}/>
      <span>{product.numOfReview} review</span>
      <div>
      </div>
      <span>{`₹${product?.price}`}</span>
    </Link>
  );
}

export default ProductCard;
