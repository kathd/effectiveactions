import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <NavLink to="/">
          <img className="logo" src="" alt="logo" />
        </NavLink>
      </div>
      <div className="nav-right">
        <NavLink to="/">projects</NavLink>|
        <NavLink to="/">about us</NavLink>|
        <NavLink to="/">sponsor</NavLink>
        <NavLink to="/">account</NavLink>
      </div>
      <p></p>
    </nav>
  );
};

export default Navbar;
