import React, { useEffect, useState } from 'react';
import { useAuth } from '../../store/useAuth';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Separator } from '../../components/ui/separator';
import api from '../../lib/api';
import { API } from '../../lib/endpoints';
import UserNavbar from './UserNavbar';

const DashboardHeader = ({ user }) => {
  const displayName = user?.name || user?.email || 'User';
  const firstName = String(displayName).split(' ')[0];
  const role = (user?.role || 'user').toLowerCase();
  const roleLabel = role === 'admin' ? 'Admin' : role === 'user' ? 'Customer' : role;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
      <div className="flex items-center gap-4">
       <div>
  <UserNavbar />
</div>
        <div>
          <h2 className="text-3xl font-bold text-orange-600">
            Welcome back, {firstName}!
          </h2>
          <p className="text-gray-600 mt-1">Your personal dashboard</p>
        </div>
      </div>
      <span className="mt-2 sm:mt-0 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-700">
        {roleLabel}
      </span>
    </div>
  );
};

const DashboardStats = ({ orders }) => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
    <Card className="bg-orange-50 border border-orange-200 shadow-sm p-5 rounded-lg">
      <h3 className="text-sm font-medium text-orange-600 mb-2 uppercase tracking-wide">
        Orders
      </h3>
      <p className="text-3xl font-bold text-gray-800">{orders.length}</p>
    </Card>

    <Card className="bg-orange-50 border border-orange-200 shadow-sm p-5 rounded-lg">
      <h3 className="text-sm font-medium text-orange-600 mb-2 uppercase tracking-wide">
        Total Spent
      </h3>
      <p className="text-3xl font-bold text-gray-800">
        ${orders.reduce((sum, o) => sum + o.total, 0).toFixed(2)}
      </p>
    </Card>

    <Card className="bg-orange-50 border border-orange-200 shadow-sm p-5 rounded-lg">
      <h3 className="text-sm font-medium text-orange-600 mb-2 uppercase tracking-wide">
        Last Order
      </h3>
      <p className="text-3xl font-bold text-gray-800">
        {orders[0]?.date ? new Date(orders[0].date).toLocaleDateString() : '-'}
      </p>
    </Card>
  </div>
);

const DashboardOrders = ({ orders }) => (
  <div className="mb-10">
    <h3 className="text-2xl font-bold text-orange-600 mb-3">Order History</h3>
    <Separator className="mb-6" />
    {orders.length === 0 ? (
      <p className="text-gray-500 italic">You haven’t placed any orders yet.</p>
    ) : (
      <div className="space-y-4">
        {orders.map(order => (
          <Card
            key={order.id}
            className="border border-orange-200 shadow-sm rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div className="mb-2 sm:mb-0">
                <span className="font-semibold text-gray-800">Order #{order.id}</span>
                <span className="ml-2 text-gray-500">
                  {new Date(order.date).toLocaleDateString()}
                </span>
              </div>
              <span className="font-bold text-orange-600 text-lg">
                ${order.total.toFixed(2)}
              </span>
            </div>
            <div className="mt-2 text-sm text-gray-600">{order.items.length} items</div>
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
    <div className="max-w-4xl mx-auto py-12 px-6">
      <DashboardHeader user={user} />
      <DashboardStats orders={orders} />
      <DashboardOrders orders={orders} />
      <div className="flex justify-end">
        <Button className="bg-orange-600 text-white hover:bg-orange-700 px-6 py-2 rounded-lg shadow-md">
          Edit Profile
        </Button>
      </div>
    </div>
  );
};

export default UserDashboard;
