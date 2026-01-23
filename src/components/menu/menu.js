import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import RestaurantList from "../data/RestaurantList";
import MenuList from "../data/menulist";
import "./menu.css";
import { useDispatch } from "react-redux";
import { addItems } from "../../slice/restaurantSlice";
import { useSelector } from "react-redux";

const Menu = () => {
  // const [menuData, setMenuData] = useState([]);
  const { id } = useParams();
  console.log("id : " , id);
  const foods = MenuList[id] || [];
  const dispatch = useDispatch();
  const items = useSelector(store => store.restaurant.items);


  // console.log("menuData : " , menuData)

  // const getRestaurantMenu = async () => {
  //   try {
  //     const data = await fetch(RESTAURANT_MENU_API + id);
  //     const json = await data.json();

  //     console.log("json : " , json)

  //     setMenuData(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || []);

  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(()=>{
  //      getRestaurantMenu();
  // },[])

  const handleAddItem = (food) => {
      dispatch(addItems(food));
  }

  return (
    <div className="menu-page">
      <div>
        <h2>Food Menu</h2>
        <span>cartItems : {items?.length || 0} </span>
      </div>
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
            <div onClick={() => handleAddItem(food)} className="plus-icon">+</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
