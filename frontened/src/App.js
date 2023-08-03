import { useEffect } from "react";
import Header from "./components/layouts//header/Header.js";
import { BrowserRouter as Router } from "react-router-dom";
import webFont from "webfontloader";
import Footer from "./components/layouts/footer/Footer.js";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home.js";
import './index.css'
import ProductDetail from "./components/prodDetail/ProductDetail.js";

function App() {
  useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "chilanka"],
      },
    });
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product/detail/:id" element={<ProductDetail/>} />
      
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
