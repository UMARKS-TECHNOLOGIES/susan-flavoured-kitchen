import { XCircle } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { API } from '@/lib/endpoints';
import api from '@/lib/api';

const PaymentFailed = () => {
  const navigate = useNavigate();
  const { orderId } = useParams();
  const [loading, setLoading] = useState(false);

  if (!orderId) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFF9F4] px-4">
        <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md text-center">
          <p className="text-red-500 font-semibold">
            Invalid order. No order ID provided.
          </p>
          <Button
            onClick={() => navigate('/dashboard/orders')}
            className="mt-4"
          >
            Go to Orders
          </Button>
        </div>
      </div>
    );
  }

  const retryPayment = async () => {
    try {
      setLoading(true);
      const res = await api.post(`${API.ORDER}/${orderId}/retry-payment`);

      const { paymentUrl } = res.data.data;

      if (paymentUrl) {
        window.location.href = paymentUrl;
      } else {
        alert('Retry failed: No payment URL returned.');
      }
    } catch (err) {
      alert(
        err.response?.data?.error || 'Retry failed. Please try again later.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF9F4] px-4">
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md text-center space-y-6">
        <XCircle className="w-16 h-16 text-red-500 mx-auto" />

        <h1 className="text-2xl font-bold">Payment Failed</h1>

        <p className="text-gray-600">
          Your order was created but payment was not completed.
        </p>

        <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700">
          <p>
            <span className="font-semibold">Order ID:</span> {orderId}
          </p>
          <p>You can retry payment or view your orders.</p>
        </div>

        <div className="flex gap-4">
          <Button
            onClick={retryPayment}
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white"
          >
            {loading ? 'Retrying...' : 'Retry Payment'}
          </Button>

          <Button
            variant="outline"
            onClick={() => navigate('/dashboard/orders')}
            className="w-full"
          >
            View Orders
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailed;
