import { useEffect, useState } from 'react';
import api from '@/lib/api';
import { API } from '@/lib/endpoints';
import { FaTimes } from 'react-icons/fa';
import UserSidePanel from './UserPanel';
import Counts from './Counts';

export default function OrdersManagement() {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState({
    status: '',
    payment: '',
    delivery: '',
  });
  const [selectedUserId, setSelectedUserId] = useState(null);

  // Fetch all orders
  const fetchOrders = async () => {
    const res = await api.get(`${API.ADMIN}/orders/`);
    setOrders(res.data.data);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Update order status
  const updateStatus = async (orderId, field, value) => {
    await api.patch(`${API.ADMIN}/orders/${orderId}`, { [field]: value });
    setOrders(o =>
      o.map(ord => (ord._id === orderId ? { ...ord, [field]: value } : ord))
    );
  };

  // Cancel order
  const cancelOrder = async orderId => {
    await api.patch(`${API.ADMIN}/orders/${orderId}`, { status: 'cancelled' });
    setOrders(o =>
      o.map(ord =>
        ord._id === orderId ? { ...ord, status: 'cancelled' } : ord
      )
    );
  };

  // Filtered orders
  const filteredOrders = orders.filter(o => {
    const statusMatch = filter.status ? o.status === filter.status : true;
    const paymentMatch = filter.payment
      ? o.paymentStatus === filter.payment
      : true;
    const deliveryMatch = filter.delivery
      ? o.deliveryMethod === filter.delivery
      : true;
    return statusMatch && paymentMatch && deliveryMatch;
  });

  // Counts
  const counts = {
    total: orders.length,
    pending: orders.filter(o => o.status === 'pending').length,
    preparing: orders.filter(o => o.status === 'preparing').length,
    delivered: orders.filter(o => o.status === 'delivered').length,
    cancelled: orders.filter(o => o.status === 'cancelled').length,
    paymentFailed: orders.filter(o => o.paymentStatus === 'failed').length,
  };

  return (
    <div className="p-6 max-w-full mx-auto">
      <h2 className="text-2xl font-bold mb-6">Orders Management</h2>

      {/* Counts */}
      <Counts counts={counts} />

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6">
        <select
          value={filter.status}
          onChange={e => setFilter(f => ({ ...f, status: e.target.value }))}
          className="border rounded px-3 py-1"
        >
          <option value="">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="preparing">Preparing</option>
          <option value="delivered">Delivered</option>
          <option value="cancelled">Cancelled</option>
        </select>
        <select
          value={filter.payment}
          onChange={e => setFilter(f => ({ ...f, payment: e.target.value }))}
          className="border rounded px-3 py-1"
        >
          <option value="">All Payments</option>
          <option value="paid">Paid</option>
          <option value="pending">Pending</option>
          <option value="failed">Failed</option>
        </select>
        <select
          value={filter.delivery}
          onChange={e => setFilter(f => ({ ...f, delivery: e.target.value }))}
          className="border rounded px-3 py-1"
        >
          <option value="">All Delivery Methods</option>
          <option value="delivery">Delivery</option>
          <option value="pickup">Pickup</option>
        </select>
      </div>

      {/* Orders List */}
      <div className="space-y-4">
        {filteredOrders.map(o => (
          <div
            key={o._id}
            className="bg-white border rounded-xl p-4 shadow hover:shadow-lg transition flex flex-col md:flex-row md:justify-between gap-4"
          >
            <div className="flex flex-col md:flex-row md:gap-6 items-start md:items-center flex-1">
              <div>
                <p
                  className="font-semibold cursor-pointer hover:text-indigo-600"
                  onClick={() => setSelectedUserId(o.userId)}
                >
                  Order #{o._id.slice(-6)}
                </p>
                <p className="text-sm text-gray-500">
                  Total: ₦{o.total} | Delivery: {o.deliveryMethod}
                </p>
              </div>
              <div className="flex flex-col gap-2 mt-2 md:mt-0">
                <select
                  value={o.status}
                  onChange={e => updateStatus(o._id, 'status', e.target.value)}
                  className="border rounded px-2 py-1 text-sm"
                >
                  <option value="pending">Pending</option>
                  <option value="preparing">Preparing</option>
                  <option value="delivered">Delivered</option>
                  <option value="cancelled">Cancelled</option>
                </select>

                <button
                  onClick={() => cancelOrder(o._id)}
                  className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 text-sm"
                >
                  Cancel Order
                </button>
              </div>
            </div>

            <div className="text-sm text-gray-500 mt-2 md:mt-0">
              Created: {new Date(o.createdAt).toLocaleString()}
            </div>
          </div>
        ))}
      </div>

      {/* User Side Panel */}
      <UserSidePanel
        userId={selectedUserId}
        onClose={() => setSelectedUserId(null)}
      />
    </div>
  );
}
