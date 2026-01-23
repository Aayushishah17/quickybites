import React from "react";
import { useNavigate } from "react-router-dom";
import "./homenavbar.css";

const HomeNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="home-navbar">
      <div className="nav-left">
        🍔 <span className="logo-text">Foodie</span>
      </div>

      <div className="nav-center">
        <input
          type="text"
          placeholder="Search restaurants or food..."
        />
      </div>

      <div className="nav-right">
        <div className="profile-icon">👤</div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default HomeNavbar;
