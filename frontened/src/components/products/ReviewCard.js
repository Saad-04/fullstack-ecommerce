import React from "react";
import "./productdetail.css";
import ReactStars from "react-rating-stars-component";
import profilePng from '../../images/Profile.png'
function ReviewCard({ review }) {
  const options = {
    color: "lightGrey",
    value: review.rating,
    isHalf:true,
    size: window.innerWidth < 600?20:50,
    edit:false
    // activeColor:"blue"
  
};
 
  return (
    <div className="reviewCard">
      <img src={profilePng} alt="User" />
      <ReactStars {...options} />
      <p>{review.name}</p>
      <span className="reviewCardComment">{review.comment}</span>
    </div>
  );
}

export default ReviewCard;
