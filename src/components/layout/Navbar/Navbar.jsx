import React, { useEffect, useState } from 'react';
import api from '@/lib/api';
import { navLinks } from './dataCenter';
import { DeskTopNavBar } from './DeskTopNavbar';
import { API } from '@/lib/endpoints';
import { NavMobile } from './NavMobile';
import CategoryOverlay from './CategoryOverlay';
import { NavMobileDropdown } from './NavMobileDropdown';

const Navbar = () => {
  const totalItems = 0;

  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  // Menu categories (dynamic)
  const [categories, setCategories] = useState([]);
  const [catLoading, setCatLoading] = useState(false);
  const [catError, setCatError] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  // Fetch menu categories
  useEffect(() => {
    const fetchCategories = async () => {
      setCatLoading(true);
      setCatError(false);

      try {
        const res = await api.get(`${API.MENU}/categories`);
        const data = res.data?.data || res.data || [];

        if (!Array.isArray(data) || data.length === 0) {
          setCatError(true);
          setCategories([]);
          return;
        }

        setCategories(data);
      } catch (err) {
        console.error('Navbar category fetch failed', err);
        setCatError(true);
        setCategories([]);
      } finally {
        setCatLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const linkData = navLinks(categories);

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto w-[95%] lg:w-[85%] py-4">
        {/* ================= DESKTOP ================= */}
        <DeskTopNavBar
          linkData={linkData}
          setOpenDropdown={setOpenDropdown}
          openDropdown={openDropdown}
          catLoading={catLoading}
          catError={catError}
          setShowUserMenu={setShowUserMenu}
          showUserMenu={showUserMenu}
          totalItems={totalItems}
          onCategorySelect={setActiveCategory}
          categories={categories}
        />

        {activeCategory && (
          <CategoryOverlay
            category={activeCategory}
            onClose={() => setActiveCategory(null)}
          />
        )}

        {/* ================= MOBILE ================= */}
        <NavMobile
          totalItems={totalItems}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          isMobileMenuOpen={isMobileMenuOpen}
        />

        {/* MOBILE DROPDOWN */}
        {isMobileMenuOpen && (
          <NavMobileDropdown
            navLinks={linkData}
            setOpenDropdown={setOpenDropdown}
            openDropdown={openDropdown}
            catLoading={catLoading}
            catError={catError}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
