import React from "react";
import "./header.css";
import { Outlet, Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="nav justify-content-between px-3">
      
        <div className="nav-header ">
          <div className="nav-title">Navbar</div>
        </div>
        

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/immigration">Immigration</Link>
         
          <Link to="/login">Login</Link>
        </div>
      </div>
    </>
  );
}

export default Header;
