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
          <ProtectedRoute>
          <Landing />
          </ProtectedRoute>
          } />
        <Route path="/home" element={
          <ProtectedRoute>
          <Home />
          </ProtectedRoute>
          } 
          />

        <Route path="/menu/:id" element={
          <ProtectedRoute>
          <Menu />
          </ProtectedRoute>
          } 
          />

        <Route path="/login" element={
          <Login />
          } />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
          <Dashboard />
          </ProtectedRoute>
          } />

          <Route path="/checkout" element={
          <ProtectedRoute>
         <CartItems/>
          </ProtectedRoute>
          } 
          />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
