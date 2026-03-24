import React, { useEffect, useState } from 'react';
import { Button } from '../../../components/ui/button';
import { Link } from 'react-router-dom';
import api from '@/lib/api';
import { API } from '@/lib/endpoints';
import { motion } from 'framer-motion';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      setError(false);

      try {
        const url = `${API.MENU}/categories`;
        const res = await api.get(url);
        const data = res.data?.data || [];
        setCategories(data);
      } catch (err) {
        console.error('Failed to fetch categories. URL:', `${API.MENU}/categories`, 'Error:', err.message, err.response?.data);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading)
    return (
      <p className="text-center mt-10 text-gray-500">Loading categories…</p>
    );
  if (error)
    return (
      <p className="text-center mt-10 text-red-500">
        Failed to load categories
      </p>
    );

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="w-full lg:max-w-7xl mx-auto mt-10 md:mt-16 px-6 lg:px-12"
    >
      <h2 className="text-3xl font-bold mb-8">Categories</h2>

      {categories.length === 0 ? (
        <p className="text-center text-gray-400 mt-20">
          No categories available.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((cat, idx) => {
            const imageUrl = `${API.BASEURL}${cat.imageUri || cat.imageUrl || ''}`;

            return (
              <motion.div
                key={cat._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative overflow-hidden rounded-xl shadow-md cursor-pointer group"
              >
                {/* Category Image */}
                {cat.imageUri || cat.imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={cat.name}
                    className="h-56 w-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="h-56 w-full bg-gray-200 rounded-xl flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}

                {/* Top Badge: Number of Items */}
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 shadow-sm z-10">
                  <p className="text-gray-100 text-xs font-semibold tracking-wide">
                    {cat.items?.length || 0} items
                  </p>
                </div>

                {/* Bottom Overlay: Name (Top) and Button (Bottom) */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-4 sm:p-5 pt-20 flex flex-col justify-end gap-2 sm:gap-3 rounded-b-xl">
                  
                  {/* Top - Category Name */}
                  <div className="text-left w-full">
                    <h3 className="text-base sm:text-lg md:text-[18px] lg:text-xl font-bold text-white tracking-wide leading-tight">
                      {cat.name}
                    </h3>
                  </div>

                  {/* Bottom - View Menu Button */}
                  <Link
                    to={`/menu?category=${cat._id}`}
                    state={{ catItems: cat.items }}
                    className="self-start"
                  >
                    <Button className="bg-orange-600 hover:bg-orange-500 text-white text-xs sm:text-sm font-semibold rounded-lg py-1.5 px-4 shadow-sm hover:shadow-md transition-all">
                      View Menu
                    </Button>
                  </Link>

                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </motion.section>
  );
};

export default Categories;
