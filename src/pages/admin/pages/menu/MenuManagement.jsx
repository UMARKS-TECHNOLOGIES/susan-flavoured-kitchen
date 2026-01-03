import { useEffect, useState } from 'react';
import api from '@/lib/api';

function MenuManagement() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await api.get('/admin/products');
    setProducts(res.data.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const toggleAvailability = async (id, available) => {
    await api.patch(`/admin/products/${id}`, { available: !available });
    fetchProducts();
  };

  const deleteProduct = async id => {
    if (!confirm('Delete product?')) return;
    await api.delete(`/admin/products/${id}`);
    fetchProducts();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Menu Management</h2>
      <div className="bg-white rounded-xl border">
        {products.map(p => (
          <div
            key={p.id}
            className="flex justify-between items-center p-4 border-b"
          >
            <div>
              <p className="font-semibold">{p.name}</p>
              <p className="text-sm text-gray-500">{p.category}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm">£{p.price}</span>
              <button
                onClick={() => toggleAvailability(p.id, p.available)}
                className={`px-3 py-1 text-xs rounded-full ${
                  p.available
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {p.available ? 'In Stock' : 'Out of Stock'}
              </button>
              <button
                onClick={() => deleteProduct(p.id)}
                className="text-red-500 text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default MenuManagement;
