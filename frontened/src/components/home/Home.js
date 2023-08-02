import React, {  useEffect } from "react";
import "./home.css";
import { VscBracketDot } from "react-icons/vsc";
import ProductCard from "./ProductCard.js";
import { MetaData } from "../layouts/MetaData.js";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../layouts/loader/Loader.js";
import {useAlert} from 'react-alert'
import { fetchProduct } from "../../fetchdata/fetchProduct";
import { fetchProductDetail } from "../../fetchdata/fetchDetailProduct";


function Home() {

  const dispatch = useDispatch();
  const alert = useAlert()
  const { user, loading, error } = useSelector((state) => state.product.products);
  const  data = useSelector((state) => state.detailPro.product); 

  useEffect(() => {
    if(error){
      return alert.error(error)
    }
    dispatch(fetchProduct());
    dispatch(fetchProductDetail("64ca71e7eb1bedd86ac884c4"));
  }, [dispatch,error]);

  return (
 <>
 {loading? <Loader/>: <>
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
   {user && //this user reture array of multiple objects [{},{},{}]
     user.map((e) => {
       return <ProductCard product={e} />;
     })}
 </div>
</>  }
 
 </>
  );
}

export default Home;
