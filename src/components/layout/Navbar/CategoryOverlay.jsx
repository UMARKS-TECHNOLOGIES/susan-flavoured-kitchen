import { API } from '@/lib/endpoints';
import CartButton from '@/pages/cartPage/CartButton';
import { X } from 'lucide-react';

export default function CategoryOverlay({ category, onClose }) {
  if (!category) return null;

  return (
    <div className="fixed inset-0 z-100">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Content */}
      <div className="relative bg-white max-w-7xl mx-auto mt-24 rounded-2xl shadow-2xl p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-semibold capitalize">
              {category.name}
            </h2>
            <p className="text-gray-500 text-sm">
              {category.items.length} items available
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <X />
          </button>
        </div>

        {/* Products */}
        {category.items.length === 0 ? (
          <div className="text-center text-gray-400 py-20">
            No items in this category yet
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {category.items.map(item => (
              <div
                key={item._id}
                className="rounded-xl border hover:shadow-lg transition overflow-hidden group"
              >
                <img
                  src={`${API.BASEURL}${item.imageUrl}`}
                  alt={item.name}
                  className="h-40 w-full object-cover group-hover:scale-105 transition"
                />

                <div className="p-4">
                  <h3 className="font-medium capitalize">{item.name}</h3>
                  <p className="text-orange-600 font-semibold">₦{item.price}</p>
                  <p className="text-gray-500 text-sm mt-1">
                    {item.description}
                  </p>
                  <p
                    className={`text-sm mt-1 ${
                      item.available ? 'text-green-600' : 'text-red-500'
                    }`}
                  >
                    {item.available ? 'In stock' : 'Out of stock'}
                  </p>
                </div>
                <CartButton item={item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
