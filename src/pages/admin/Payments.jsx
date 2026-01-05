import { useEffect, useState } from 'react';
import api from '@/lib/api';

export default function Payments() {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    api.get('/admin/payments').then(res => setPayments(res.data.data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Payments</h2>
      <div className="bg-white border rounded-xl">
        {payments.map(p => (
          <div key={p.id} className="p-4 border-b flex justify-between">
            <div>
              <p className="font-semibold">{p.reference}</p>
              <p className="text-sm text-gray-500">Order #{p.orderId}</p>
            </div>
            <div className="text-right">
              <p className="font-bold">£{p.amount}</p>
              <p className="text-xs text-gray-500">{p.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
