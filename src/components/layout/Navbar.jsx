import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/newlogo.webp';
import {
  MdOutlineSearch,
  MdKeyboardArrowDown,
  MdMenu,
  MdClose,
} from 'react-icons/md';
import { BsPerson } from 'react-icons/bs';
import { GiShoppingCart } from 'react-icons/gi';

import api from '@/lib/api';
import { useAuth } from '../../store/useAuth';

const Navbar = () => {
  const totalItems = 0;
  const { user, logout } = useAuth();

  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  // Menu categories (dynamic)
  const [categories, setCategories] = useState([]);
  const [catLoading, setCatLoading] = useState(false);
  const [catError, setCatError] = useState(false);

  // Fetch menu categories
  useEffect(() => {
    const fetchCategories = async () => {
      setCatLoading(true);
      setCatError(false);

      try {
        const res = await api.get('/api/v1/menu/category');
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

  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'Menu',
      href: '/menu',
      dropdown: ['All', ...categories],
    },
    { name: 'Event Catering', href: '/event' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact-us' },
  ];

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto w-[95%] lg:w-[85%] py-4">
        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-12" />
          </Link>

          {/* Navigation */}
          <div className="flex items-center">
            {navLinks.map(link =>
              link.dropdown ? (
                <div key={link.name} className="relative">
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === link.name ? null : link.name
                      )
                    }
                    className={`px-4 py-2 font-medium flex items-center gap-1 hover:text-orange-600 ${
                      openDropdown === link.name
                        ? 'text-orange-600'
                        : 'text-[#343333]'
                    }`}
                  >
                    {link.name}
                    <MdKeyboardArrowDown
                      className={`transition-transform ${
                        openDropdown === link.name ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {openDropdown === link.name && (
                    <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-md shadow-lg py-2 border border-gray-100 z-50">
                      {catLoading && (
                        <div className="px-4 py-2 text-sm text-gray-400">
                          Loading menu…
                        </div>
                      )}

                      {!catLoading && catError && (
                        <div className="px-4 py-2 text-sm text-red-500">
                          Menu unavailable
                        </div>
                      )}

                      {!catLoading &&
                        !catError &&
                        link.dropdown.map(category => (
                          <NavLink
                            key={category}
                            to={`/menu?category=${encodeURIComponent(
                              category
                            )}`}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                          >
                            {category}
                          </NavLink>
                        ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={link.name}
                  to={link.href}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-orange-400 mx-4 font-medium'
                      : 'text-[#343333] hover:text-[#00004d] px-5 py-2 font-medium'
                  }
                >
                  {link.name}
                </NavLink>
              )
            )}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <Link to="/menu">
              <MdOutlineSearch className="text-2xl" />
            </Link>

            {/* User */}
            <div className="relative">
              {user ? (
                <>
                  <button onClick={() => setShowUserMenu(v => !v)}>
                    <BsPerson className="text-2xl" />
                  </button>

                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-2 border border-gray-100">
                      <div className="px-4 py-2 text-sm text-gray-700">
                        {user.name || user.email}
                      </div>

                      {user.role === 'admin' && (
                        <Link
                          to="/admin"
                          className="block px-4 py-2 text-sm hover:bg-orange-50"
                          onClick={() => setShowUserMenu(false)}
                        >
                          Admin Dashboard
                        </Link>
                      )}

                      <button
                        onClick={() => {
                          logout();
                          setShowUserMenu(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-orange-50"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <Link to="/login">
                  <BsPerson className="text-2xl" />
                </Link>
              )}
            </div>

            {/* Cart */}
            <div className="relative">
              <Link to="/cart">
                <GiShoppingCart className="text-2xl" />
              </Link>
              {totalItems > 0 && (
                <span className="bg-orange-600 w-5 h-5 text-xs flex items-center justify-center absolute -top-2 -right-2 text-white rounded-full">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="flex lg:hidden justify-between items-center">
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-10" />
          </Link>

          <div className="flex items-center gap-4">
            <Link to="/cart" className="relative">
              <GiShoppingCart className="text-2xl" />
              {totalItems > 0 && (
                <span className="bg-orange-600 w-4 h-4 text-[10px] absolute -top-1 -right-1 text-white rounded-full flex items-center justify-center">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </Link>

            <Link to="/login">
              <BsPerson className="text-2xl" />
            </Link>

            <button onClick={() => setIsMobileMenuOpen(v => !v)}>
              {isMobileMenuOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
            </button>
          </div>
        </div>

        {/* MOBILE DROPDOWN */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t py-4 px-6 flex flex-col gap-4 h-screen overflow-y-auto">
            {navLinks.map(link => (
              <div key={link.name} className="border-b pb-2">
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === link.name ? null : link.name
                        )
                      }
                      className="flex justify-between w-full text-lg font-medium"
                    >
                      {link.name}
                      <MdKeyboardArrowDown
                        className={`transition-transform ${
                          openDropdown === link.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {openDropdown === link.name && (
                      <div className="pl-4 mt-2 flex flex-col gap-2">
                        {catLoading && (
                          <span className="text-gray-400 text-sm">
                            Loading menu…
                          </span>
                        )}

                        {!catLoading && catError && (
                          <span className="text-red-500 text-sm">
                            Menu unavailable
                          </span>
                        )}

                        {!catLoading &&
                          !catError &&
                          link.dropdown.map(category => (
                            <Link
                              key={category}
                              to={`/menu?category=${encodeURIComponent(
                                category
                              )}`}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="text-gray-600 hover:text-orange-600"
                            >
                              {category}
                            </Link>
                          ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
