import { useEffect, useState } from 'react';
import ProductsUI from './ProductsUI';
import ProductService from '../services/product.service';
import CategoryService from '../services/category.service';
import { reportSuccess } from '@/lib/errorHandler';

export default function Products() {
  const [menu, setMenu] = useState([]); // categories + items
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');

  const [form, setForm] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    image: null,
  });

  const load = async () => {
    const [menuRes, catRes] = await Promise.all([
      ProductService.getGrouped(),
      CategoryService.getAll(),
    ]);

    setMenu(menuRes.data.data || []);
    setCategories(catRes.data.data || []);
  };

  useEffect(() => {
    load();
  }, []);

  const createProduct = async () => {
    if (!form.name || !form.price || !form.category || !form.image) {
      setError('Incomplete fields');
      return;
    }

    const fd = new FormData();
    fd.append('name', form.name);
    fd.append('price', form.price);
    fd.append('description', form.description);
    fd.append('category', form.category);
    fd.append('image', form.image);

    try {
      setLoading(true);
      setProgress(0);
      setError('');

      const res = await ProductService.create(fd, e => {
        const percent = Math.round((e.loaded * 100) / e.total);
        setProgress(percent);
      });

      if (res.status == 201) reportSuccess('uploaded successfully');

      setForm({
        name: '',
        price: '',
        description: '',
        category: '',
        image: null,
      });
      setPreview(null);
      load();
    } catch (err) {
      setError(err.response?.data?.message || 'Upload failed');
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async id => {
    await ProductService.remove(id);
    load();
  };
  const handleImageChange = file => {
    setForm(prev => ({ ...prev, image: file }));
    setPreview(URL.createObjectURL(file));
  };

  //check image size
  // if (form.image.size > 2 * 1024 * 1024) {
  //   setError('Image too large, max 2MB');
  //   return;
  // }

  return (
    <ProductsUI
      form={form}
      setForm={setForm}
      preview={preview}
      progress={progress}
      loading={loading}
      error={error}
      categories={categories}
      menu={menu}
      createProduct={createProduct}
      deleteProduct={deleteProduct}
      onImageChange={handleImageChange}
    />
  );
}
