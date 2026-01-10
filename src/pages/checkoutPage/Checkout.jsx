import React, { useState } from 'react';
import { useCart } from '../../store/useCart';
import DeliveryDetails from './components/DeliveryDetails';
import { Button } from '../../components/ui/button';
import DeliveryMethod from './components/DeliveryMethod';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Checkout = () => {
  const { getSubtotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    postcode: '',
  });
  const [selectedMethod, setSelectedMethod] = useState('express');
  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = getSubtotal();
  const delivery =
    selectedMethod === 'express'
      ? 3.0
      : selectedMethod === 'next-day'
      ? 5.0
      : 0;
  const total = subtotal + delivery;

  const handleSubmit = async () => {
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.address
    ) {
      alert('Please fill in all required fields');
      return;
    }

    setIsProcessing(true);

    try {
      const res = await api.post(`${API.ORDERS}/place`, {
        delivery: formData,
        deliveryMethod: selectedMethod,
      });
      if (!res || !res.data) throw new Error('Order creation failed');
      const { paymentUrl, order } = res.data;
      clearCart();
      window.location.href = paymentUrl; // Redirect to Stripe
    } catch (error) {
      alert('Order failed: ' + error.message);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9F4] pb-8">
      <div className="max-w-5xl mx-auto px-4 pt-24 lg:pt-32">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 hover:bg-gray-100 p-2 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button>

        <h1 className="text-3xl font-bold mb-8 hidden lg:block">Checkout</h1>

        <div>
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8">
            {/* Left Column - Forms */}
            <div className="order-2 lg:order-1 lg:col-span-2 space-y-8">
              <DeliveryDetails formData={formData} setFormData={setFormData} />
              <DeliveryMethod
                selectedMethod={selectedMethod}
                setSelectedMethod={setSelectedMethod}
              />

              {/* Complete Order Button */}
              <Button
                onClick={handleSubmit}
                disabled={isProcessing}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg font-bold rounded-lg shadow-md"
              >
                {isProcessing ? 'Processing...' : 'Complete Order'}
              </Button>

              {/* Footer Links */}
              <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-500 mt-6">
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
                <a href="#" className="hover:underline">
                  Refund Policy
                </a>
                <a href="#" className="hover:underline">
                  Contact
                </a>
                <a href="#" className="hover:underline">
                  Cancellations
                </a>
              </div>
            </div>

            {/* Right Column - Order Summary */}
            {/* <div className="order-1 lg:order-2 lg:col-span-1">
              <OrderSummary
                subtotal={subtotal}
                delivery={delivery}
                total={total}
                showCheckoutButton={false}
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
