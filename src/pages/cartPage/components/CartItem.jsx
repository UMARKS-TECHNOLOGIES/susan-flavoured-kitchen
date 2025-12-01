import React from "react";
import { Trash2 } from "lucide-react";

const CartItem = ({ item, onQuantityChange, onRemove }) => {
  return (
    <div className="relative flex gap-2 md:gap-4 pb-6 md:pb-10 border-b">
      <div className="w-20 h-20 md:w-36 md:h-36 rounded-full bg-black overflow-hidden shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover bg-center"
        />
      </div>

      <div className="flex-1">
        <h3 className="font-bold text-base md:text-2xl mb-2 md:mb-4">
          {item.name}
        </h3>
        <p className="text-xs md:text-lg text-gray-600 mb-3 md:mb-6 leading-relaxed font-medium line-clamp-2 md:line-clamp-none">
          {item.description}
        </p>

        <div className="flex items-center justify-between px-0 md:px-2">
          <div className="flex items-center gap-1 md:gap-2">
            <button
              onClick={() =>
                onQuantityChange(item.id, Math.max(1, item.quantity - 1))
              }
              className="w-7 h-7 md:w-8 md:h-8 border-2 border-orange-500 text-orange-500 rounded flex items-center justify-center font-bold hover:bg-orange-50 text-sm md:text-base"
            >
              -
            </button>
            <span className="w-7 h-7 md:w-8 md:h-8 border-2 border-orange-500 text-orange-500 rounded flex items-center justify-center font-bold text-sm md:text-base">
              {item.quantity}
            </span>
            <button
              onClick={() => onQuantityChange(item.id, item.quantity + 1)}
              className="w-7 h-7 md:w-8 md:h-8 bg-orange-500 text-white rounded flex items-center justify-center font-bold hover:bg-orange-600 text-sm md:text-base"
            >
              +
            </button>
          </div>

          <span className="font-bold text-sm md:text-lg">
            Price: £{(item.price * item.quantity).toFixed(2)}
          </span>
        </div>
        <button
          onClick={() => onRemove(item.id)}
          className="absolute left-0 md:left-7 bottom-0 flex items-center gap-1 text-orange-500 text-sm md:text-lg font-bold mt-3 hover:text-orange-600"
        >
          <Trash2 className="w-4 h-4" />
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
