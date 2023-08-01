import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from '../../../images/saad-logo.png'
function Header() {
  const options ={
    burgerColorHover:"#eb4034",
    logo,
    logoWidth:"20vmax",
    navColor1:"white",
    logoHoverSize:"10px",
    logoHoverColor:"#eb4034",
    link1Text:"Home",
    link2Text:"Products",
    link3Text:"Contact",
    link4Text:"About",
    link1Url:"/",
    link2Url:"/products",
    link3Url:"/contact",
    link4Url:"/about",
    profileIconUrl:"/login",
    link1Size:"1.3vmax",
    link1Color:"rgba(35 35 350.8)",
    nav1justifyContent:"flex-end",
    nav2justifyContent:"flex-end",
    nav3justifyContent:"flex-start",
    nav4justifyContent:"flex-start",
    link1ColorHover:"#eb4034",
    link1Margin:"1vmax",
    profileIconColor:"rgba(35 35 350.8)",
    searchIconColor:"rgba(35 35 350.8)",
    cartIconColor:"rgba(35 35 350.8)",
    profileIconColorHover:"#eb4034",
    searchIconColorHover:"#eb4034",
    cartIconColorHover:"#eb4034",
    cartIconMargin:"1vmax"
  }
  return (
    <ReactNavbar {...options}></ReactNavbar >
  );
}

export default Header;
