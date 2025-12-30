import AdminNavbar from '@/components/layout/AdminNavbar';
import React from 'react';
import AdminSidebar from './AdminSidebar';
import StatsCard from './StatsCard';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Clock, ShoppingBag } from 'lucide-react';

import { useEffect, useState } from 'react';
import api from '../../../lib/api';

const AdminDashboardLayout = () => {
  const [stats, setStats] = useState({ total: 0, pending: 0, completed: 0 });
  const [recentOrders, setRecentOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      setLoading(true);
      try {
        const res = await api.get('/api/admin/dashboard');
        setStats(res.data.stats || { total: 0, pending: 0, completed: 0 });
        setRecentOrders(res.data.recentOrders || []);
      } catch (err) {
        reportError(err.message);
        console.error('Failed to fetch admin dashboard data:', err);
        setStats({ total: 0, pending: 0, completed: 0 });
        setRecentOrders([]);
      } finally {
        setLoading(false);
      }
    };
    fetchDashboard();
  }, []);

  const getStatusColor = status => {
    switch (status) {
      case 'Pending':
        return 'text-orange-500';
      case 'Delivered':
        return 'text-green-600';
      case 'Cancelled':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };
  return (
    <div>
      <AdminNavbar />
      <div className="mt-20">
        <h1 className="text-3xl font-bold">DashBoard</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 mt-12">
        <StatsCard
          title="Total Orders"
          value={stats.total}
          bgColor="bg-[#eee1cc]"
          icon={ShoppingBag}
        />
        <StatsCard
          title="Pending Orders"
          value={stats.pending}
          bgColor="bg-orange-100"
          icon={Clock}
        />
        <StatsCard
          title="Completed Orders"
          value={stats.completed}
          bgColor="bg-green-100"
          icon={CheckCircle2}
        />
      </div>

      <div className="flex mb-8 items-center justify-around">
        <Button className="bg-orange-500 py-10 px-10 hover:bg-orange-600 text-white">
          View Orders
        </Button>
        <Button className="bg-orange-500 py-10 px-10 hover:bg-orange-600 text-white">
          + Add New Meal
        </Button>
        <Button className="bg-orange-500 py-10 px-10 hover:bg-orange-600 text-white">
          Catering Requests
        </Button>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold">Recent Orders</h2>
        </div>

        <div className="grid grid-cols-5 gap-4 px-6 py-3 bg-gray-200 font-semibold text-sm">
          <div>Order ID</div>
          <div>Customer</div>
          <div>Item</div>
          <div>Price</div>
          <div>Status</div>
        </div>

        <div className="divide-y">
          {loading ? (
            <div className="px-6 py-4 text-center col-span-5 text-orange-500">
              Loading...
            </div>
          ) : recentOrders.length === 0 ? (
            <div className="px-6 py-4 text-center col-span-5 text-gray-500">
              No recent orders.
            </div>
          ) : (
            recentOrders.map((order, index) => (
              <div
                key={index}
                className="grid grid-cols-5 gap-4 px-6 py-4 hover:bg-gray-50"
              >
                <div className="font-medium">{order.id}</div>
                <div>{order.customer}</div>
                <div className="text-sm text-gray-600">{order.items}</div>
                <div className="font-medium">{order.price}</div>
                <div
                  className={`font-semibold ${getStatusColor(order.status)}`}
                >
                  {order.status}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-6 border-t text-right">
          <Button
            size="sm"
            className="text-orange-500 hover:text-white font-medium bg-transparent outline-2 outline-orange-400 hover:bg-orange-600"
          >
            View All Orders
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
