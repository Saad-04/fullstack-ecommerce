import React, { useEffect } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-material-ui-carousel";
import { fetchProductDetail } from "../../fetchdata/fetchDetailProduct.js";
import { useParams } from "react-router-dom";
import Loader from "../layouts/loader/Loader.js";
import "./productdetail.css";
import { useAlert } from "react-alert";
import ReviewCard from "./ReviewCard.js";
import ReactStars from "react-rating-stars-component";
import { clearErrors } from '../../reducers/detailProduct.js'
import MetaData from "../layouts/MetaData.js";
import Btn from '../../extra/Btn.js'
function ProductDetail() {
  const { product, loading, error } = useSelector(
    (state) => state.detailPro.detail
  );
  const dispatch = useDispatch();
  const alert = useAlert();
  const { id } = useParams();


  useEffect(() => { //when page load then this effect call every time and fetch data from fetchProductDetail function
    if (error) {

      alert.error(error);
      dispatch(clearErrors())
    }
    dispatch(fetchProductDetail(id));

  }, [dispatch, id, error, alert]);
  // if error come then alert error message 
  useEffect(() => {
    if (error) {
      alert.error(error);
    }
  }, [error, alert]);

  // If the product is still loading, show the loader
  if (loading || !product) {
    return <Loader />;
  }


  // on submit review button 
  const submitReviewToggle = () => {

  }


  let options = {
    edit: false,
    color: "lightGrey",
    value: product.ratings,
    isHalf: true
  };

  return (
    <Fragment>
      {loading && product ? (
        <Loader />
      ) : (<Fragment>
        <MetaData title={`${product.name}--Ecommerce`} />
        <div className="ProductDetails">
          <div>
            <Carousel>
              {product &&
                product.image.map((e, i) => {
                  return (
                    <img
                      className="CarouselImage"
                      src={e.url}
                      alt={`${i} Slide`}
                      key={e.url}
                    />
                  );
                })}
            </Carousel>
          </div>

          <div>
            <div className="detailsBlock-1">
              <h2>{product.name && product.name}</h2>
              <p>Product # {product._id && product._id}</p>
            </div>

            <div className="detailsBlock-2">
              {<ReactStars {...options} />}
              <span className="detailsBlock-2-span">
                {" "}
                ({product.numOfReview && product.numOfReview} Reviews)
              </span>
            </div>

            <div className="detailsBlock-3">
              <h1>{`₹${product.price && product.price}`}</h1>
              <div className="detailsBlock-3-1">
                <div className="detailsBlock-3-1-1">
                  <button onClick={""}>-</button>
                  <input readOnly type="number" value={""} />
                  <button onClick={""}>+</button>
                </div>
                <button>Add to Cart</button>
              </div>

              <p>
                Status:
                <b className={product.stock < 1 ? "redColor" : "greenColor"}>
                  {product.stock < 1 ? "OutOfStock" : "InStock"}
                </b>
              </p>
            </div>
            <div className="detailsBlock-4">
              Description : <p>{product.description}</p>
            </div>

            <Btn onClick={submitReviewToggle} title='Submit review' className='submitReview' />
           
            
            </div>
            </div>
            <h3 className="reviewsHeading">REVIEWS</h3>
            {
              (product.reviews && product.reviews[0]) ?
                (product.reviews && product.reviews.map((e) => {
                  return <ReviewCard review={e} />
                })) : (<p className="noReviews">No Reviews Yet</p>)
            }
      </Fragment>
      )}
    </Fragment>
  )
}

export default ProductDetail;
