import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from '../../../images/saad-logo.png'
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
    link5AnimationTime: '1.1',
    link1Text: "Home",
    link2Text: "Products",
    link3Text: "Contact",
    link4Text: "About",
    link5Text: "search",
    link1Url: "/",
    link2Url: "/products",
    link3Url: "/contact",
    link4Url: "/about",
    link5Url: "/search",

    link1Size: "1.3vmax",
    link1Color: "black",
    nav1justifyContent: "flex-end",
    nav2justifyContent: "flex-end",
    nav3justifyContent: "flex-start",
    nav4justifyContent: "flex-start",
    nav5justifyContent: "flex-start",
    link1ColorHover: "#eb4034",
    link1Margin: "1vmax",
    
  
  }
  return (
    <ReactNavbar {...options} ></ReactNavbar >
  );
}

export default Header;
