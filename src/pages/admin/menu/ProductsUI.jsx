import { useState } from 'react';
import { Button } from '@/components/ui/button';

function ProductsUI({
  form,
  setForm,
  preview,
  progress,
  loading,
  error,
  categories,
  menu,
  createProduct,
  deleteProduct,
  onImageChange,
}) {
  const [openCategory, setOpenCategory] = useState(null);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold">Product Management</h2>
        <p className="text-sm text-muted-foreground">
          Create, view and manage menu products
        </p>
      </div>

      {/* Create Product */}
      <div className="bg-white border rounded-xl p-5 shadow-sm space-y-4">
        <h3 className="font-semibold">Add New Product</h3>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            placeholder="Product name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            className="border rounded-lg px-4 py-2"
          />

          <input
            type="number"
            placeholder="Price"
            value={form.price}
            onChange={e => setForm({ ...form, price: e.target.value })}
            className="border rounded-lg px-4 py-2"
          />

          <select
            value={form.category}
            onChange={e => setForm({ ...form, category: e.target.value })}
            className="border rounded-lg px-4 py-2"
          >
            <option value="">Select category</option>
            {categories.map(c => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
          </select>

          <input
            type="file"
            accept="image/*"
            onChange={e => onImageChange(e.target.files[0])}
            className="border rounded-lg px-4 py-2"
          />

          {loading && (
            <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
              <div
                className="bg-black h-2 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
          <p className="text-xs text-muted-foreground">
            {loading && `Uploading... ${progress}%`}
          </p>

          {preview && (
            <div className="mt-2">
              <img
                src={preview}
                alt="preview"
                className="w-32 h-32 object-cover rounded-lg border"
              />
            </div>
          )}

          <textarea
            placeholder="Description"
            value={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })}
            className="border rounded-lg px-4 py-2 md:col-span-2"
          />
        </div>

        <Button onClick={createProduct} disabled={loading}>
          {loading ? 'Uploading…' : 'Create Product'}
        </Button>

        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>

      {/* Products by Category */}
      <div className="space-y-5">
        {menu.map(cat => {
          const isOpen = openCategory === cat._id;

          return (
            <div key={cat._id} className="bg-white border rounded-xl p-5">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-lg">{cat.name}</h4>
                  <p className="text-xs text-muted-foreground">
                    {cat.items.length} product(s)
                  </p>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setOpenCategory(isOpen ? null : cat._id)}
                >
                  {isOpen ? 'Hide' : 'View'}
                </Button>
              </div>

              {isOpen && (
                <div className="mt-4 space-y-3">
                  {cat.items.length === 0 && (
                    <p className="text-sm text-muted-foreground">
                      No products in this category
                    </p>
                  )}

                  {cat.items.map(item => (
                    <div
                      key={item._id}
                      className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                    >
                      <div className="flex gap-4 items-center">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="w-14 h-14 object-cover rounded-lg border"
                        />
                        <div>
                          <p className="font-medium">{item.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="font-semibold">£{item.price}</span>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => deleteProduct(item._id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductsUI;
