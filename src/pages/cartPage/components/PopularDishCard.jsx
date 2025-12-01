import React from "react";
// import { Card, CardContent } from '@/components/ui/card';
import { Button } from "../../../components/ui/button";

const PopularDishCard = ({ dish, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-6 md:py-10 px-3 md:px-5">
      <div className=" flex items-center justify-center">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-24 h-24 md:w-40 md:h-40 object-cover bg-center rounded-full mb-2 md:mb-3"
        />
      </div>
      <h3 className="font-bold text-sm md:text-xl">{dish.name}</h3>
      <p className="text-xs md:text-lg text-gray-600 mb-2 md:mb-3 line-clamp-2 leading-relaxed font-medium">
        {dish.description}
      </p>
      <div className="flex items-center justify-between">
        <span className="font-bold text-sm md:text-lg">
          £{dish.price.toFixed(2)}
        </span>
        <Button
          size="sm"
          onClick={() => onAddToCart(dish)}
          className="bg-orange-500 hover:bg-orange-600 text-white text-xs md:text-sm py-1 px-2 md:px-4 rounded-md "
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default PopularDishCard;
