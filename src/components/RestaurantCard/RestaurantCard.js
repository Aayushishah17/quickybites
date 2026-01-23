import React from "react";
import { useNavigate } from "react-router-dom";
import "./RestaurantCard.css";

const IMG_CDN =
  "https://media-assets.swiggy.com/swiggy/image/upload/";

const RestaurantCard = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div
      className="res-card"
      onClick={() => navigate(`/menu/${data.id}`)}
    >
      <img
        src={IMG_CDN + data.ImageId}
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
