import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar/Navbar';
import Footer from '../../components/layout/Footer';
import { Button } from '../../components/ui/button';

const PaymentSuccess = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(search);
  const sessionId = params.get('session_id');
  const orderId = params.get('orderId');

  const [loading, setLoading] = useState(Boolean(orderId));
  const [order, setOrder] = useState(null);

  useEffect(() => {
    if (!orderId) {
      setLoading(false);
      return;
    }

    let mounted = true;
    (async () => {
      try {
        // Optional: fetch order details from your backend if you want to show them
        // const res = await fetch(`/api/orders/${orderId}`);
        // const data = await res.json();
        // if (mounted) setOrder(data);
      } catch (e) {
        // ignore — show basic success UI
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => (mounted = false);
  }, [orderId]);

  return (
    <div className="min-h-screen bg-[#fff9f4]">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-24">
        <h1 className="text-2xl font-bold mb-4">Payment Successful</h1>

        <p className="mb-4">
          Thank you — your payment was completed successfully.
        </p>

        {sessionId && (
          <p className="text-sm text-gray-600 mb-4">
            Session: <span className="font-mono">{sessionId}</span>
          </p>
        )}

        {loading ? (
          <p>Loading order...</p>
        ) : order ? (
          <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
            <h2 className="font-semibold mb-2">Order #{order.id}</h2>
            {/* render minimal order summary here if you fetched it */}
            <p className="text-sm text-gray-600">Total: {order.total}</p>
          </div>
        ) : (
          <div className="mb-6">
            <p className="text-sm text-gray-600">
              If you don't see your order details here, you can visit your
              Orders page.
            </p>
          </div>
        )}

        <div className="flex gap-3">
          <Button onClick={() => navigate('/orderconfirmation')}>
            View Order
          </Button>
          <Button variant="outline" onClick={() => navigate('/menu')}>
            Continue Shopping
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentSuccess;
