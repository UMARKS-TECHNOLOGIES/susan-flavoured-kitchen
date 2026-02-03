import { reportError } from '@/lib/errorHandler';
import toast from 'react-hot-toast';
import CategoryService from '../services/category.service';

/* ================= FETCH ================= */

export async function getAllCategories() {
  try {
    const res = await CategoryService.getAll();

    if (res.status !== 200)
      throw new Error(res.data.error || 'Unable to fetch categories');

    return res.data.data || [];
  } catch (err) {
    reportError(err.message);
    return [];
  }
}

/* ================= CREATE ================= */

export async function createCategory(
  name,
  imageFile,
  setName,
  setCategories
) {
  if (!name) return;

  try {
    let payload;

    if (imageFile) {
      payload = new FormData();
      payload.append('name', name);
      payload.append('image', imageFile); 
    } else {
      payload = { name };
    }

    const res = await CategoryService.create(payload);

    if (res.status !== 201)
      throw new Error(res.data.error || 'Unable to create category');

    setName('');
    const categories = await getAllCategories();
    setCategories(categories);

    toast.success('Category created');
  } catch (err) {
    reportError(err.message);
    toast.error(err.message);
  }
}

/* ================= UPDATE IMAGE ================= */

export async function updateCategoryImage(id, imageFile, setCategories) {
  if (!id || !imageFile) return;

  try {
    const formData = new FormData();
    formData.append('image', imageFile); 

    const res = await CategoryService.update(id, formData);

    if (!(res.status >= 200 && res.status < 300))
      throw new Error(res.data.error || 'Unable to upload image');

    const categories = await getAllCategories();
    setCategories(categories);

    toast.success('Category image updated');
  } catch (err) {
    reportError(err.message);
    toast.error(err.message);
  }
}

/* ================= REMOVE IMAGE ================= */

export async function removeCategoryImage(id, setCategories) {
  if (!id) return;

  try {
    const res = await CategoryService.update(id, { imageUri: '' });

    if (!(res.status >= 200 && res.status < 300))
      throw new Error(res.data.error || 'Unable to remove image');

    const categories = await getAllCategories();
    setCategories(categories);

    toast.success('Category image removed');
  } catch (err) {
    reportError(err.message);
    toast.error(err.message);
  }
}

/* ================= DELETE ================= */

export const deleteCategory = async (id, setCategories) => {
  try {
    await CategoryService.remove(id);

    const categories = await getAllCategories();
    setCategories(categories);
  } catch (err) {
    reportError(err.message);
  }
};
