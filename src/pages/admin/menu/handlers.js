import { reportError } from '@/lib/errorHandler';
import CategoryService from '../services/category.service';

// Fetch all categories
export async function getAllCategories() {
  try {
    const res = await CategoryService.getAll();
    if (res.status !== 200)
      throw new Error(res.data.error || 'Unable to fetch categories');
    console.log(res.data);
    return res.data || [];
  } catch (err) {
    reportError(err.message);
    console.error('getAllCategories error:', err.message);
    return [];
  }
}

// Create a new category
export async function createCategory(name, setName, setCategories) {
  if (!name) return;

  try {
    const res = await CategoryService.create({ name });
    if (res.status !== 201)
      throw new Error(res.data.error || 'Unable to create category');

    setName('');
    const categories = await getAllCategories();
    setCategories(categories);
  } catch (err) {
    reportError(err.message);
    console.error('createCategory error:', err.message);
  }
}

// Delete a category
export const deleteCategory = async (id, setCategories) => {
  try {
    await CategoryService.remove(id);
    const categories = await getAllCategories(); // fetch updated list
    setCategories(categories);
  } catch (err) {
    reportError(err.message);
    console.error('deleteCategory error:', err.message);
  }
};
