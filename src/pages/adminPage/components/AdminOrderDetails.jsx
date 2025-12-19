import React, { useEffect, useState } from 'react';
import api from '../../../lib/api';
import { API } from '../../../lib/endpoints';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const AdminOrderDetails = ({ orderId, onClose }) => {
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [savingStatus, setSavingStatus] = useState(false);

  useEffect(() => {
    let mounted = true;
    (async () => {
      setLoading(true);
      try {
        const res = await api.get(`${API.ADMIN}/orders/${orderId}`);
        if (!mounted) return;
        setOrder(res.data.order || null);
      } catch (e) {
        console.error('Failed to load order', e);
        setOrder(null);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => (mounted = false);
  }, [orderId]);

  const setStatus = async status => {
    if (!order) return;
    setSavingStatus(true);
    try {
      await api.patch(`${API.ADMIN}/orders/${orderId}`, { status });
      setOrder({ ...order, status });
    } catch (e) {
      console.error('Failed to update status', e);
      alert('Failed to update order status.');
    } finally {
      setSavingStatus(false);
    }
  };

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
        <div className="bg-white p-6 rounded">Loading order...</div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
        <div className="bg-white p-6 rounded">
          <p>Order not found.</p>
          <div className="mt-4 flex justify-end">
            <Button onClick={onClose}>Close</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 p-4 overflow-auto">
      <div className="bg-white rounded-lg max-w-3xl w-full p-6 mt-12">
        <div className="flex items-start justify-between">
          <h2 className="text-xl font-semibold">Order #{order.id}</h2>
          <div className="text-sm text-gray-600">
            {new Date(order.createdAt || order.date).toLocaleString()}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-4">
            <h3 className="font-semibold mb-2">Customer</h3>
            <p>{order.customerName || order.user?.name || order.userEmail}</p>
            <p className="text-sm text-gray-600 mt-2">
              {order.deliveryAddress || order.address}
            </p>
          </Card>

          <Card className="p-4 md:col-span-2">
            <h3 className="font-semibold mb-2">Items</h3>
            <div className="space-y-2">
              {(order.items || []).map(it => (
                <div
                  key={it.productId || it.id}
                  className="flex justify-between"
                >
                  <div>
                    <div className="font-medium">{it.name || it.title}</div>
                    <div className="text-sm text-gray-600">
                      Qty: {it.quantity}
                    </div>
                  </div>
                  <div className="font-semibold">
                    £{Number(it.price).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex justify-end gap-4 items-center">
              <div className="text-lg font-bold">
                Total: £{Number(order.total).toFixed(2)}
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <div className="text-sm text-gray-600">
              Payment: {order.paid ? 'Paid' : 'Unpaid'}
            </div>
            <div className="text-sm text-gray-600">
              Status: <span className="font-semibold">{order.status}</span>
            </div>
          </div>

          <div className="flex gap-2">
            <Button
              onClick={() => setStatus('Accepted')}
              disabled={savingStatus}
            >
              Accept
            </Button>
            <Button
              onClick={() => setStatus('Preparing')}
              disabled={savingStatus}
            >
              Preparing
            </Button>
            <Button
              onClick={() => setStatus('Delivered')}
              disabled={savingStatus}
            >
              Mark Delivered
            </Button>
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrderDetails;
