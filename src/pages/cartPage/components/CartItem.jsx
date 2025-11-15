import React from 'react'
import { Trash2 } from 'lucide-react';


const CartItem = ({ item, onQuantityChange, onRemove }) => {
  return (
      <div className="relative flex gap-4 pb-10">
          <div className="w-36 h-36 rounded-full bg-black overflow-hidden shrink-0">
              <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover bg-center"
              />
          </div>

          <div className="flex-1">
              <h3 className="font-bold text-2xl mb-4">{item.name}</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed font-medium">
                  {item.description}
              </p>

              <div className="flex items-center justify-between px-2">
                  <div className="flex items-center gap-2">
                      <button
                          onClick={() => onQuantityChange(item.id, Math.max(1, item.quantity - 1))}
                          className="w-8 h-8 border-2 border-orange-500 text-orange-500 rounded flex items-center justify-center font-bold hover:bg-orange-50"
                      >
                          -
                      </button>
                      <span className="w-8 h-8 border-2 border-orange-500 text-orange-500 rounded flex items-center justify-center font-bold">
                          {item.quantity}
                      </span>
                      <button
                          onClick={() => onQuantityChange(item.id, item.quantity + 1)}
                          className="w-8 h-8 bg-orange-500 text-white rounded flex items-center justify-center font-bold hover:bg-orange-600"
                      >
                          +
                      </button>
                  </div>

                  <span className="font-bold text-lg">
                      Price: £{item.price.toFixed(2)}
                  </span>
              </div>
          <button
              onClick={() => onRemove(item.id)}
              className="absolute left-7 -bottom-10 flex items-center gap-1 text-orange-500 text-lg font-bold mt-3 hover:text-orange-600"
          >
              <Trash2 className="w-4 h-4" />
              Remove
          </button>
          </div>
      </div>
  )
}

export default CartItem