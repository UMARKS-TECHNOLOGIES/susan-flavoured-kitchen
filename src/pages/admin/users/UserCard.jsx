import { useState } from 'react';
import {
  FaTimes,
  FaBoxOpen,
  FaCreditCard,
  FaTruck,
  FaCalendarAlt,
} from 'react-icons/fa';

export default function UserCard({ user }) {
  const [openOrders, setOpenOrders] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  return (
    <>
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-lg transition p-4 sm:p-6 w-full max-w-3xl mx-auto my-2 sm:my-4 border border-gray-100">
        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-full bg-indigo-100 flex items-center justify-center text-xl font-bold text-indigo-700">
            {user.email?.[0]?.toUpperCase() || '?'}
          </div>
          <div>
            <p className="font-semibold text-gray-900 text-lg">
              {user.name || user.email}
            </p>
            <p className="text-sm text-gray-500">
              Joined {new Date(user.createdAt).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-500">Email: {user.email}</p>
            <p className="text-sm text-gray-500">
              Phone: {user.phone || 'N/A'}
            </p>
            <p className="text-sm text-gray-500">
              Role: <span className="capitalize font-medium">{user.role}</span>
            </p>
          </div>
        </div>

        {/* Addresses */}
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-1">
            Addresses
          </h4>
          {user.addresses?.length > 0 ? (
            <ul className="text-sm text-gray-600 space-y-1">
              {user.addresses.map((addr, i) => (
                <li key={i} className="flex items-center gap-1">
                  📍 {addr.street}, {addr.city} {addr.state || ''}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-400">No address on file</p>
          )}
        </div>

        {/* Orders */}
        <div className="mt-6">
          <button
            onClick={() => setOpenOrders(!openOrders)}
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition"
          >
            {openOrders
              ? 'Hide orders'
              : `View orders (${user.orders?.length || 0})`}
          </button>

          {openOrders && (
            <div className="mt-4 space-y-4">
              {user.orders.map(order => (
                <div
                  key={order._id}
                  className="border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md bg-gray-50 transition cursor-pointer"
                  onClick={() => setSelectedOrder(order)}
                >
                  <div className="flex justify-between items-center text-sm mb-2">
                    <span className="font-medium">
                      Order #{order._id.slice(-6)}
                    </span>
                    <span className="font-semibold text-indigo-700">
                      ₦{order.total}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 flex flex-wrap gap-2">
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
                    <span>Delivery: {order.deliveryMethod}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Side Drawer for Order Details */}

      {selectedOrder && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setSelectedOrder(null)}
          ></div>

          {/* Drawer */}
          <div className="fixed top-0 right-0 h-full w-full md:w-1/2 bg-white shadow-2xl z-50 p-6 overflow-y-auto transition-transform duration-300 transform translate-x-0">
            {/* Header */}
            <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-3">
              <div className="flex items-center gap-3">
                <FaBoxOpen className="text-indigo-600 text-2xl" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Order #{selectedOrder._id.slice(-6)}
                </h2>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                <FaTimes />
              </button>
            </div>

            {/* Order Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-gray-400" />
                <span>
                  Created:{' '}
                  <span className="font-medium">
                    {new Date(selectedOrder.createdAt).toLocaleString()}
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-gray-400" />
                <span>
                  Updated:{' '}
                  <span className="font-medium">
                    {new Date(selectedOrder.updatedAt).toLocaleString()}
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaTruck className="text-gray-400" />
                <span>
                  Delivery:{' '}
                  <span className="font-medium capitalize">
                    {selectedOrder.deliveryMethod}
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FaCreditCard className="text-gray-400" />
                <span>
                  Payment:{' '}
                  <span
                    className={`font-medium ${
                      selectedOrder.paymentStatus === 'failed'
                        ? 'text-red-600'
                        : 'text-green-600'
                    }`}
                  >
                    {selectedOrder.paymentStatus}
                  </span>
                </span>
              </div>
              <div>
                Status:
                <span
                  className={`ml-1 px-2 py-1 rounded-full text-xs font-semibold ${
                    selectedOrder.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-green-100 text-green-700'
                  }`}
                >
                  {selectedOrder.status}
                </span>
              </div>
              <div>
                Gateway:{' '}
                <span className="font-medium capitalize">
                  {selectedOrder.paymentGateway}
                </span>
              </div>
              <div>
                Type:{' '}
                <span className="font-medium capitalize">
                  {selectedOrder.paymentType}
                </span>
              </div>
            </div>

            {/* Items */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Items
              </h3>
              <div className="space-y-3">
                {selectedOrder.items.map(item => (
                  <div
                    key={item._id}
                    className="flex justify-between items-center p-3 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex items-center gap-3">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-12 w-12 object-cover rounded-lg"
                        />
                      ) : (
                        <div className="h-12 w-12 bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-500">
                          No Img
                        </div>
                      )}
                      <div>
                        <p className="font-medium text-gray-900">{item.name}</p>
                        <p className="text-xs text-gray-500">
                          Quantity: {item.quantity}
                        </p>
                      </div>
                    </div>
                    <span className="font-semibold text-indigo-700">
                      ₦{item.unitPrice}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="border-t border-gray-200 pt-4 text-sm text-gray-700 flex justify-between font-medium">
              <span>Subtotal: ₦{selectedOrder.subtotal}</span>
              <span>Delivery Fee: ₦{selectedOrder.deliveryFee}</span>
            </div>

            {/* Close Button */}
            <div className="mt-6 text-right">
              <button
                onClick={() => setSelectedOrder(null)}
                className="px-5 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
