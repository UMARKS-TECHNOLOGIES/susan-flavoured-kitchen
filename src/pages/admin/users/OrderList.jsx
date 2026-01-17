import { useState } from 'react';

export default function OrderList({ orders = [] }) {
  const [openOrderId, setOpenOrderId] = useState();

  if (!orders.length) {
    return <p className="text-sm text-gray-400 mt-2">No orders</p>;
  }

  return (
    <div className="mt-3 space-y-2">
      {orders.map(order => {
        const isOpen = openOrderId === order.id;

        return (
          <div key={order.id} className="bg-gray-100 rounded p-2">
            <div
              className="flex justify-between cursor-pointer"
              onClick={() => setOpenOrderId(isOpen ? null : order.id)}
            >
              <span className="text-sm font-medium">Order #{order.id}</span>
              <span className="text-sm">€{order.total}</span>
            </div>

            {isOpen && (
              <div className="mt-2 text-sm text-gray-600 space-y-1">
                <p>Status: {order.status}</p>
                <p>Payment: {order.paymentStatus}</p>

                <ul className="pl-4 list-disc">
                  {order.items.map(item => (
                    <li key={item.productId}>
                      {item.name} × {item.quantity}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
