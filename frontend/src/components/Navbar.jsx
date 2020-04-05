import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <NavLink to="/">
          <img className="logo" src="/images/logo.png" alt="logo" />
        </NavLink>
      </div>
      <div className="nav-right">
        <NavLink to="/">projects</NavLink>|<NavLink to="/">about us</NavLink>|
        <NavLink to="/">sponsor</NavLink>
        <NavLink to="/">
          <i className="icons">
            <i aria-hidden="true" className="chevron left icon"></i>
          </i>
        </NavLink>
        <NavLink to="/">
          <i className="huge icons">
            <i aria-hidden="true" className="user icon"></i>
          </i>
        </NavLink>
        
      </div>
      <p></p>
    </nav>
  );
};

export default Navbar;
