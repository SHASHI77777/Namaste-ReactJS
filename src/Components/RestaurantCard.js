import React from "react";
import { CDN_URL } from "../utils/contants";
const RestaurantCard = (props) => {
  const { resData } = props;
  let { name, cuisines, avgRating } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + resData.info.cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} star</h4>
      <h4>{resData.info.sla.deliveryTime} minutes </h4>
    </div>
  );
};

export default RestaurantCard ;
