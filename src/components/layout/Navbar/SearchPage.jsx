import { useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { API } from '@/lib/endpoints';
import CartButton from '@/pages/cartPage/CartButton';

function fuzzyMatch(text, query) {
  return text.toLowerCase().includes(query.toLowerCase());
}

export default function SearchResults() {
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log({ state });

  const query = state?.query;

  useEffect(() => {
    function onKey(e) {
      if (e.key === '/') {
        e.preventDefault();
        navigate('/');
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [navigate]);

  const { matchedCategories, matchedProducts } = useMemo(() => {
    const categories = state?.categories || [];
    const cats = categories.filter(cat => fuzzyMatch(cat.name, query));

    const products = categories.flatMap(cat =>
      cat.items
        .filter(item => fuzzyMatch(item.name, query))
        .map(item => ({
          ...item,
          categoryName: cat.name,
        }))
    );

    return {
      matchedCategories: cats,
      matchedProducts: products,
    };
  }, [query, state?.categories]);

  if (!query) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className="fixed inset-0 bg-white z-100 overflow-y-auto"
      >
        {/* Header */}
        <div className="p-6 border-b sticky top-0 bg-white z-10">
          <h2 className="text-xl font-semibold">Results for “{query}”</h2>
          <p className="text-sm text-gray-500">
            Press <kbd className="px-1 border rounded">/</kbd> to exit
          </p>
        </div>

        <div className="p-6 space-y-10">
          {/* CATEGORY RESULTS */}
          {matchedCategories.length > 0 && (
            <section>
              <h3 className="text-lg font-medium mb-4">Categories</h3>

              <div className="space-y-8">
                {matchedCategories.map(cat => (
                  <div key={cat._id}>
                    {/* Category header */}
                    <div className="mb-3">
                      <h4 className="text-xl font-semibold">{cat.name}</h4>
                      <p className="text-sm text-gray-500">
                        {cat.items.length} items
                      </p>
                    </div>

                    {/* Category items */}
                    {cat.items.length > 0 ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {cat.items.map(item => (
                          <div
                            key={item._id}
                            className="rounded-xl border overflow-hidden hover:shadow-lg transition"
                          >
                            <img
                              src={`${API.BASEURL}${item.imageUrl}`}
                              alt={item.name}
                              className="h-40 w-full object-cover"
                            />

                            <div className="p-4 space-y-1">
                              <h5 className="font-medium">{item.name}</h5>
                              <p className="text-xs text-gray-500">
                                {item.description}
                              </p>
                              <p className="font-semibold">£{item.price}</p>
                              <p
                                className={`text-sm mt-1 ${
                                  item.available
                                    ? 'text-green-600'
                                    : 'text-red-500'
                                }`}
                              >
                                {item.available ? 'available' : 'not available'}
                              </p>

                              <CartButton item={item} />
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-400">
                        No items in this category
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* PRODUCT RESULTS */}
          {matchedProducts.length > 0 && (
            <section>
              <h3 className="text-lg font-medium mb-4">Products</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {matchedProducts.map(item => (
                  <div
                    key={item._id}
                    className="rounded-xl border overflow-hidden hover:shadow-lg transition"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="h-40 w-full object-cover"
                    />

                    <div className="p-4 space-y-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-xs text-gray-500">
                        {item.categoryName}
                      </p>
                      <p className="font-semibold">£{item.price}</p>

                      <CartButton item={item} />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* NO RESULTS */}
          {matchedCategories.length === 0 && matchedProducts.length === 0 && (
            <p className="text-center text-gray-400 mt-20">No results found.</p>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
