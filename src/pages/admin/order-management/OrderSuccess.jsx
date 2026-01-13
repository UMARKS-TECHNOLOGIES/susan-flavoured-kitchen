import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const OrderSuccess = () => {
  const navigate = useNavigate();
  const { orderId } = useParams();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FFF9F4] px-4">
      <div className="bg-white rounded-2xl shadow-lg p-10 max-w-md text-center space-y-6">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />

        <h1 className="text-2xl font-bold">Order Confirmed 🎉</h1>

        <p className="text-gray-600">
          Your order has been placed successfully.
        </p>

        <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-700">
          <p>
            <span className="font-semibold">Order ID:</span> {orderId}
          </p>
          <p>We’ll notify you when your food is on the way.</p>
        </div>

        <div className="flex gap-4">
          <Button onClick={() => navigate('/orders')} className="w-full">
            View Orders
          </Button>

          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="w-full"
          >
            Back Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
