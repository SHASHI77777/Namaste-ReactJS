import React, { useEffect, useState } from "react";
import ReactDOM from "react";
import { createRoot } from "react-dom/client";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "../utils/Shimmer";

const Body = () => {
  const [listOfRestaurants, setListofRestaurants] = useState([]);
   useEffect(() => {
    fetchData();
  },[]);
 
const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

   const json = await data.json();
    //? optional chaining
    setListofRestaurants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
  );
};

//? Filter based on rating above 3.5

  //! conditional rendering
  // if(listOfRestaurants.length===0){
  //   return  <Shimmer/>
  // }

let handleclick = () => {
    FilterRestaurants = listOfRestaurants.filter(
      (res) => res.info.avgRating > 3.9
    );
    setListofRestaurants(FilterRestaurants);
  };

return listOfRestaurants.length === 0 ? (
    <Shimmer/>
  ) : (
    <>
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={handleclick}>
            Top Rated Restaurant
          </button>
        </div>
        <div className="res-container">
          {listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
