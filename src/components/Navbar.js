import React from "react";
import {Link } from "react-router-dom";
import { useSelector } from "react-redux";


const Navbar = () => {
  const stat = useSelector((state)=> state.handelCart)
  return (
     <div>
         <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
  <div className="container">
   <Link className="logo navbar-brand fw-bold fs" to="/">Wintey-Mart</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <Link className="nav-link  mx-1" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link mx-1" to="/products">Products</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link mx-1" to="/about">About</Link>
        </li>
        <li className="nav-item">
         <Link className="nav-link mx-1" to="contact">Contact</Link>
        </li>
      </ul>
      <div className="buttons">
         <Link to="/login" className="btn btn-outline-dark">
          <i className="fa fa-sign-in me-2"></i>Login</Link>
         <Link to="/register" className="btn btn-outline-dark ms-2">
          <i className="fa fa-user-plus me-2"></i>Signup</Link>
         <Link to="/cart" className="btn btn-outline-dark ms-2">
          <i className="fa fa-shopping-cart me-2"></i>Cart ({stat.length})</Link>
      </div>
    </div>
  </div>
</nav>
     </div> 
  );
};

export default Navbar;
