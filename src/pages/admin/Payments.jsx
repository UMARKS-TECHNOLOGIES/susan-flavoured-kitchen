import { useEffect, useState } from 'react';
import api from '@/lib/api';

export default function Payments() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    api.get('/admin/payments').then(res => setPayments(res.data.data));
  }, []);

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6">Payments</h2>
      <div className="bg-white border rounded-xl">
        {payments.map(p => (
          <div key={p.id} className="p-4 sm:p-5 border-b last:border-0 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-4">
            <div>
              <p className="font-bold text-gray-800">{p.reference}</p>
              <p className="text-xs text-gray-500">Order #{p.orderId}</p>
            </div>
            <div className="text-left sm:text-right border-t sm:border-0 pt-2 sm:pt-0 border-gray-50">
              <p className="font-extrabold text-indigo-600">£{p.amount}</p>
              <p className="text-[10px] uppercase font-semibold text-gray-400">{p.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
