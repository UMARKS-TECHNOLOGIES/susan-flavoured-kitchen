import React, { useEffect, useState } from 'react';
import api from '../../../lib/api';
import { API } from '../../../lib/endpoints';
import AdminNavbar from '@/components/layout/AdminNavbar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

const CATEGORIES = [
  'Soups & Stews',
  'Rice',
  'Snacks & Pastries',
  'Drinks',
  'Specials',
];

const MenuManagement = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [form, setForm] = useState({
    name: '',
    price: '',
    description: '',
    category: CATEGORIES[0],
    imageUrl: '',
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [saving, setSaving] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await api.get(`${API.PRODUCTS}`);
      setProducts(res.data.products || []);
    } catch (e) {
      setProducts([]);
      console.error('Failed to load products', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const resetForm = () => {
    setForm({
      name: '',
      price: '',
      description: '',
      category: CATEGORIES[0],
      imageUrl: '',
    });
    setImageFile(null);
    setImagePreview(null);
  };

  const handleImageChange = e => {
    const f = e.target.files?.[0] || null;
    setImageFile(f);
    if (f) {
      const url = URL.createObjectURL(f);
      setImagePreview(url);
      setForm(s => ({ ...s, imageUrl: '' })); // prefer uploaded file over URL field
    } else {
      setImagePreview(null);
    }
  };

  const uploadImageIfNeeded = async () => {
    if (!imageFile) return null;
    try {
      const fd = new FormData();
      fd.append('file', imageFile);
      const res = await api.post(`${API.PRODUCTS}/upload`, fd, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return res.data.imageUrl || null;
    } catch (e) {
      console.error('Image upload failed', e);
      throw new Error('Image upload failed');
    }
  };

  const handleSubmit = async () => {
    if (!form.name || !form.price) {
      alert('Name and price are required.');
      return;
    }
    setSaving(true);
    try {
      let finalImageUrl = form.imageUrl || null;
      if (imageFile) {
        finalImageUrl = await uploadImageIfNeeded();
      }

      const payload = {
        name: form.name,
        price: Number(form.price),
        description: form.description,
        category: form.category,
        image: finalImageUrl,
      };

      if (editingId) {
        await api.patch(`${API.PRODUCTS}/${editingId}`, payload);
      } else {
        await api.post(`${API.PRODUCTS}`, payload);
      }

      resetForm();
      setEditingId(null);
      await fetchProducts();
    } catch (e) {
      console.error('Save failed', e);
      alert(e.message || 'Failed to save product.');
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = p => {
    setEditingId(p.id);
    setForm({
      name: p.name || '',
      price: p.price?.toString() || '',
      description: p.description || '',
      category: p.category || CATEGORIES[0],
      imageUrl: p.image || '',
    });
    setImageFile(null);
    setImagePreview(p.image || null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async id => {
    if (!confirm('Delete this product?')) return;
    try {
      await api.delete(`${API.PRODUCTS}/${id}`);
      fetchProducts();
    } catch (e) {
      console.error('Delete failed', e);
      alert('Failed to delete product.');
    }
  };

  return (
    <div>
      <AdminNavbar title="Menu Management" />
      <div className="ml-64 p-8 max-w-6xl">
        <h2 className="text-2xl font-bold mb-4">Menu Management</h2>

        <Card className="mb-6 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              placeholder="Name"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />
            <Input
              placeholder="Price"
              value={form.price}
              onChange={e => setForm({ ...form, price: e.target.value })}
            />
            <select
              value={form.category}
              onChange={e => setForm({ ...form, category: e.target.value })}
              className="h-12 border rounded p-2"
            >
              {CATEGORIES.map(c => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>

            <div>
              <label className="text-sm block mb-1">Image (upload)</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="preview"
                  className="mt-2 w-40 h-28 object-cover rounded"
                />
              ) : form.imageUrl ? (
                <img
                  src={form.imageUrl}
                  alt="preview"
                  className="mt-2 w-40 h-28 object-cover rounded"
                />
              ) : null}
            </div>

            <Input
              placeholder="Or Image URL (fallback)"
              value={form.imageUrl}
              onChange={e => {
                setForm({ ...form, imageUrl: e.target.value });
                setImageFile(null);
                setImagePreview(null);
              }}
            />
            <textarea
              className="col-span-1 md:col-span-2 p-2 border rounded"
              placeholder="Description"
              value={form.description}
              onChange={e => setForm({ ...form, description: e.target.value })}
            />
          </div>

          <div className="mt-3">
            <Button
              onClick={handleSubmit}
              className="bg-orange-500 hover:bg-orange-600 text-white"
              disabled={saving}
            >
              {saving
                ? 'Saving...'
                : editingId
                ? 'Update Product'
                : 'Create Product'}
            </Button>
            {editingId && (
              <Button
                variant="outline"
                onClick={() => {
                  setEditingId(null);
                  resetForm();
                }}
                className="ml-2"
              >
                Cancel
              </Button>
            )}
          </div>
        </Card>

        <div className="bg-white rounded shadow">
          <div className="p-4 border-b">
            <h3 className="font-semibold">Products</h3>
          </div>

          {loading ? (
            <div className="p-4">Loading...</div>
          ) : products.length === 0 ? (
            <div className="p-4 text-gray-500">No products found.</div>
          ) : (
            products.map(p => (
              <div
                key={p.id}
                className="p-4 flex justify-between items-center border-b"
              >
                <div className="flex items-center gap-4">
                  {p.image ? (
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-20 h-16 object-cover rounded"
                    />
                  ) : (
                    <div className="w-20 h-16 bg-gray-100 rounded" />
                  )}
                  <div>
                    <div className="font-semibold">{p.name}</div>
                    <div className="text-sm text-gray-600">
                      {p.category} • £{Number(p.price).toFixed(2)}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" onClick={() => handleEdit(p)}>
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={() => handleDelete(p.id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuManagement;
