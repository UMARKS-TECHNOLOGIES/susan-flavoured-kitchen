import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useCart } from "../../../store/useCart";

const Card = ({ product, item }) => {
  const data = product || item;

  const { addToCart, isInCart, getItemQuantity } = useCart();
  const inCart = isInCart(data.id);
  const quantity = getItemQuantity(data.id);

  return (
    <div className="bg-white p-2 md:p-4 rounded-lg shadow-sm border border-gray-200">
      <div className="flex items-center justify-center">
        <Link to={`/product/${data.id}`}>
          <img
            src={data.image}
            alt={data.name}
            className="w-24 h-24 md:w-40 md:h-40 object-cover bg-center rounded-full mb-2 md:mb-3"
          />
        </Link>
      </div>

      <h2 className="font-bold text-sm md:text-2xl">{data.name}</h2>
      <p className="text-gray-600 text-xs md:text-xl font-medium mb-1 md:mb-2 line-clamp-2">
        {data.description}
      </p>

      <div className="flex justify-between items-center gap-1 md:gap-2">
        <p className="font-bold text-xs md:text-lg text-gray-900 mb-1 md:mb-3">
          £{data.price.toFixed(2)}
        </p>
        <Button
          onClick={() => addToCart(data)}
          size="sm"
          className="bg-orange-600 text-white py-1 px-1.5 md:py-1 md:px-3 text-[10px] md:text-sm rounded-md hover:bg-orange-700"
        >
          {inCart ? `Add More` : "Add to Cart"}
        </Button>
      </div>
    </div>
  );
};

export default Card;
