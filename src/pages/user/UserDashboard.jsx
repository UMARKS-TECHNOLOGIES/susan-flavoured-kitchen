import React, { useEffect, useState } from 'react';
import { useAuth } from '../../store/useAuth';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Separator } from '../../components/ui/separator';
import api from '../../lib/api';
import { API } from '../../lib/endpoints';

const DashboardHeader = ({ user }) => {
  const displayName = user?.name || user?.email || 'User';
  const firstName = String(displayName).split(' ')[0];
  const role = (user?.role || 'user').toLowerCase();

  const roleLabel =
    role === 'admin' ? 'Admin' : role === 'user' ? 'Customer' : role;

  return (
    <div className="flex items-center gap-4 mb-6">
      <img
        src={user?.avatar || '/assets/default-avatar.png'}
        alt="User Avatar"
        className="w-16 h-16 rounded-full border-2 border-orange-500"
      />
      <div>
        <h2 className="text-2xl font-bold text-orange-600">
          Welcome back, {firstName}!
        </h2>
        <div className="flex items-center gap-2 mt-1">
          <p className="text-gray-600">Your personal dashboard</p>
          <span
            aria-hidden
            className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-700"
          >
            {roleLabel}
          </span>
        </div>
      </div>
    </div>
  );
};

const DashboardStats = ({ orders }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
    <Card className="bg-orange-50 border-orange-200">
      <h3 className="text-lg font-semibold text-orange-600">Orders</h3>
      <p className="text-2xl font-bold">{orders.length}</p>
    </Card>
    <Card className="bg-orange-50 border-orange-200">
      <h3 className="text-lg font-semibold text-orange-600">Total Spent</h3>
      <p className="text-2xl font-bold">
        ${orders.reduce((sum, o) => sum + o.total, 0).toFixed(2)}
      </p>
    </Card>
    <Card className="bg-orange-50 border-orange-200">
      <h3 className="text-lg font-semibold text-orange-600">Last Order</h3>
      <p className="text-2xl font-bold">
        {orders[0]?.date ? new Date(orders[0].date).toLocaleDateString() : '-'}
      </p>
    </Card>
  </div>
);

const DashboardOrders = ({ orders }) => (
  <div>
    <h3 className="text-xl font-bold text-orange-600 mb-2">Order History</h3>
    <Separator className="mb-4" />
    {orders.length === 0 ? (
      <p className="text-gray-500">No orders yet.</p>
    ) : (
      <div className="space-y-4">
        {orders.map(order => (
          <Card key={order.id} className="border-orange-100">
            <div className="flex justify-between items-center">
              <div>
                <span className="font-semibold">Order #{order.id}</span>
                <span className="ml-2 text-gray-500">
                  {new Date(order.date).toLocaleDateString()}
                </span>
              </div>
              <span className="font-bold text-orange-600">
                ${order.total.toFixed(2)}
              </span>
            </div>
            <div className="mt-2 text-sm text-gray-600">
              {order.items.length} items
            </div>
          </Card>
        ))}
      </div>
    )}
  </div>
);

const UserDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [_loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    const fetchOrders = async () => {
      setLoading(true);
      try {
        const res = await api.get(`${API.USERS}/orders`);
        setOrders(res.data.orders || []);
      } catch {
        setOrders([]);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <DashboardHeader user={user} />
      <DashboardStats orders={orders} />
      <DashboardOrders orders={orders} />
      <div className="mt-8 flex justify-end">
        <Button className="bg-orange-600 text-white hover:bg-orange-700">
          Edit Profile
        </Button>
      </div>
    </div>
  );
};

export default UserDashboard;
