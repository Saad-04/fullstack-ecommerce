import React,{useEffect} from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-material-ui-carousel";
import { fetchProductDetail } from "../../fetchdata/fetchDetailProduct";
import { useParams } from "react-router-dom";
function ProductDetail() {
  const dispatch = useDispatch();
  const {id} = useParams()
  const { product } = useSelector((state) => state.detailPro.detail);

  useEffect(() => {
    dispatch(fetchProductDetail(id));
  }, [dispatch,id])

  return (
    <Fragment>
      <div>
        <Carousel>
          {product &&
            product.image.map((e, i) => {
             return <img
                className="CarouselImage"
                src={e.url}
                alt={`${i} Slide`}
                key={e.url}
              />;
            })}
        </Carousel>
      </div>
    </Fragment>
  );
}

export default ProductDetail;
