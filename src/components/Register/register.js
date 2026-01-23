import React, { useState } from "react";
import { Link, replace } from "react-router-dom";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
   const [username , setUserName] = useState("");
   const [emailId , setEmail] = useState("");
   const [password , setPassword] = useState("");
   const navigate = useNavigate();

  const handleSubmit = async() => {
       setUserName("")
       setEmail("")
       setPassword("")
       try{
        const data = await axios.post("http://localhost:5000/api/v1/auth/signup",{
        username : username,
        emailId : emailId,
        password : password
        })

       console.log("data : ",data.data);
       if(data && data.data?.success){
           navigate("/login");
       }
       }catch(err){
          console.log(err);
       }
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
          <input value={username} onChange={(e)=> setUserName(e.target.value)} type="text" placeholder="Enter your name" />

          <label>Email</label>
          <input value={emailId} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Enter your email" />

          <label>Password</label>
          <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Enter password" />

          <label className="signing-label">Signing As</label>
  
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
