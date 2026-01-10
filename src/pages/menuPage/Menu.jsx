import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import api from '@/lib/api';
import { API } from '@/lib/endpoints';
import Placeholder from '@/assets/chickenChps.jpeg';
import { useCart } from '@/store/useCart';
import CartButton from '../cartPage/CartButton';

const Menu = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryId = queryParams.get('category');

  const [items, setItems] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!categoryId) return;

    const fetchItems = async () => {
      setLoading(true);
      setError(false);

      try {
        const res = await api.get(`${API.MENU}/menu-items/${categoryId}`);
        const data = res.data?.data || [];

        if (data.length > 0) {
          setCategoryName(data[0]?.category?.name || '');
        }

        setItems(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [categoryId]);

  if (!categoryId)
    return (
      <p className="text-center mt-20 text-gray-500">No category selected.</p>
    );

  return (
    <section className="bg-orange-50 min-h-screen pb-20">
      {/* CATEGORY HERO */}
      <div className="relative h-[260px] w-full">
        <img
          src={Placeholder}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl font-semibold mb-2">
            {categoryName || 'Menu'}
          </h1>
          <p className="text-sm text-gray-200 max-w-md">
            Freshly prepared, carefully crafted, and made to satisfy.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 mt-12">
        {loading && (
          <p className="text-center text-gray-500 mt-20">
            Loading delicious items…
          </p>
        )}

        {error && (
          <p className="text-center text-red-500 mt-20">
            Failed to load menu items.
          </p>
        )}

        {!loading && !error && items.length === 0 && (
          <p className="text-center text-gray-400 mt-20">
            No items available in this category.
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {items.map(item => {
            const imageUrl = item.imageUrl
              ? `${API.BASEURL}${item.imageUrl}`
              : Placeholder;

            return (
              <div
                key={item._id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 overflow-hidden"
              >
                {/* IMAGE */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />

                  {!item.available && (
                    <span className="absolute top-3 right-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                      Out of stock
                    </span>
                  )}
                </div>

                {/* INFO */}
                <div className="p-4 flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <span className="font-bold text-orange-600">
                      ₦{item.price}
                    </span>
                  </div>

                  {item.description && (
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {item.description}
                    </p>
                  )}

                  <CartButton item={item} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Menu;
