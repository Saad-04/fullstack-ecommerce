import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from '../../../images/saad-logo.png'
import {FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
function Header() {
  const options = {
    burgerColorHover: "#eb4034",
    logo,
    logoWidth: "20vmax",
    navColor1: "white",
    logoHoverSize: "10px",
    logoHoverColor: "#eb4034",
    logoAnimationTime: '0.6',
    link1AnimationTime: '0.7',
    link2AnimationTime: '0.8',
    link3AnimationTime: '0.9',
    link4AnimationTime: '1',
    link1Text: "Home",
    link2Text: "Products",
    link3Text: "Contact",
    link4Text: "About",
    link1Url: "/",
    link2Url: "/products",
    link3Url: "/contact",
    link4Url: "/about",
    //search icon 
    SearchIconElement:<FaSearch/>,
    searchIconColor:"black",
    searchIconUrl:'/search',
    searchIconSize:'1vmax',
    // profile icon 
    ProfileIconElement:<FaUser/>,
    profileIconColor:"black",
    profileIconUrl:'/',
    profileIconSize:'1vmax',
    link1Size: "1.3vmax",
    link1Color: "black",
    nav1justifyContent: "flex-end",
    nav2justifyContent: "flex-end",
    nav3justifyContent: "flex-start",
    nav4justifyContent: "flex-start",
    link1ColorHover: "#eb4034",
    link1Margin: "1vmax",
    
  
  }
  return (
    <ReactNavbar {...options} ></ReactNavbar >
  );
}

export default Header;
