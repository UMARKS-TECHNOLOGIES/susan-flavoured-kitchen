import React from "react";
import { Button } from "@/components/ui/button";
import Image8 from "../../../assets/chickenChps.jpeg";
import { useCart } from "@/store/useCart";

const GoesWellWith = ({ currentProductId }) => {
  const { addToCart, isInCart, getItemQuantity } = useCart();
  // Sample items - Replace with actual data or fetch from MenuData
  const items = [
    {
      id: 16, // Make sure IDs are unique and don't conflict with menu items
      name: "Zobo Drink",
      price: 1.8,
      image: Image8,
      description: "Hibiscus drink infused with ginger and pineapple.",
    },
    {
      id: 17,
      name: "Moi-moi",
      price: 1.8,
      image: Image8,
      description: "Silky-smooth Moi Moi made from beans.",
    },
    {
      id: 18,
      name: "Plantain",
      price: 1.8,
      image: Image8,
      description: "Sweet fried plantain, perfectly caramelized.",
    },
  ];

  // Filter out the current product if needed
  const filteredItems = currentProductId
    ? items.filter((item) => item.id !== currentProductId)
    : items;

  const handleAddToCart = (item) => {
    // Validate item data
    if (!item || !item.id || !item.name || typeof item.price !== "number") {
      console.error("Invalid item data:", item);
      return;
    }

    try {
      addToCart(item);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };
  return (
    <section className="space-y-5 max-w-5xl mx-auto px-4">
      <h2 className="text-2xl font-bold text-[#000040]">Goes Well With:</h2>

      <div className="flex overflow-x-auto gap-5 pb-3">
        {filteredItems.map((item) => {
          const inCart = isInCart(item.id);
          const quantity = getItemQuantity(item.id);
          return (
            <div
              key={item.id}
              className="min-w-[280px] md:min-w-[320px] bg-white rounded-lg shadow-sm border border-gray-200 p-4 space-y-3 flex flex-col justify-between"
            >
              <div className="flex items-center justify-center">
                <img
                  src={item.image}
                  className="w-32 h-32 md:w-40 md:h-40 object-cover bg-center rounded-full"
                />
              </div>

              <div className="space-y-2">
                <h3 className="font-bold text-xl md:text-2xl text-center md:text-left">
                  {item.name}
                </h3>
                <p className="text-base md:text-lg text-gray-600 font-medium line-clamp-2 text-center md:text-left">
                  {item.description}
                </p>
              </div>

              <div className="flex justify-between items-center pt-2">
                <span className="font-bold text-lg text-gray-900">
                  £{item.price.toFixed(2)}
                </span>
                <Button
                  onClick={() => handleAddToCart(item)}
                  className="bg-orange-500 hover:bg-orange-600 text-white text-xs md:text-sm px-3 py-1 md:px-4"
                >
                  {inCart ? `Add More (${quantity})` : "Add to Cart"}
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GoesWellWith;
