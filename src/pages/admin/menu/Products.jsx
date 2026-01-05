import { useEffect, useState } from 'react';
import ProductsUI from './ProductsUI';
import ProductService from '../services/product.service';
import CategoryService from '../services/category.service';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [form, setForm] = useState({
    name: '',
    price: '',
    category: '',
    image: null,
    available: true,
  });

  const load = async () => {
    const [pRes, cRes] = await Promise.all([
      ProductService.getAll(),
      CategoryService.getAll(),
    ]);

    console.log({ P: pRes.data, C: cRes.data });

    setProducts(pRes.data.data || []);
    setCategories(cRes.data.data || []);
  };

  useEffect(() => {
    load();
  }, []);
  const [loading, setLoading] = useState(false);

  const createProduct = async () => {
    if (!form.image || !form.category) return;

    const fd = new FormData();
    fd.append('name', form.name);
    fd.append('price', form.price);
    fd.append('category', form.category);
    fd.append('image', form.image);
    fd.append('available', String(form.available));

    setLoading(true);
    await ProductService.create(fd);
    console.log('created product', fd);
    setLoading(false);

    setForm({
      name: '',
      price: '',
      category: '',
      image: null,
      available: true,
    });

    load();
  };

  const toggleStock = async product => {
    await ProductService.update(product.id, {
      inStock: !product.inStock,
    });
    load();
  };

  const deleteProduct = async id => {
    await ProductService.remove(id);
    load();
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <ProductsUI
      form={form}
      setForm={setForm}
      categories={categories}
      createProduct={createProduct}
      loading={loading}
      products={products}
      toggleStock={toggleStock}
      deleteProduct={deleteProduct}
    />
  );
}
