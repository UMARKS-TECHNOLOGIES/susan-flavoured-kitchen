import { useEffect, useState } from 'react';
import CategoriesUI from './CategoriesUI';
import { getAllCategories, createCategory, deleteCategory } from './handlers';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getAllCategories();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  // Handler wrappers to pass to UI
  const handleCreate = async () => {
    await createCategory(name, setName, setCategories);
  };

  const handleDelete = async id => {
    await deleteCategory(id, setCategories);
  };

  return (
    <CategoriesUI
      name={name}
      setName={setName}
      createCategory={handleCreate}
      categories={categories}
      deleteCategory={handleDelete}
    />
  );
}
