import { useState } from 'react';
import { Button } from '@/components/ui/button';

function CategoriesUI({
  name,
  setName,
  createCategory,
  categories,
  deleteCategory,
}) {
  const [openCategory, setOpenCategory] = useState(null);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold">Categories</h2>
        <p className="text-sm text-muted-foreground">
          Manage menu categories and their items
        </p>
      </div>

      {/* Create Category */}
      <div className="bg-white rounded-xl border p-4 shadow-sm">
        <h3 className="font-semibold mb-3">Create Category</h3>
        <div className="flex gap-3">
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="e.g. Breakfast, Drinks"
            className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black/10"
          />
          <Button onClick={createCategory}>Add</Button>
        </div>
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
              className="bg-white border rounded-xl p-5 shadow-sm"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-lg">{cat.name}</h4>
                  <p className="text-xs text-muted-foreground">
                    {cat.items.length} item{cat.items.length !== 1 && 's'} •{' '}
                    {new Date(cat.createdAt).toLocaleDateString()}
                  </p>
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
                      className="flex justify-between gap-4 bg-gray-50 rounded-lg p-3"
                    >
                      <div className={''}>
                        <p className="font-medium capitalize">{item.name}</p>
                        <p className="text-xs text-muted-foreground capitalize">
                          {item.description}
                        </p>
                      </div>
                      <p className="font-semibold text-sm">€{item.price}</p>
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
