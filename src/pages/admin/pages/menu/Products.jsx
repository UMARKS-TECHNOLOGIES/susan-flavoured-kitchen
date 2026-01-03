import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import ProductService from './services/product.service';
import CategoryService from './services/category.service';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [form, setForm] = useState({
    name: '',
    price: '',
    categoryId: '',
    inStock: true,
  });

  const load = async () => {
    const [pRes, cRes] = await Promise.all([
      ProductService.getAll(),
      CategoryService.getAll(),
    ]);

    setProducts(pRes.data.data || []);
    setCategories(cRes.data.data || []);
  };

  const createProduct = async () => {
    await ProductService.create({
      ...form,
      price: Number(form.price),
    });
    setForm({ name: '', price: '', categoryId: '', inStock: true });
    load();
  };

  const toggleStock = async product => {
    await ProductService.update(product.id, {
      inStock: !product.inStock,
    });
    load();
  };

  const deleteProduct = async id => {
    await ProductService.remove(id);
    load();
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Products</h2>

      {/* Create Product */}
      <div className="grid md:grid-cols-4 gap-3 bg-white p-4 border rounded-xl">
        <input
          placeholder="Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          className="border rounded px-3 py-2"
        />
        <input
          placeholder="Price"
          value={form.price}
          onChange={e => setForm({ ...form, price: e.target.value })}
          className="border rounded px-3 py-2"
        />
        <select
          value={form.categoryId}
          onChange={e => setForm({ ...form, categoryId: e.target.value })}
          className="border rounded px-3 py-2"
        >
          <option value="">Select category</option>
          {categories.map(c => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
        <Button onClick={createProduct}>Create</Button>
      </div>

      {/* Products List */}
      <div className="grid gap-4">
        {products.map(p => (
          <div
            key={p.id}
            className="flex justify-between items-center bg-white border p-4 rounded-xl"
          >
            <div>
              <p className="font-semibold">{p.name}</p>
              <p className="text-sm text-gray-500">£{p.price}</p>
            </div>

            <div className="flex gap-2">
              <Button onClick={() => toggleStock(p)} variant="outline">
                {p.inStock ? 'In Stock' : 'Out of Stock'}
              </Button>
              <Button variant="destructive" onClick={() => deleteProduct(p.id)}>
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
