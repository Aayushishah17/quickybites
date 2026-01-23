import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-container">
      {/* LEFT IMAGE SECTION */}
      <div className="login-left">
        <div className="overlay">
          {/* BRAND ON TOP LEFT */}
          <h2 className="brand-left">QuickBite</h2>
        </div>
      </div>

      {/* RIGHT FORM SECTION */}
      <div className="login-right">
        <h1>Welcome Back !</h1>
        <h3 className="title">Login</h3>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button className="login-btn">Login</button>

        <p className="switch-text">
          Don’t have an account?   <Link to="/register">create account</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
