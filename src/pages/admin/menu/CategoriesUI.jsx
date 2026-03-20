import { useState } from 'react';
import { Button } from '@/components/ui/button';

function CategoriesUI({
  name,
  setName,
  preview,
  onImageChange,
  createCategory,
  categories,
  deleteCategory,
}) {
  const [openCategory, setOpenCategory] = useState(null);

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold">Categories</h2>
        <p className="text-sm text-muted-foreground">
          Manage menu categories and their items
        </p>
      </div>

      {/* Create Category */}
      <div className="bg-white rounded-xl border p-4 shadow-sm space-y-4">
        <h3 className="font-semibold mb-3">Create Category</h3>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="e.g. Breakfast, Drinks"
            className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black/10"
          />
          <div className="flex-1">
            <input
              type="file"
              accept="image/*"
              onChange={e => onImageChange(e.target.files[0])}
              className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black/10"
            />
          </div>
          <Button onClick={createCategory}>Add Category</Button>
        </div>

        {preview && (
          <div className="mt-2">
            <p className="text-xs text-muted-foreground mb-1">Image Preview:</p>
            <img
              src={preview}
              alt="Category preview"
              className="w-20 h-20 object-cover rounded-lg border shadow-sm"
            />
          </div>
        )}
      </div>

      {/* Categories List */}
      <div className="grid gap-5">
        {categories.length === 0 && (
          <p className="text-sm text-muted-foreground">
            No categories available. Create one above.
          </p>
        )}

        {categories.map(cat => {
          const isOpen = openCategory === cat._id;

          return (
            <div
              key={cat._id}
              className="bg-white border rounded-xl p-4 sm:p-5 shadow-sm"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {cat.imageUrl && (
                    <img 
                      src={cat.imageUrl} 
                      alt={cat.name} 
                      className="w-12 h-12 object-cover rounded-lg border"
                    />
                  )}
                  <div>
                    <h4 className="font-semibold text-lg">{cat.name}</h4>
                    <p className="text-xs text-muted-foreground">
                      {cat.items.length} item{cat.items.length !== 1 && 's'} •{' '}
                      {new Date(cat.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setOpenCategory(isOpen ? null : cat._id)}
                  >
                    {isOpen ? 'Hide Items' : 'View Items'}
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => deleteCategory(cat._id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>

              {/* Items */}
              {isOpen && (
                <div className="mt-4 space-y-3 border-t pt-4">
                  {cat.items.length === 0 && (
                    <p className="text-sm text-muted-foreground">
                      No items in this category yet.
                    </p>
                  )}

                  {cat.items.map(item => (
                    <div
                      key={item._id}
                      className="flex flex-col sm:flex-row justify-between sm:items-center gap-2 bg-gray-50 rounded-xl p-4 border border-gray-100"
                    >
                      <div className="flex items-center gap-3">
                        {item.imageUrl && (
                          <img 
                            src={item.imageUrl} 
                            alt={item.name} 
                            className="w-10 h-10 object-cover rounded border"
                          />
                        )}
                        <div>
                          <p className="font-bold text-gray-800 capitalize leading-tight">{item.name}</p>
                          <p className="text-[10px] text-gray-400 capitalize truncate mt-0.5">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <p className="font-extrabold text-sm text-indigo-600">£{item.price}</p>
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

export default CategoriesUI;
