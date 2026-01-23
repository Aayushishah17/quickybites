import React from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import RestaurantList from "../data/RestaurantList";
import HomeNavbar from "./homenavbar";
import "./home.css";

const Home = () => {
  return (
    <>
      <HomeNavbar />
      <div className="home-container">
        {RestaurantList.map((res) => (
          <RestaurantCard key={res.info.id} data={res.info} />
        ))}
      </div>
    </>
  );
};

export default Home;
