import { useEffect } from "react";
import Header from "./components/layouts//header/Header.js";
import { BrowserRouter as Router } from "react-router-dom";
import webFont from "webfontloader";
import Footer from "./components/layouts/footer/Footer.js";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home.js";
import './index.css'
import ProductDetail from "./components/products/ProductDetail.js";
import Products from './components/products/Products.js';
import Search from './components/products/Search.js';
import Login from "./components/User/Login.js";
import Register from "./components/User/Register.js";
import { useSelector } from "react-redux";
import UserOptions from './components/layouts/header/UserOptions.js'
import NotFound from './components/layouts/NotFound.js'
import Profile from './components/User/Profile.js'
function App() {
  const { user, isAuthenticated } = useSelector((state) => state.users)
  useEffect(() => {
    webFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "chilanka"],
      },
    });
  }, []);

  return (
    <Router>
     <Header/>
      {isAuthenticated && <UserOptions user={user} />}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/detail/:id" element={<ProductDetail />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:keyword" element={<Products />} />
        <Route exact path="/profile" element={<Profile/>} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="/search" element={<Search />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}
//  <Route path="/products/:keyword" element={<Products/>} /> this is for search query method 
export default App;