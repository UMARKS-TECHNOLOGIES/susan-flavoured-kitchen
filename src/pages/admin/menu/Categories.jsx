import { useEffect, useState } from 'react';
import CategoriesUI from './CategoriesUI';
import { getAllCategories, createCategory, deleteCategory } from './handlers';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getAllCategories();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  const onImageChange = file => {
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // Handler wrappers to pass to UI
  const handleCreate = async () => {
    await createCategory(name, setName, image, setImage, setPreview, setCategories);
  };

  const handleDelete = async id => {
    await deleteCategory(id, setCategories);
  };

  return (
    <CategoriesUI
      name={name}
      setName={setName}
      preview={preview}
      onImageChange={onImageChange}
      createCategory={handleCreate}
      categories={categories}
      deleteCategory={handleDelete}
    />
  );
}
