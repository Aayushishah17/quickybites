import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

function Register() {
//   const [role, setRole] = useState("buyer");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registered successfully (connect backend later)");
  };

  return (
    <div className="register-page">
      {/* LEFT IMAGE SECTION */}
      <div className="register-left">
        <div className="overlay">
          {/* BRAND */}
          <h2 className="brand-left">QuickBite</h2>
        </div>
      </div>

      {/* RIGHT FORM SECTION */}
      <div className="register-right">
        <div className="register-card">
          <h2>Create Account</h2>

          <label>Name</label>
          <input type="text" placeholder="Enter your name" />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <input type="password" placeholder="Enter password" />

          <label className="signing-label">Signing As</label>
          {/* <div className="radio-group">
            <label>
              <input
                type="radio"
                name="role"
                checked={role === "buyer"}
                onChange={() => setRole("buyer")}
              />
              Buyer
            </label>

            <label>
              <input
                type="radio"
                name="role"
                checked={role === "supplier"}
                onChange={() => setRole("supplier")}
              />
              Supplier
            </label>
          </div> */}

          <button className="signup-btn" onClick={handleSubmit}>
            SIGN UP
          </button>

          <p className="terms">
            By registering, you agree to the{" "}
            <span>Terms and Conditions</span>
          </p>

          <p className="login-text">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
