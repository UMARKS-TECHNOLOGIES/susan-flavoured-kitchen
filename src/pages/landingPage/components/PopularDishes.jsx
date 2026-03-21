import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '@/lib/api';
import { API } from '@/lib/endpoints';
import Placeholder from '../../../assets/chickenChps.jpeg';
import { motion } from 'framer-motion';

const PopularDishes = () => {
  const [popularDish, setPopularDish] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPopularDishes = async () => {
      setLoading(true);
      setError(false);
      try {
        const res = await api.get(`${API.MENU}/categories`);
        const data = res.data?.data || [];
        const allItems = data.flatMap(cat => cat.items || []);
        // Randomly sort and pick 2 items
        const shuffled = allItems.sort(() => 0.5 - Math.random());
        setPopularDish(shuffled.slice(0, 2));
      } catch (err) {
        setError(true);
        console.error('Failed to fetch popular dishes:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchPopularDishes();
  }, []);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className="mt-12 md:mt-20 px-6 lg:px-12"
    >
      <div className="w-full lg:max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Popular Dishes</h2>

        {loading ? (
          <p className="mt-4 text-gray-500">Loading popular dishes...</p>
        ) : error ? (
          <p className="mt-4 text-red-500">Failed to load popular dishes.</p>
        ) : popularDish.length === 0 ? (
          <p className="mt-4 text-gray-500">No popular dishes available.</p>
        ) : (
          <div className="flex flex-nowrap overflow-x-auto scrollbar-hide md:grid md:grid-cols-2 gap-4 mt-4 pb-4 -mx-4 px-4 snap-x snap-mandatory md:pb-0 md:mx-0 md:px-0">
            {popularDish.map((dish, idx) => {
              const imageUrl = dish.imageUrl ? `${API.BASEURL}${dish.imageUrl}` : Placeholder;
              return (
                <motion.div
                  key={dish._id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  whileHover={{ scale: 1.03 }}
                  className="min-w-[300px] md:min-w-0 w-full p-2 bg-secondary rounded-lg shrink-0 snap-center cursor-pointer hover:shadow-xl transition-all"
                >
                  <Link to={`/menu?category=${dish.category}`}>
                    <img
                      src={imageUrl}
                      alt={dish.name}
                      className="w-full h-[200px] md:h-[50vh] lg:h-[350px] object-cover bg-center rounded-lg"
                    />
                    <div className="px-2 md:px-4 py-2">
                      <h3 className="mt-2 text-lg font-bold capitalize truncate">
                        {dish.name}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default PopularDishes;
