import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/navbar";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="landing">
      {/* <Navbar /> */}

      <div className="landing-content">
        <h1>Delicious food delivered fast</h1>
        <p>Order from your favorite restaurants anytime</p>

        <Link to="/home" className="cta-btn">
          Explore Restaurants
        </Link>
      </div>
    </div>
  );
};

export default Landing;
