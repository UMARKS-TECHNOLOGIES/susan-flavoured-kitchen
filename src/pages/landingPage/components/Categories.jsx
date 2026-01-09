import React, { useEffect, useState } from 'react';
import { Button } from '../../../components/ui/button';
import { Link } from 'react-router-dom';
import api from '@/lib/api';
import { API } from '@/lib/endpoints';
import Placeholder from '../../../assets/chickenChps.jpeg';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      setError(false);

      try {
        const res = await api.get(`${API.MENU}/categories`);
        const data = res.data?.data || [];
        setCategories(data);
      } catch (err) {
        console.error('Failed to fetch categories', err);
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
    <section className="w-full lg:max-w-7xl mx-auto mt-6 px-4 lg:px-0">
      <h2 className="text-3xl font-semibold mb-6">Categories</h2>

      {categories.length === 0 ? (
        <p className="text-center text-gray-400 mt-20">
          No categories available.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map(cat => {
            const imageUrl = cat.imageUrl
              ? `${API.BASEURL}${cat.imageUrl}`
              : Placeholder;

            return (
              <div
                key={cat._id}
                className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 cursor-pointer group"
              >
                {/* Category Image */}
                <img
                  src={imageUrl}
                  alt={cat.name}
                  className="h-56 w-full object-cover rounded-xl transition-transform group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center text-center p-4 rounded-xl">
                  <h3 className="text-lg font-semibold text-white">
                    {cat.name}
                  </h3>
                  <p className="text-gray-200 text-sm mt-1">
                    {cat.items?.length || 0} items
                  </p>
                  <Link
                    to={`/menu?category=${cat._id}`}
                    state={{ catItems: cat.items }}
                  >
                    <Button className="mt-3 bg-orange-600 hover:bg-orange-500 text-white text-sm rounded-lg py-2 w-full">
                      View Menu
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Categories;
