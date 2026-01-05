import { Button } from '@/components/ui/button';

function ProductsUI({
  form,
  setForm,
  categories,
  createProduct,
  loading,
  products,
  toggleStock,
  deleteProduct,
}) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold capitalize">
        welcome to Menu Management..!
      </h2>

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
          {categories.length > 0 ? (
            categories.map(c => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))
          ) : (
            <option disabled>No categories available</option>
          )}
        </select>

        <input
          type="file"
          accept="image/*"
          onChange={e => setForm({ ...form, image: e.target.files[0] })}
          className="border rounded px-3 py-2"
        />

        <Button onClick={createProduct} disabled={loading}>
          {loading ? 'Creating…' : 'Create'}
        </Button>
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
export default ProductsUI;
