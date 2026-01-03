import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import CategoryService from './services/category.service';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');

  const load = async () => {
    const res = await CategoryService.getAll();
    setCategories(res.data.data || []);
  };

  const createCategory = async () => {
    if (!name) return;
    await CategoryService.create({ name });
    setName('');
    load();
  };

  const deleteCategory = async id => {
    await CategoryService.remove(id);
    load();
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Categories</h2>

      <div className="flex gap-2">
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Category name"
          className="border rounded px-3 py-2"
        />
        <Button onClick={createCategory}>Add</Button>
      </div>

      <div className="grid gap-3">
        {categories.map(cat => (
          <div
            key={cat.id}
            className="flex justify-between items-center bg-white border p-4 rounded-lg"
          >
            <span>{cat.name}</span>
            <Button
              variant="destructive"
              onClick={() => deleteCategory(cat.id)}
            >
              Delete
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
