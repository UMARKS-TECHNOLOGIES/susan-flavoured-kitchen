import React from "react";
import { Button } from "../../../components/ui/button";
import { useCart } from "../../../store/useCart";
import Image3 from "../../../assets/amalaEwedu.jpeg";
import Image4 from "../../../assets/okrosoup.jpeg";
import Image5 from "../../../assets/jollof-rice.jpg";
import Image6 from "../../../assets/friedRice.jpeg";

const PopularDishes = ({ product }) => {
  const { addToCart, isInCart, getItemQuantity } = useCart();

  // Make sure each dish has a UNIQUE id
  const popularDish = [
    {
      id: 1, // Unique ID
      name: "Egusi Soup & Pounded Yam",
      description: "Rich melon seed soup simmered with assorted meat.",
      price: 10.0,
      image: Image3,
    },
    {
      id: 2, // Unique ID
      name: "Jollof Rice & Grilled Chicken",
      description: "Long-grain rice cooked in our signature smoky pepper base.",
      price: 8.5,
      image: Image4,
    },
    // {
    //     id: 3, // Unique ID
    //     name: 'Meat Pie',
    //     description: 'Golden pastry filled with minced beef and vegetables.',
    //     price: 2.50,
    //     image: Image5
    // },
    // {
    //     id: 4, // Unique ID
    //     name: 'Fried Rice',
    //     description: 'Colorful fried rice with vegetables and chicken.',
    //     price: 7.50,
    //     image: Image6
    // }
  ];

  // Handle add to cart with proper error checking
  const handleAddToCart = (dish) => {
    // Verify dish object exists and has required properties
    if (!dish || !dish.id || !dish.name || typeof dish.price !== "number") {
      console.error("Invalid dish object:", dish);
      return;
    }

    try {
      addToCart(dish);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <section className="mt-25">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-medium">Popular Dishes</h2>
        <div className="flex md:flex-row flex-col gap-4 mt-4">
          {popularDish.map((dish) => {
            const inCart = isInCart(dish.id);
            const quantity = getItemQuantity(dish.id);

            return (
              // CRITICAL FIX: Added key prop and removed duplicate card
              <div key={dish.id} className="w-full p-2 bg-secondary rounded-lg">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-[50vh] object-cover bg-center rounded-lg"
                />
                <div className="px-4">
                  <h3 className="mt-2 text-lg font-bold capitalize">
                    {dish.name}
                  </h3>
                  <div className="flex justify-between items-center">
                    <p className="text-lg font-bold">
                      £{dish.price.toFixed(2)}
                    </p>
                    <Button
                      size="md"
                      onClick={() => handleAddToCart(dish)}
                      className="ml-4 px-4 py-2 bg-orange-500 rounded-md text-sm font-medium hover:bg-orange-600 text-white cursor-pointer"
                    >
                      {inCart ? `Add More (${quantity})` : "Add to Cart"}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularDishes;
