import { useEffect, useMemo, useState } from 'react';
import api from '@/lib/api';
import { API } from '@/lib/endpoints';
import groupOrdersByMonth from '../userUtils/groupOrdersByMonth';
import statusStyles from '../userUtils/statusStyles.';
import OrderDetailsModal from '../modals/OrderDetailsModal';
import OrderSkeleton from '@/components/loaders/OrderSkeleton';

const DashboardOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);

  useEffect(() => {
    api
      .get(`${API.ORDER}/mine`)
      .then(res => setOrders(res.data.data || []))
      .catch(() => setOrders([]))
      .finally(() => setLoading(false));
  }, []);

  const groupedOrders = useMemo(() => groupOrdersByMonth(orders), [orders]);

  if (loading) {
    return (
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <OrderSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="bg-white border rounded-2xl p-10 text-center max-w-md mx-auto">
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center">
            🧾
          </div>
        </div>

        <h3 className="text-lg font-semibold text-gray-800">No orders yet</h3>

        <p className="text-sm text-gray-500 mt-2 mb-6">
          When you place your first order, it will appear here with all its
          details.
        </p>

        <button
          onClick={() => (window.location.href = '/dashboard/products')}
          className="inline-flex items-center justify-center px-5 py-2.5 bg-orange-600 text-white rounded-lg text-sm font-medium hover:bg-orange-700 transition"
        >
          Browse Menu
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="space-y-8">
        {Object.entries(groupedOrders).map(([month, monthOrders]) => (
          <div key={month}>
            <h3 className="font-semibold text-gray-700 mb-4">{month}</h3>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {monthOrders.map(order => {
                const status = order.status?.toLowerCase() || 'pending';

                return (
                  <div
                    key={order.id}
                    className="bg-white border rounded-2xl p-5 hover:shadow-md transition"
                  >
                    <div className="flex justify-between mb-3">
                      <span className="text-xs text-gray-500">
                        Order #{order.id}
                      </span>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${statusStyles[status]}`}
                      >
                        {status}
                      </span>
                    </div>

                    <div className="text-2xl font-bold mb-1">
                      £{order.total}
                    </div>

                    <p className="text-sm text-gray-500 mb-4">
                      {new Date(order.date).toLocaleDateString()}
                    </p>

                    <button
                      onClick={() => setSelectedOrder(order)}
                      className="text-sm text-orange-600 font-medium"
                    >
                      View details →
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <OrderDetailsModal
        order={selectedOrder}
        onClose={() => setSelectedOrder(null)}
      />
    </>
  );
};

export default DashboardOrders;
