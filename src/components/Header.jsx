import React from 'react'
import Logo from '../assets/images/logo.png'
import '../styles/header.css'
import { IoPersonCircleOutline } from "react-icons/io5"
import { FaShoppingCart, FaBox } from "react-icons/fa"
import { IoHelpCircleOutline } from "react-icons/io5"
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../auth/authSlice'
import { Link } from 'react-router-dom'


const Header = () => {
    const dispatch = useDispatch()
  const {totalQuantity} = useSelector(state=>state.carts)
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-primary bg-dark">
<div className="container-fluid px-4 py-3">

<Link className="navbar-brand fw-bold fs-4" to="/">
 <img src={Logo} style={{ width: '80px', borderRadius: '50%', marginRight: '170px'}}/>
</Link>

<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon navbar-dark"></span>
</button>


<div className="collapse navbar-collapse" id="navbarContent">
  
  <div className="search-container mx-sm-4 my-3 my-sm-0 flex-grow-1 ">
      <div className="input-group">
          <input type="text" className="form-control search-input" placeholder="Search products, brands and categories" />
          <button className="btn btn-outline-light text-white fw-semibold px-4" type="button">
              Search
          </button>
      </div>
  </div>

  
  <div className="navbar-nav ms-auto">
    
      <div className="nav-item dropdown">
           <button className="btn btn-link text-white text-decoration-none dropdown-toggle d-flex align-items-center gap-2" type="button" id="helpDropdown" data-bs-toggle="dropdown" aria-expanded="false">
               <IoPersonCircleOutline style={{height: '24px', width: '24px'}}/>
               <span>Account</span>
           </button>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="accountDropdown">

             <li>
          <Link className="dropdown-item d-flex align-items-center gap-2" to="/register">
              Sign Up
          </Link>
          <hr />
      </li>

        <li>
          <Link className="dropdown-item d-flex align-items-center gap-2" to="/login" >
              Sign In
          </Link>
          
      </li>
       <hr />
        <li>
          <Link className="dropdown-item d-flex align-items-center gap-2" onClick={()=>dispatch(logout())}>
              Logout
          </Link>
          
      </li>
      </ul>
      </div>

      <div className="nav-item dropdown">
           <button className="btn btn-link text-white text-decoration-none dropdown-toggle d-flex align-items-center gap-2" type="button" id="helpDropdown" data-bs-toggle="dropdown" aria-expanded="false">
               <FaBox style={{height: '24px', width: '24px'}}/>
               <span>Product</span>
           </button>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="accountDropdown">

             <li>
          <Link className="dropdown-item d-flex align-items-center gap-2" to="/create-product">
              Create Product
          </Link>
          <hr />
      </li>
      <li>
          <Link className="dropdown-item d-flex align-items-center gap-2" to="/products">
              <i className="bi bi-box-seam"></i>
              Product Listing
          </Link>
      </li>
          </ul>
      </div>
    
      <div className="nav-item dropdown">
         <button className="btn btn-link text-white text-decoration-none dropdown-toggle d-flex align-items-center gap-2" type="button" id="helpDropdown" data-bs-toggle="dropdown" aria-expanded="false">
               <IoHelpCircleOutline style={{height: '24px', width: '24px'}} />
               <span>Help</span>
           </button>
           <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="helpDropdown">
               <li><Link className="dropdown-item" to="#">About Us</Link></li>
               <li><hr className="dropdown-divider"/></li>
               <li><Link className="dropdown-item" to="#">Contact Us</Link></li>
           </ul>
      </div>

      
      <Link to="/cart" className="btn btn-link text-white text-decoration-none d-flex align-items-center gap-2">
        <FaShoppingCart style={{height: '24px', width: '24px'}}/> 
        <span>Cart</span><p style={{position:'absolute',fontWeight:'bold', color:'green'}}>{totalQuantity}</p>
      </Link>
  </div>
</div>
</div>
</nav>
    </>
  )
}

export default Header
