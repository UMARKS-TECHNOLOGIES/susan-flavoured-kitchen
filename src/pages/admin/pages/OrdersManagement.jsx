import { useEffect, useState } from 'react';
import api from '@/lib/api';

function OrdersManagement() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get('/admin/orders').then(res => setOrders(res.data.data));
  }, []);

  const updateStatus = async (id, status) => {
    await api.patch(`/admin/orders/${id}`, { status });
    setOrders(o => o.map(ord => (ord.id === id ? { ...ord, status } : ord)));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Orders</h2>
      <div className="space-y-4">
        {orders.map(o => (
          <div key={o.id} className="bg-white border rounded-xl p-4">
            <div className="flex justify-between">
              <div>
                <p className="font-semibold">Order #{o.id}</p>
                <p className="text-sm text-gray-500">{o.user.email}</p>
              </div>
              <p className="font-bold">£{o.total}</p>
            </div>

            <div className="flex justify-between items-center mt-4">
              <select
                value={o.status}
                onChange={e => updateStatus(o.id, e.target.value)}
                className="border rounded px-2 py-1"
              >
                <option value="pending">Pending</option>
                <option value="preparing">Preparing</option>
                <option value="delivered">Delivered</option>
              </select>

              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  o.paymentStatus === 'paid'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {o.paymentStatus}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default OrdersManagement;
