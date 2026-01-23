import React from "react";
import { useParams } from "react-router-dom";
// import RestaurantList from "../data/RestaurantList";
import MenuList from "../data/menulist";
import "./menu.css";

const Menu = () => {
  const { id } = useParams();
  const foods = MenuList[id] || [];

  return (
    <div className="menu-page">
      <h2>Food Menu</h2>

      <div className="menu-grid">
        {foods.map((food) => (
          <div key={food.id} className="food-card">
            {/* IMAGE */}
            <img
              src={food.image}
              alt={food.name}
              className="food-img"
            />

            {/* NAME */}
            <h4>{food.name}</h4>

            {/* PRICE */}
            <p className="price">₹{food.price}</p>
          
            {/* PLUS ICON */}
            <div className="plus-icon">+</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
