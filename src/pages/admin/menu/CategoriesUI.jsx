import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import api from '@/lib/api';
import { API } from '@/lib/endpoints';

function CategoriesUI({
  name,
  setName,
  createCategory,
  categories,
  deleteCategory,
  setCategories
}) {
  const [openCategory, setOpenCategory] = useState(null);

  // Image upload state for category creation
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageError, setImageError] = useState('');

  // Per-category image edit state
  const [editingImages, setEditingImages] = useState({});

  const createCategoryWithImage = async () => {
    if (!name) return;
    if (imageError) return;

    await createCategory(imageFile);

    setImageFile(null);
    if (imagePreview) {
      URL.revokeObjectURL(imagePreview);
      setImagePreview(null);
    }
    setImageError('');
  };

  // cleanup preview URL when imageFile changes or on unmount
  useEffect(() => {
    return () => {
      if (imagePreview) URL.revokeObjectURL(imagePreview);
    };
  }, [imagePreview]);
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
        <div className="flex gap-3 items-center">
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="e.g. Breakfast, Drinks"
            className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black/10"
          />

          {/* Image input + preview */}
          <div className="flex items-center gap-2">
            <label className="cursor-pointer inline-flex items-center px-3 py-2 border rounded-lg bg-white">
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp"
                className="hidden"
                onChange={e => {
                  const file = e.target.files && e.target.files[0];
                  if (!file) return;
                  // basic validation
                  const allowed = ['image/jpeg', 'image/png', 'image/webp'];
                  if (!allowed.includes(file.type)) {
                    setImageError('Unsupported file type');
                    setImageFile(null);
                    if (imagePreview) {
                      URL.revokeObjectURL(imagePreview);
                      setImagePreview(null);
                    }
                    return;
                  }
                  const maxSize = 4 * 1024 * 1024; // 4MB
                  if (file.size > maxSize) {
                    setImageError('Image must be <= 4MB');
                    setImageFile(null);
                    if (imagePreview) {
                      URL.revokeObjectURL(imagePreview);
                      setImagePreview(null);
                    }
                    return;
                  }
                  setImageError('');
                  setImageFile(file);
                  if (imagePreview) URL.revokeObjectURL(imagePreview);
                  setImagePreview(URL.createObjectURL(file));
                }}
              />
              Upload Image
            </label>
            {imagePreview ? (
              <div className="w-12 h-12 rounded overflow-hidden border">
                <img
                  src={imagePreview}
                  alt="preview"
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="w-12 h-12 rounded bg-gray-100 border flex items-center justify-center text-xs text-gray-500">
                No Image
              </div>
            )}
            <Button
              onClick={() => createCategoryWithImage()}
              disabled={!name || !!imageError}
            >
              Add
            </Button>
          </div>
        </div>
        {imageError && (
          <p className="text-xs text-red-500 mt-2">{imageError}</p>
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
              className="bg-white border rounded-xl p-5 shadow-sm"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* thumbnail */}
                  {cat.imageUri ? (
                    <img
                      src={API.BASEURL + cat.imageUri}
                      alt={cat.name}
                      className="w-12 h-12 rounded object-cover border"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded bg-gray-100 border flex items-center justify-center text-xs text-gray-500">
                      No Image
                    </div>
                  )}

                  <div>
                    <h4 className="font-semibold text-lg">{cat.name}</h4>
                    <p className="text-xs text-muted-foreground">
                      {cat.items.length} item{cat.items.length !== 1 && 's'} •{' '}
                      {new Date(cat.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 items-center">
                  <div className="flex gap-2 items-center">
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

                  {/* Image edit controls */}
                  <div className="flex items-center gap-2">
                    <label className="cursor-pointer inline-flex items-center px-2 py-1 border rounded text-sm bg-white">
                      <input
                        type="file"
                        accept="image/jpeg,image/png,image/webp"
                        className="hidden"
                        onChange={e => {
                          const file = e.target.files && e.target.files[0];
                          if (!file) return;
                          const allowed = [
                            'image/jpeg',
                            'image/png',
                            'image/webp',
                          ];
                          if (!allowed.includes(file.type)) {
                            setEditingImages(prev => ({
                              ...prev,
                              [cat._id]: {
                                ...(prev[cat._id] || {}),
                                error: 'Unsupported file type',
                              },
                            }));
                            return;
                          }
                          const maxSize = 4 * 1024 * 1024;
                          if (file.size > maxSize) {
                            setEditingImages(prev => ({
                              ...prev,
                              [cat._id]: {
                                ...(prev[cat._id] || {}),
                                error: 'Image must be <= 4MB',
                              },
                            }));
                            return;
                          }

                          const preview = URL.createObjectURL(file);
                          setEditingImages(prev => ({
                            ...prev,
                            [cat._id]: { file, preview, error: '' },
                          }));
                        }}
                      />
                      Change Image
                    </label>

                    <button
                      className="text-sm px-2 py-1 border rounded bg-white"
                      onClick={async () => {
                        if (!cat.imageUri) return;
                        if (!confirm('Remove category image?')) return;
                        // call remove handler (imported)
                        try {
                          const { removeCategoryImage } =
                            await import('./handlers');
                          await removeCategoryImage(cat._id, setCategories);
                        } catch (err) {
                          console.error(err);
                        }
                      }}
                    >
                      Remove Image
                    </button>
                  </div>
                </div>

                {/* Image upload preview / actions (shown when file selected) */}
                {editingImages[cat._id] && (
                  <div className="mt-3 flex items-center gap-3">
                    {editingImages[cat._id].preview && (
                      <div className="w-16 h-16 rounded overflow-hidden border">
                        <img
                          src={editingImages[cat._id].preview}
                          alt="preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    <div className="flex gap-2">
                      <button
                        className="px-3 py-1 bg-green-600 text-white rounded"
                        disabled={editingImages[cat._id]?.uploading}
                        onClick={async () => {
                          const entry = editingImages[cat._id];
                          if (!entry || !entry.file) return;
                          setEditingImages(prev => ({
                            ...(prev || {}),
                            [cat._id]: {
                              ...(prev[cat._id] || {}),
                              uploading: true,
                            },
                          }));
                          try {
                            const { updateCategoryImage } =
                              await import('./handlers');
                            await updateCategoryImage(
                              cat._id,
                              entry.file,
                              setCategories
                            );
                            setEditingImages(prev => {
                              const next = { ...(prev || {}) };
                              delete next[cat._id];
                              return next;
                            });
                          } catch (err) {
                            console.error(err);
                            setEditingImages(prev => ({
                              ...(prev || {}),
                              [cat._id]: {
                                ...(prev[cat._id] || {}),
                                uploading: false,
                                error: 'Upload failed',
                              },
                            }));
                          }
                        }}
                      >
                        {editingImages[cat._id]?.uploading
                          ? 'Uploading...'
                          : 'Upload'}
                      </button>

                      <button
                        className="px-3 py-1 bg-gray-200 rounded"
                        onClick={() => {
                          if (
                            editingImages[cat._id] &&
                            editingImages[cat._id].preview
                          ) {
                            URL.revokeObjectURL(editingImages[cat._id].preview);
                          }
                          setEditingImages(prev => {
                            const next = { ...(prev || {}) };
                            delete next[cat._id];
                            return next;
                          });
                        }}
                      >
                        Cancel
                      </button>
                    </div>

                    {editingImages[cat._id] && editingImages[cat._id].error && (
                      <p className="text-xs text-red-500">
                        {editingImages[cat._id].error}
                      </p>
                    )}
                  </div>
                )}
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
                      <p className="font-semibold text-sm">£{item.price}</p>
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
