import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar/Navbar';
import Footer from '../../components/layout/Footer';
import { Button } from '../../components/ui/button';

const PaymentCancel = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(search);
  const orderId = params.get('orderId');

  return (
    <div className="min-h-screen bg-[#fff9f4]">
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-24">
        <h1 className="text-2xl font-bold mb-4">Payment Cancelled</h1>
        <p className="mb-4">
          The payment was not completed. You can try again or contact support if
          you think this is an error.
        </p>

        {orderId && (
          <p className="text-sm text-gray-600 mb-4">
            Order reference: <span className="font-mono">{orderId}</span>
          </p>
        )}

        <div className="flex gap-3">
          <Button onClick={() => navigate('/checkout')}>
            Return to Checkout
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

export default PaymentCancel;
