import React from 'react'

const OrderItem = ({ item }) => {
  return (
      <div className="flex items-center gap-3 mb-3">
          <img
              src={item.image}
              alt={item.name}
              className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1">
              <span className="text-md font-medium">{item.name} × {item.quantity} — </span>
              <span className="font-bold">£{item.totalPrice.toFixed(2)}</span>
          </div>
      </div>
  )
}

export default OrderItem