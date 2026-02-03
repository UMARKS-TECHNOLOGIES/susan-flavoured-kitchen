import React, { useEffect, useState } from 'react';
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
      <section className="w-full lg:max-w-7xl mx-auto mt-8 px-4 lg:px-0">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-gray-800">
          Explore Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-sm animate-pulse bg-white"
              style={{ minHeight: 220 }}
            />
          ))}
        </div>
      </section>
    );

  if (error)
    return (
      <section className="w-full lg:max-w-7xl mx-auto mt-8 px-4 lg:px-0 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
          Explore Categories
        </h2>
        <p className="text-red-600 mb-4">Failed to load categories</p>
        <button
          className="inline-block px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-500"
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </section>
    );

  return (
    <section className="w-full lg:max-w-7xl mx-auto mt-8 px-4 lg:px-0">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800">
          Explore Categories
        </h2>
        <p className="hidden sm:block text-sm text-gray-500">
          Find your next meal from curated categories
        </p>
      </div>

      {categories.length === 0 ? (
        <p className="text-center text-gray-400 mt-20 text-lg">
          No categories available.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map(cat => {
            const imageUrl = cat.imageUri
              ? `${API.BASEURL}${cat.imageUri}`
              : Placeholder;

            return (
              <article
                key={cat._id}
                className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 bg-white"
              >
                <Link
                  to={`/menu?category=${cat._id}`}
                  state={{ catItems: cat.items }}
                  className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                  aria-label={`View ${cat.name} category`}
                >
                  <div className="relative">
                    <img
                      src={imageUrl}
                      alt={`${cat.name} category image`}
                      loading="lazy"
                      className="w-full h-56 object-cover bg-gray-100"
                    />

                    <div className="absolute left-3 top-3 bg-black/60 text-white text-xs rounded-full px-2 py-1">
                      {cat.items?.length || 0}{' '}
                      {cat.items?.length === 1 ? 'item' : 'items'}
                    </div>

                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-lg font-semibold text-white truncate">
                        {cat.name}
                      </h3>
                      <div className="mt-3 flex gap-2">
                        <button className="ml-auto px-3 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-md text-sm font-medium transition">
                          View Menu
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Categories;
