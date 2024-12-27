import React from "react";
import { restaurants } from "../data/restaurants";
import RestaurantCard from "./RestaurantCard";

export default function RestaurantsList() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">
        Les Meilleurs Restaurants de la Médina de Fès
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {restaurants.map((restaurant, index) => (
          <RestaurantCard key={index} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}
