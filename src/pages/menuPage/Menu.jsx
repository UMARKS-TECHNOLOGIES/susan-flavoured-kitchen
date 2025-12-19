import React, { useState, useEffect } from 'react';
import Navbar from '../../components/layout/Navbar';
import MenuSection from './components/MenuSection';
import MenuSidebar from './components/menuSidebar';
import Footer from '../../components/layout/Footer';
import DrinksSection from './components/DrinksSection';
import { Checkbox } from '@/components/ui/checkbox';
import api from '../../lib/api';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = [
    'All',
    'Soups & Stews',
    'Rice',
    'Snacks & Pastries',
    'Drinks',
  ];

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const res = await api.get('/api/products');
        if (!mounted) return;
        setProducts(res.data.products || []);
      } catch (e) {
        setProducts([]);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => (mounted = false);
  }, []);

  const filterItems = items => {
    return items.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const soupItems = filterItems(
    products.filter(p => p.category === 'Soups & Stews')
  );
  const riceItems = filterItems(products.filter(p => p.category === 'Rice'));
  const snackItems = filterItems(
    products.filter(p => p.category === 'Snacks & Pastries')
  );
  const drinkItems = filterItems(products.filter(p => p.category === 'Drinks'));
  const allItems = filterItems(products);

  const shouldShowSection = (categoryName, items) => {
    return (
      (activeCategory === 'All' || activeCategory === categoryName) &&
      items.length > 0
    );
  };

  return (
    <div className="bg-[#fffcfa] overflow-hidden">
      <Navbar />
      <div className="hidden lg:block mt-32">
        <div
          className="w-full my-4 h-40 bg-center bg-no-repeat bg-cover rounded-lg"
          style={{
            backgroundImage: `url(/api/placeholder/1200/300)`,
          }}
        >
          <div className="w-full h-full bg-black/60 text-center flex items-center justify-center text-white text-5xl font-bold">
            Our Menu
          </div>
        </div>
      </div>

      {/* MOBILE SEARCH AND FILTERS */}
      <div className="px-4 mt-24 mb-6 lg:hidden">
        {/* Search Bar */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Search Meals"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-[65%] px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            onClick={() => setSearchQuery(searchTerm)}
            className="w-[30%] bg-orange-600 text-white px-2 py-2 rounded-lg font-semibold hover:bg-orange-700 whitespace-nowrap flex items-center justify-center"
          >
            Search
          </button>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap gap-4 pb-2">
          {categories.map(category => (
            <div
              key={category}
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setActiveCategory(category)}
            >
              <Checkbox
                id={`mobile-${category}`}
                checked={activeCategory === category}
                onCheckedChange={() => setActiveCategory(category)}
                className="w-5 h-5 border-gray-400 data-[state=checked]:bg-orange-600 data-[state=checked]:border-orange-600"
              />
              <span
                className={`text-base font-medium ${
                  activeCategory === category
                    ? 'text-orange-600'
                    : 'text-gray-700'
                }`}
              >
                {category}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* FIRST THREE SECTIONS WITH SIDEBAR */}
      <section className="px-6 lg:px-12 mt-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">
          {/* Sidebar */}
          <MenuSidebar
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          {/* Food Sections */}
          <div className="space-y-8 lg:space-y-16">
            {shouldShowSection('Soups & Stews', soupItems) && (
              <>
                <MenuSection title="Soups & Stews" showMore items={soupItems} />
                <hr className="border-gray-300" />
              </>
            )}

            {shouldShowSection('Rice', riceItems) && (
              <>
                <MenuSection title="Rice" showMore items={riceItems} />
                <hr className="border-gray-300" />
              </>
            )}

            {shouldShowSection('Snacks & Pastries', snackItems) && (
              <MenuSection
                title="Snacks & Pastries"
                showMore
                items={snackItems}
              />
            )}

            {/* Show message if nothing found in main sections */}
            {activeCategory !== 'Drinks' &&
              soupItems.length === 0 &&
              riceItems.length === 0 &&
              snackItems.length === 0 &&
              (activeCategory === 'All' || activeCategory !== 'Drinks') && (
                <div className="text-center py-10 text-gray-500">
                  {searchQuery
                    ? 'No meals found matching your search.'
                    : 'No items available.'}
                </div>
              )}
          </div>
        </div>
      </section>

      {shouldShowSection('Drinks', drinkItems) && (
        <DrinksSection title="Drinks" items={drinkItems} />
      )}

      <div className="hidden lg:block">
        <Footer />
      </div>
    </div>
  );
};

export default Menu;
