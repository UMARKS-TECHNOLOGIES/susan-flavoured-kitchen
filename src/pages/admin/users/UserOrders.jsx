import { useState } from 'react';

export default function UserOrders({ orders = [] }) {
  const [open, setOpen] = useState(false);

  if (!orders.length) {
    return <p className="text-sm text-gray-400 mt-4">No orders yet</p>;
  }

  return (
    <div className="mt-6">
      <button
        onClick={() => setOpen(!open)}
        className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition"
      >
        {open ? 'Hide orders' : `View orders (${orders.length})`}
      </button>

      {open && (
        <div className="mt-4 space-y-4">
          {orders.map(order => (
            <div
              key={order._id}
              className="border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md bg-gray-50 transition"
            >
              {/* Order Header */}
              <div className="flex justify-between items-center text-sm mb-2">
                <span className="font-medium">
                  Order #{order._id.slice(-6)}
                </span>
                <span className="font-semibold text-indigo-700">
                  €{order.total}
                </span>
              </div>

              {/* Order Meta */}
              <div className="text-xs text-gray-500 flex flex-wrap gap-2 mb-2">
                <span>
                  Status:{' '}
                  <span
                    className={`font-medium capitalize ${
                      order.status === 'pending'
                        ? 'text-yellow-600'
                        : 'text-green-600'
                    }`}
                  >
                    {order.status}
                  </span>
                </span>
                <span>
                  Payment:{' '}
                  <span
                    className={`font-medium ${
                      order.paymentStatus === 'failed'
                        ? 'text-red-600'
                        : 'text-green-600'
                    }`}
                  >
                    {order.paymentStatus}
                  </span>
                </span>
                <span>Type: {order.paymentType}</span>
                <span>Gateway: {order.paymentGateway}</span>
                <span>Delivery: {order.deliveryMethod}</span>
                <span>
                  Created: {new Date(order.createdAt).toLocaleString()}
                </span>
                <span>
                  Updated: {new Date(order.updatedAt).toLocaleString()}
                </span>
              </div>

              {/* Items */}
              <div className="space-y-2 mt-2">
                {order.items.map(item => (
                  <div
                    key={item._id}
                    className="flex justify-between items-center p-2 bg-white rounded-lg border border-gray-100 shadow-sm"
                  >
                    <div className="flex items-center gap-2">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-8 w-8 object-cover rounded"
                        />
                      ) : (
                        <div className="h-8 w-8 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
                          No Img
                        </div>
                      )}
                      <span>
                        {item.name} x{item.quantity}
                      </span>
                    </div>
                    <span className="font-medium">€{item.unitPrice}</span>
                  </div>
                ))}
              </div>

              {/* Subtotals */}
              <div className="mt-2 text-xs text-gray-500 flex justify-between">
                <span>Subtotal: €{order.subtotal}</span>
                <span>Delivery Fee: €{order.deliveryFee}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
