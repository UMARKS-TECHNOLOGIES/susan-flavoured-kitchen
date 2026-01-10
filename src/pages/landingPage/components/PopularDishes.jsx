import React from 'react';
import { Button } from '../../../components/ui/button';
import Image3 from '../../../assets/amalaEwedu.jpeg';
import Image4 from '../../../assets/okrosoup.jpeg';
import Image5 from '../../../assets/jollof-rice.jpg';
import Image6 from '../../../assets/friedRice.jpeg';
import CartButton from '@/pages/cartPage/CartButton';

const PopularDishes = () => {
  // Make sure each dish has a UNIQUE id
  const popularDish = [
    {
      id: 1, // Unique ID
      name: 'Egusi Soup & Pounded Yam',
      description: 'Rich melon seed soup simmered with assorted meat.',
      price: 10.0,
      image: Image3,
    },
    {
      id: 2, // Unique ID
      name: 'Jollof Rice & Grilled Chicken',
      description: 'Long-grain rice cooked in our signature smoky pepper base.',
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
  // const handleAddToCart = dish => {
  //   // Verify dish object exists and has required properties
  //   if (!dish || !dish.id || !dish.name || typeof dish.price !== 'number') {
  //     console.error('Invalid dish object:', dish);
  //     return;
  //   }

  //   try {
  //     addToCart(dish);
  //   } catch (error) {
  //     console.error('Error adding to cart:', error);
  //   }
  // };

  return (
    <section className="mt-10 lg:mt-25 px-4 lg:px-0">
      <div className="w-full lg:max-w-5xl mx-auto">
        <h2 className="text-2xl font-medium">Popular Dishes</h2>

        {/* Mobile: Horizontal Scroll, Desktop: Grid (2 Columns) */}
        <div className="flex flex-nowrap overflow-x-auto scrollbar-hide md:grid md:grid-cols-2 gap-4 mt-4 pb-4 -mx-4 px-4 snap-x snap-mandatory md:pb-0 md:mx-0 md:px-0">
          {popularDish.map(dish => {
            return (
              <div
                key={dish.id}
                className="min-w-[300px] md:min-w-0 w-full p-2 bg-secondary rounded-lg shrink-0 snap-center"
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-[200px] md:h-[50vh] lg:h-[350px] object-cover bg-center rounded-lg"
                />
                <div className="px-2 md:px-4">
                  <h3 className="mt-2 text-lg font-bold capitalize truncate">
                    {dish.name}
                  </h3>
                  <CartButton item={dish} />
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
