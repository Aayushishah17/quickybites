import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./homenavbar.css";

import { useSelector } from "react-redux";


const HomeNavbar = ({searchText , setSearchText}) => {
  const navigate = useNavigate();
   const user = useSelector(store => store.user.user)
   const items = useSelector(store => store.restaurant.items)

  const handleLogout = () => {
     localStorage.removeItem("token")
      return navigate("/login")
  };

  return (
    <nav className="home-navbar">
      <div className="nav-left">
        🍔 <span className="logo-text">QuickBite</span>
      </div>

      <div className="nav-center">
        <input
           value={searchText}
            onChange={(e)=> setSearchText(e.target.value)}
          type="text"
          placeholder="Search restaurants or food..."
        />
      </div>

      <div className="nav-right">
        <div className="profile-icon">👤 <span className="user-name">{user?.username}</span></div>
        <button onClick={handleLogout}>Logout</button>
        <Link to={"/checkout"}><span>cartItems : {items?.length}</span></Link>
      </div>
    </nav>
  );
};

export default HomeNavbar;
