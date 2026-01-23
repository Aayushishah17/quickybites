import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">QuickBite</h2>

      <div className="navbar-links">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
