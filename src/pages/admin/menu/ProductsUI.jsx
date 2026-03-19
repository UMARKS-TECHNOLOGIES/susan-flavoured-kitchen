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
    <div className="space-y-6 sm:space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold">Product Management</h2>
        <p className="text-sm text-muted-foreground">
          Create, view and manage menu products
        </p>
      </div>

      {/* Create Product */}
      <div className="bg-white border rounded-xl p-4 sm:p-5 shadow-sm space-y-4">
        <h3 className="font-semibold">Add New Product</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            placeholder="Product name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500/20 outline-none"
          />

          <input
            type="number"
            placeholder="Price"
            value={form.price}
            onChange={e => setForm({ ...form, price: e.target.value })}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500/20 outline-none"
          />

          <select
            value={form.category}
            onChange={e => setForm({ ...form, category: e.target.value })}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500/20 outline-none bg-white"
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
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500/20 outline-none bg-white text-sm"
          />

          {loading && (
            <div className="md:col-span-2">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-orange-600 h-2 rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-[10px] text-muted-foreground mt-1">
                Uploading... {progress}%
              </p>
            </div>
          )}

          {preview && (
            <div className="md:col-span-2">
              <img
                src={preview}
                alt="preview"
                className="w-24 h-24 object-cover rounded-lg border shadow-sm"
              />
            </div>
          )}

          <textarea
            placeholder="Description"
            value={form.description}
            onChange={e => setForm({ ...form, description: e.target.value })}
            className="w-full border rounded-lg px-4 py-2 md:col-span-2 h-24 focus:ring-2 focus:ring-orange-500/20 outline-none"
          />
        </div>

        <Button 
          onClick={createProduct} 
          disabled={loading}
          className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white"
        >
          {loading ? 'Uploading…' : 'Create Product'}
        </Button>

        {error && <p className="text-sm text-red-500 mt-2">{error}</p>}
      </div>

      {/* Products by Category */}
      <div className="space-y-4">
        {menu.map(cat => {
          const isOpen = openCategory === cat._id;

          return (
            <div key={cat._id} className="bg-white border rounded-xl p-4 sm:p-5 shadow-sm">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">{cat.name}</h4>
                  <p className="text-xs text-muted-foreground">
                    {cat.items.length} product(s)
                  </p>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setOpenCategory(isOpen ? null : cat._id)}
                  className="text-xs"
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
                      className="flex flex-col sm:flex-row sm:items-center justify-between bg-gray-50 p-4 rounded-xl gap-4 border border-gray-100"
                    >
                      <div className="flex gap-4 items-center">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg border shadow-sm shrink-0"
                        />
                        <div className="min-w-0">
                          <p className="font-bold text-gray-800 truncate">{item.name}</p>
                          <p className="text-xs text-gray-500 line-clamp-2 mt-0.5">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-4 pt-3 sm:pt-0 border-t sm:border-t-0 border-gray-100">
                        <span className="font-bold text-orange-600">₦{item.price}</span>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => deleteProduct(item._id)}
                          className="h-8 px-3 text-xs"
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
