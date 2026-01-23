import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../../slice/userSlice";
function Login() {
  const[emailId , setEmail] = useState("");
  const[password , setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async()=>{
     try{
        const data = await axios.post("http://localhost:5000/api/v1/auth/login",{
          emailId : emailId,
          password : password
        },);
        console.log("data from login : ", data.data);
        if(data && data.data?.success){
             dispatch(addUser({
               userId : data.data?.user?._id,
               username : data.data?.user?.username,
               emialId : data.data?.user?.emailId
             }))
             localStorage.setItem("token",data.data?.token);
             navigate("/");
        }
     }catch(err){
         console.log(err);
     }
  }

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

        <input value={emailId} onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Email" />
        <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Password" />

        <button onClick={handleLogin} className="login-btn">Login</button>

        <p className="switch-text">
          Don’t have an account?   <Link to="/register">create account</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
