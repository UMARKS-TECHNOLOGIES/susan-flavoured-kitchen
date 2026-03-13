import React, { useState, useEffect } from "react";
import { Button } from "../../../components/ui/button";
import api from "../../../lib/api";
import { API } from "../../../lib/endpoints";
import Image3 from "../../../assets/img88.webp";
import Image4 from "../../../assets/img99.webp";
import Image5 from "../../../assets/pastries.webp";
import Image6 from "../../../assets/friedRice.webp";

const fallbackDishes = [
  {
    id: "fb-1",
    name: "Egusi Soup & Pounded Yam",
    description: "Rich melon seed soup simmered with assorted meat.",
    price: 10.0,
    image: Image3,
  },
  {
    id: "fb-2",
    name: "Jollof Rice & Grilled Chicken",
    description: "Long-grain rice cooked in our signature smoky pepper base.",
    price: 8.5,
    image: Image4,
  },
  {
    id: "fb-3",
    name: "Meat Pie",
    description: "Golden pastry filled with minced beef and vegetables.",
    price: 2.50,
    image: Image5,
  },
  {
    id: "fb-4",
    name: "Fried Rice",
    description: "Colorful fried rice with vegetables and chicken.",
    price: 7.50,
    image: Image6,
  }
];

const PopularDishes = () => {
  const [popularDishes, setPopularDishes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPopularDishes = async () => {
      try {
        const res = await api.get(API.PRODUCTS);
        const allProducts = res.data.products || res.data || [];
        
        if (allProducts.length === 0) {
          const shuffledFb = [...fallbackDishes].sort(() => 0.5 - Math.random());
          setPopularDishes(shuffledFb.slice(0, 2));
        } else {
          // Since backend doesn't track global order frequency yet,
          // we randomize the array and pick 2 items so it appears dynamically updated 
          // without distorting the backend logic.
          const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
          const selectedDishes = shuffled.slice(0, 2);
          setPopularDishes(selectedDishes);
        }
      } catch (error) {
        console.error("Failed to fetch products for popular dishes:", error);
        const shuffledFb = [...fallbackDishes].sort(() => 0.5 - Math.random());
        setPopularDishes(shuffledFb.slice(0, 2)); // Safe fallback if backend is offline
      } finally {
        setLoading(false);
      }
    };
    
    
    fetchPopularDishes();
  }, []);

  return (
    <section className="mt-10 lg:mt-25 px-4 lg:px-0">
      <div className="w-full lg:max-w-5xl mx-auto">
        <h2 className="text-2xl font-medium">Popular Dishes</h2>

        {loading ? (
          <div className="mt-8 mb-4 text-center text-gray-500">
            Loading popular dishes...
          </div>
        ) : popularDishes.length === 0 ? (
          <div className="mt-8 mb-4 text-center text-gray-500">
            No dishes found.
          </div>
        ) : (
          <div className="flex flex-nowrap overflow-x-auto scrollbar-hide md:grid md:grid-cols-2 gap-4 mt-4 pb-4 -mx-4 px-4 snap-x snap-mandatory md:pb-0 md:mx-0 md:px-0">
            {popularDishes.map((dish) => {
              // Ensure we fallback if an image isn't available
              const displayImage = dish.imageUrl || dish.image || "https://placehold.co/400x300?text=No+Image";
              
              return (
                <div
                  key={dish.id || dish._id}
                  className="min-w-[300px] md:min-w-0 w-full p-2 bg-secondary rounded-lg shrink-0 snap-center"
                >
                  <img
                    src={displayImage}
                    alt={dish.name}
                    className="w-full h-[150px] md:h-[250px] lg:h-[250px] object-cover bg-center rounded-lg"
                  />
                  <div className="px-2 md:px-4">
                    <h3 className="mt-2 text-lg font-bold capitalize truncate">
                      {dish.name}
                    </h3>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-lg font-bold">
                        £{(dish.price || 0).toFixed(2)}
                      </p>
                      <Button
                        size="md"
                        // onClick={() => handleAddToCart(dish)}
                        className="ml-4 px-4 py-2 bg-orange-500 rounded-md text-sm font-medium hover:bg-orange-600 text-white cursor-pointer"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default PopularDishes;
