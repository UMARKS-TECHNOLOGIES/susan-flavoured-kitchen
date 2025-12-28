import React, { useState, useEffect, useMemo } from 'react';
import api from '../../lib/api';
import MenuUI from '@/componentUIs/MenuUI';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch categories
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await api.get('/api/v1/menu/category');
        setCategories(res.data?.data || res.data || []);
      } catch (e) {
        console.error(e);
        setCategories([]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // Fetch menu items
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await api.get('/api/v1/menu');
        setMenuItems(res.data?.data || []);
      } catch (e) {
        console.error(e);
        setMenuItems([]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // 🔥 Group items by category dynamically
  const groupedMenu = useMemo(() => {
    const filtered = menuItems.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return filtered.reduce((acc, item) => {
      if (!acc[item.category]) acc[item.category] = [];
      acc[item.category].push(item);
      return acc;
    }, {});
  }, [menuItems, searchQuery]);

  return (
    <MenuUI
      loading={loading}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      setSearchQuery={setSearchQuery}
      categories={categories}
      activeCategory={activeCategory}
      setActiveCategory={setActiveCategory}
      groupedMenu={groupedMenu}
      searchQuery={searchQuery}
    />
  );
};

export default Menu;
