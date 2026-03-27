import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Landing from "./components/Landing/Landing";
import Home from "./components/Home/home";
import Login from "./components/Login/login";
import Register from "./components/Register/register";
import Dashboard from "./components/Dashboard/dashboard";
import Menu from "./components/menu/menu";
import ProtectedRoute from "./components/ProtectedRoutes/ProtectedRoute";
import CartItems from "./components/cart/cartItem";

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
        
          <Landing />
          } />
        <Route path="/home" element={
          <Home />
          } 
          />

        <Route path="/menu/:id" element={
          <Menu />
          } 
          />

        <Route path="/login" element={
          <Login />
          } />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={
          <Dashboard />
          } />

          <Route path="/checkout" element={
         <CartItems/>
          } 
          />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
