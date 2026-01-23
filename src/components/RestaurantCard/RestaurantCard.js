import React from "react";
import { useNavigate } from "react-router-dom";
import "./RestaurantCard.css";
const IMG_CDN_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const RestaurantCard = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div
      className="res-card"
      onClick={() => navigate(`/menu/${data.id}`)}
    >
      <img
        src={IMG_CDN_URL + data.ImageId}
        alt={data.name}
        className="res-img"
      />

      <div className="res-info">
        <h3>{data.name}</h3>
        <p>{data.cuisines.join(", ")}</p>
        <span>⭐ {data.avgRatingString}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
