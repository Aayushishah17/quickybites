import React, { useEffect, useState } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import RestaurantList from "../data/RestaurantList";
import HomeNavbar from "./homenavbar";
import "./home.css";

const Home = () => {
  const [currentPage , setCurrentPage] = useState(1);
  const [restaurantList , setRestaurantList] = useState(RestaurantList);

  const [filteredRestaurantList , setFilteredRestaurantList] = useState(restaurantList);

  const[searchText , setSearchText] = useState("");

  const TOTAL_ITEMS_ON_PAGE = 10
  const totalItems = Math.ceil(RestaurantList.length / TOTAL_ITEMS_ON_PAGE);

  const startIndex = (currentPage - 1) * TOTAL_ITEMS_ON_PAGE;

  const PaginateFilteredRestauarnt = filteredRestaurantList.slice(startIndex , startIndex + TOTAL_ITEMS_ON_PAGE);

 
  console.log(totalItems)
  useEffect(()=>{
     
    const filRes = restaurantList.filter((restaurant)=>{
       return restaurant.info.name.toLowerCase().includes(searchText.toLowerCase());
    })

    setFilteredRestaurantList(filRes);

  },[searchText])

  console.log("search text is changing : " , searchText)

  return (
    <>
      <HomeNavbar searchText={searchText} setSearchText={setSearchText}/>
      <div className="home-container">
        {filteredRestaurantList.length <= 0 ? <p>No restaurant found</p> :PaginateFilteredRestauarnt.map((res) => (
          <RestaurantCard key={res.info.id} data={res.info} />
        ))}
      </div>

     {totalItems > 1 && (
        <div className="pagination">
          <button
            className="page-btn"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Prev
          </button>

          {new Array(totalItems).fill("").map((_, i) => (
            <button
              key={i}
              className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            className="page-btn"
            disabled={currentPage === totalItems}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default Home;
