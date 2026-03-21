import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar/Navbar';
import Footer from '../../components/layout/Footer';
import { Button } from '../../components/ui/button';
import { CheckCircle, ShoppingBag, ArrowRight } from 'lucide-react';
import api from '../../lib/api';

const PaymentSuccess = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(search);
  const sessionId = params.get('session_id');
  const orderId = params.get('orderId');

  const [loading, setLoading] = useState(Boolean(orderId));
  const [order, setOrder] = useState(null);

  useEffect(() => {
    // Basic local cart clearing logic if possible
    try {
       localStorage.removeItem('cartItems');
    } catch(e) {}

    if (!orderId) {
      setLoading(false);
      return;
    }

    let mounted = true;
    (async () => {
      try {
        const res = await api.get(`/orders/${orderId}`);
        if (mounted && res.data) {
           setOrder(res.data.data || res.data);
        }
      } catch (e) {
        // quiet fail
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => (mounted = false);
  }, [orderId]);

  return (
    <div className="min-h-screen bg-[#fff9f4] flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center p-4 mt-20 mb-10">
        <div className="bg-white rounded-3xl p-8 sm:p-12 w-full max-w-lg mx-auto shadow-2xl relative overflow-hidden border border-gray-100 text-center animate-in zoom-in-95 duration-500">
           {/* Confetti / Decorative background element */}
           <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-green-50 to-white opacity-50"></div>
           
           <div className="relative z-10 flex flex-col items-center">
             <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6 shadow-inner ring-4 ring-green-50">
               <CheckCircle className="w-10 h-10 text-green-600" />
             </div>
             
             <h1 className="text-3xl font-black text-gray-900 mb-3 tracking-tight">Payment Successful!</h1>
             <p className="text-sm text-gray-500 mb-8 max-w-xs leading-relaxed">
               Thank you for your order. We've received your payment and our kitchen will start processing it shortly.
             </p>

             {loading ? (
                <div className="w-full h-16 bg-gray-50 rounded-xl mb-6 flex items-center justify-center animate-pulse border border-gray-100">
                  <span className="text-sm font-medium text-gray-400">Loading order details...</span>
                </div>
             ) : order ? (
               <div className="w-full bg-gray-50 rounded-2xl p-5 mb-8 border border-gray-100 text-left">
                 <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Order Summary</p>
                 <div className="flex justify-between items-end">
                   <p className="text-lg font-bold text-gray-900">#{order._id?.slice(-6).toUpperCase() || order.id || orderId}</p>
                   <p className="text-xl font-black text-indigo-600">£{order.total}</p>
                 </div>
               </div>
             ) : (
               <div className="w-full bg-gray-50 rounded-2xl p-4 mb-8 border border-gray-100">
                 <p className="text-sm font-medium text-gray-600">
                   Your order ID is: <span className="font-bold text-gray-900">{orderId || sessionId?.slice(0,10) + '...'}</span>
                 </p>
               </div>
             )}

             <div className="flex flex-col sm:flex-row gap-3 w-full">
               <Button 
                 onClick={() => navigate('/dashboard/orders')}
                 className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl h-12 font-medium shadow-md shadow-indigo-200"
               >
                 <ShoppingBag className="w-4 h-4 mr-2" /> View Order
               </Button>
               <Button 
                 variant="outline" 
                 onClick={() => navigate('/menu')}
                 className="flex-1 rounded-xl h-12 font-medium border-gray-200 hover:bg-gray-50 text-gray-700"
               >
                 Continue Shopping <ArrowRight className="w-4 h-4 ml-2" />
               </Button>
             </div>
           </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PaymentSuccess;
