import React, { useState } from 'react'
import './header.css'
import { Link } from "react-router-dom"
import { FaSearch, FaShoppingCart } from 'react-icons/fa'
function Header() {
  const [showPriceOptions, setShowPriceOptions] = useState(false);
  const [showCategoryOptions, setShowCategoryOptions] = useState(false);

  const handlePriceHover = () => {
    setShowPriceOptions(true);
    setShowCategoryOptions(false);
  };

  const handleCategoryHover = () => {
    setShowCategoryOptions(true);
    setShowPriceOptions(false);
  };
  // icons optionns start here 
  // const options ={
  // color:'white',
  // cursor:'pointer'
  // }
  // <div className='block-3'>
  // <Link to='/' ><FaShoppingCart {...options} /></Link>
  // </div>
  return (
    <>
      <header className="header">
        <div className="header-container">
          <Link to='/'><div className="header-item">Home</div></Link>

          <Link to='/products'><div className="header-item">Products</div></Link>

          <Link to='/loginSignUp'><div className="header-item">Contact</div></Link>

          <Link to='/about'><div className="header-item">About</div></Link>
          <div
            className="header-item"
            onMouseEnter={handlePriceHover}
            onMouseLeave={() => setShowPriceOptions(false)}
          >
            Price
            {showPriceOptions && (
              <div className="options">
                <option>d</option>
                <option>d</option>
                <option>d</option>
              </div>
            )}
          </div>
          <div className="header-item"
            onMouseEnter={handleCategoryHover}
            onMouseLeave={() => setShowCategoryOptions(false)}
          >
            Category
            {showCategoryOptions && (
              <div className="options">
                <option>Fruits</option>
                <option>Vegetables</option>
                <option>Meat</option>
              </div>
            )}
          </div>
        </div>

      </header>
    </>
  )
}

export default Header