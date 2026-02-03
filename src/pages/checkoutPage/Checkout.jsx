import React, { useEffect, useState } from 'react';
import { useCart } from '../../store/useCart';
import { Button } from '../../components/ui/button';
import DeliveryDetails from './components/DeliveryDetails';
import DeliveryMethod from './components/DeliveryMethod';
import { useNavigate } from 'react-router-dom';
import api from '../../lib/api';
import { API } from '../../lib/endpoints';
import { ShieldCheck } from 'lucide-react';
import PaymentMethod from './components/PaymentMethod';
import toast from 'react-hot-toast';
import { validateCheckoutFields } from './Validation';
import { useAuth } from '@/store/useAuth';
import AuthPromptModal from '@/components/modals/AuthPromptModal';

const Checkout = () => {
  const navigate = useNavigate();
  const { getSubtotal, clearCart, loading } = useCart();
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [delivery, setDelivery] = useState({
    address: '',
    city: '',
    postcode: '',
    country: 'GB',
    phone: '',
    state: '',
  });
  const [deliveryMethod, setDeliveryMethod] = useState('delivery');
  const [paymentType, setPaymentType] = useState('card');

  const subtotal = getSubtotal();

  // Estimation ONLY
  const estimatedDeliveryFee = deliveryMethod === 'delivery' ? 1500 : 0;
  const estimatedTotal = subtotal + estimatedDeliveryFee;

  useEffect(() => {
    const { isValid, errors } = validateCheckoutFields(
      delivery,
      deliveryMethod,
      paymentType
    );

    setErrors(errors);
    setIsFormValid(isValid);
  }, [delivery, deliveryMethod, paymentType]);

  const { user } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleSubmit = async () => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }

    const { isValid } = validateCheckoutFields(
      delivery,
      deliveryMethod,
      paymentType
    );

    if (!isValid) {
      toast.error('Please fix the highlighted fields');
      return;
    }

    setIsProcessing(true);

    try {
      const res = await api.post(`${API.ORDER}/`, {
        deliveryMethod,
        deliveryAddress: delivery,
        paymentType,
      });

      const { order, paymentUrl, paymentError } = res.data.data;

      if (paymentError) {
        navigate(`/payment-failed/${order._id}`);
        toast.error(`Payment initialization failed: ${paymentError}`);
        return;
      }

      if (paymentUrl) {
        window.location.href = paymentUrl;
        return;
      }

      // If payment type is cash and no payment needed
      navigate(`/order-success/${order._id}`);
    } catch (err) {
      console.log(err.message);
      toast.error('Order failed');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF9F4] p">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* LEFT */}
          <div className="lg:col-span-2 space-y-6">
            <DeliveryDetails delivery={delivery} setDelivery={setDelivery} />

            <DeliveryMethod
              deliveryMethod={deliveryMethod}
              setDeliveryMethod={setDeliveryMethod}
            />

            <PaymentMethod
              paymentType={paymentType}
              setPaymentType={setPaymentType}
            />
          </div>

          {/* RIGHT */}
          <div className="bg-white p-6 rounded-xl shadow-sm space-y-6 h-fit">
            <h2 className="text-lg font-semibold">
              {loading ? (
                <div className="h-6 w-32 bg-gray-200 rounded animate-pulse"></div>
              ) : (
                'Order Summary'
              )}
            </h2>

            <div className="space-y-2 text-sm text-gray-600">
              {/* Subtotal */}
              <div className="flex justify-between">
                <span>
                  {loading ? (
                    <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                  ) : (
                    'Subtotal'
                  )}
                </span>
                <span>
                  {loading ? (
                    <div className="h-4 w-12 bg-gray-200 rounded animate-pulse"></div>
                  ) : (
                    `£${subtotal}`
                  )}
                </span>
              </div>

              {/* Estimated delivery */}
              <div className="flex justify-between">
                <span>
                  {loading ? (
                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                  ) : (
                    'Estimated delivery'
                  )}
                </span>
                <span>
                  {loading ? (
                    <div className="h-4 w-12 bg-gray-200 rounded animate-pulse"></div>
                  ) : (
                    `£${estimatedDeliveryFee}`
                  )}
                </span>
              </div>

              {/* Estimated total */}
              <div className="border-t pt-3 flex justify-between font-semibold text-gray-800">
                <span>
                  {loading ? (
                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                  ) : (
                    'Estimated total'
                  )}
                </span>
                <span>
                  {loading ? (
                    <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                  ) : (
                    `£${estimatedTotal}`
                  )}
                </span>
              </div>

              {/* Final note */}
              <p className="text-xs italic text-gray-500">
                {loading ? (
                  <div className="h-3 w-40 bg-gray-200 rounded animate-pulse"></div>
                ) : (
                  'Final amount confirmed before payment'
                )}
              </p>
            </div>

            {/* Button */}
            <button
              onClick={handleSubmit}
              disabled={!isFormValid || isProcessing || loading}
              className={`w-full py-5 rounded-xl transition ${
                !isFormValid || isProcessing || loading
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg'
              }`}
            >
              {isProcessing ? 'Processing...' : 'Place Order'}
            </button>

            <AuthPromptModal
              open={showAuthModal}
              onClose={() => setShowAuthModal(false)}
            />

            {/* Footer */}
            <div className="flex items-center gap-2 text-xs text-gray-500">
              {loading ? (
                <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4 text-green-600" />
                  Secure payment. No card details stored.
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
