import AdminNavbar from '@/components/layout/AdminNavbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, ShoppingBag } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import api from '../../../lib/api';
import { API } from '../../../lib/endpoints';
import AdminOrderDetails from './AdminOrderDetails';

const OrderManagement = () => {
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [dateFilter, setDateFilter] = useState('');
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const params = {};
      if (query) params.q = query;
      if (statusFilter && statusFilter !== 'All') params.status = statusFilter;
      if (dateFilter) params.date = dateFilter;
      const res = await api.get(`${API.ADMIN}/orders`, { params });
      setOrders(res.data.orders || []);
    } catch (e) {
      console.error('Failed to fetch orders', e);
      setOrders([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleSearch = () => fetchOrders();

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
      <div className="mt-20 mb-12 ml-64 p-8">
        <h1 className="text-3xl font-bold">Order Management</h1>

        <div className="flex gap-4 mb-6 text-center">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              placeholder="Search Order ID or Customer Name"
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
          <Button
            className="bg-orange-500 hover:bg-orange-600 text-white px-8"
            onClick={handleSearch}
          >
            Search
          </Button>
        </div>

        <div className="flex gap-4 mb-6">
          <select
            className="px-4 py-2 border rounded-lg"
            value={statusFilter}
            onChange={e => setStatusFilter(e.target.value)}
          >
            <option>All</option>
            <option>Pending</option>
            <option>Accepted</option>
            <option>Preparing</option>
            <option>Delivered</option>
            <option>Cancelled</option>
          </select>
          <Input
            type="date"
            value={dateFilter}
            onChange={e => setDateFilter(e.target.value)}
            className="w-48"
          />
          <Button onClick={fetchOrders}>Refresh</Button>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-8 gap-4 px-6 py-3 bg-gray-200 font-semibold text-sm">
            <div>Order ID</div>
            <div>Customer</div>
            <div>Item</div>
            <div>Amount</div>
            <div>Payment</div>
            <div>Status</div>
            <div>Date</div>
            <div>Action</div>
          </div>

          <div className="divide-y">
            {loading ? (
              <div className="px-6 py-4 text-center col-span-8 text-orange-500">
                Loading...
              </div>
            ) : orders.length === 0 ? (
              <div className="px-6 py-4 text-center col-span-8 text-gray-500">
                No orders found.
              </div>
            ) : (
              orders.map(order => (
                <div
                  key={order.id}
                  className="grid grid-cols-8 gap-4 px-6 py-4 items-center hover:bg-gray-50"
                >
                  <div className="font-medium">{order.id}</div>
                  <div>
                    {order.customerName || order.user?.name || order.userEmail}
                  </div>
                  <div className="text-sm">{order.items?.length || 0}</div>
                  <div className="font-medium">
                    £{Number(order.total).toFixed(2)}
                  </div>
                  <div
                    className={`font-medium ${
                      order.paid ? 'text-gray-900' : 'text-orange-500'
                    }`}
                  >
                    {order.paid ? 'Paid' : 'Unpaid'}
                  </div>
                  <div
                    className={`font-semibold ${getStatusColor(order.status)}`}
                  >
                    {order.status}
                  </div>
                  <div className="text-sm">
                    {new Date(
                      order.createdAt || order.date
                    ).toLocaleDateString()}
                  </div>
                  <div>
                    <Button
                      size="sm"
                      onClick={() => setSelectedOrderId(order.id)}
                    >
                      View
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {selectedOrderId && (
        <AdminOrderDetails
          orderId={selectedOrderId}
          onClose={() => {
            setSelectedOrderId(null);
            fetchOrders();
          }}
        />
      )}
    </div>
  );
};

export default OrderManagement;
