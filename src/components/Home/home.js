import React, { useEffect, useState } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import RestaurantList from "../data/RestaurantList";
import HomeNavbar from "./homenavbar";
import "./home.css";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [restaurantList] = useState(RestaurantList);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    const filtered = restaurantList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setFilteredRestaurantList(filtered);
    setCurrentPage(1); // ✅ reset page on search
  }, [searchText, restaurantList]);

  const totalPages = Math.ceil(
    filteredRestaurantList.length / ITEMS_PER_PAGE
  );

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedRestaurants = filteredRestaurantList.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <>
      <HomeNavbar searchText={searchText} setSearchText={setSearchText} />

      <div className="home-container">
        {paginatedRestaurants.length === 0 ? (
          <p>No restaurant found</p>
        ) : (
          paginatedRestaurants.map((res) => (
            <RestaurantCard key={res.info.id} data={res.info} />
          ))
        )}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
          <button
            className="page-btn"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
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
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default Home;
