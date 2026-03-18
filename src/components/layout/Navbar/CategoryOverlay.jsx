import { API } from '@/lib/endpoints';
import CartButton from '@/pages/cartPage/CartButton';
import { X } from 'lucide-react';

export default function CategoryOverlay({ category, onClose }) {
  if (!category) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Content Container */}
      <div className="relative bg-white w-full max-w-5xl max-h-[90vh] flex flex-col rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Header - Fixed */}
        <div className="flex justify-between items-center p-4 sm:p-6 border-b bg-gray-50/50 shrink-0">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 capitalize tracking-wide">
              {category.name}
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-1 font-medium">
              {category.items.length} {category.items.length === 1 ? 'item' : 'items'} available
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 transition-colors text-gray-500 hover:text-gray-900"
          >
            <X size={24} />
          </button>
        </div>

        {/* Products - Scrollable */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 bg-gray-50/30">
          {category.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-48 text-gray-400">
              <span className="text-lg">No items in this category yet.</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {category.items.map(item => {
                 const imageUrl = item.imageUrl
                   ? `${API.BASEURL}${item.imageUrl}`
                   : '';

                 return (
                  <div
                    key={item._id}
                    className="flex flex-col bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
                  >
                    <div className="relative h-40 sm:h-48 overflow-hidden bg-gray-100 shrink-0">
                      {imageUrl ? (
                        <img
                          src={imageUrl}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="flex w-full h-full items-center justify-center text-gray-400">
                          <span className="text-sm">No Image</span>
                        </div>
                      )}
                      {!item.available && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <span className="bg-red-500 text-white font-bold px-3 py-1 text-xs rounded-full shadow-md tracking-wider">OUT OF STOCK</span>
                        </div>
                      )}
                    </div>

                    <div className="p-4 flex flex-col flex-1">
                      <div className="flex justify-between items-start mb-2 gap-2">
                         <h3 className="font-bold text-gray-800 capitalize leading-tight">{item.name}</h3>
                         <span className="text-orange-600 font-extrabold whitespace-nowrap text-sm sm:text-base">₦{item.price}</span>
                      </div>
                      
                      <p className="text-gray-500 text-xs sm:text-sm flex-1 mb-4 line-clamp-2">
                        {item.description}
                      </p>
                      
                      <div className="mt-auto pt-3 border-t border-gray-50">
                         <CartButton item={item} />
                      </div>
                    </div>
                  </div>
                 );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
