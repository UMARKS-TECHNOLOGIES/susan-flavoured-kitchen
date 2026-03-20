import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineSearch } from 'react-icons/md';
import { BiCart } from 'react-icons/bi';
import { IoPerson } from 'react-icons/io5';
import { useAuth } from '@/store/useAuth';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export function NavRightIcon({
  categories,
  totalItems,
  setShowUserMenu,
  showUserMenu,
}) {
  const { user, logout } = useAuth();
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();

    if (!search.trim()) return;

    navigate('/search', {
      state: {
        query: search,
        categories,
      },
    });

    setSearch('');
  }

  return (
    <div className="flex items-center space-x-4">
      {/* SEARCH */}
      <form onSubmit={handleSearch} className="relative">
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search food..."
          className="border rounded-full pl-4 pr-10 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2"
        >
          <MdOutlineSearch className="text-xl text-gray-500" />
        </button>
      </form>

      {/* USER */}
      <div className="relative pt-1 flex items-center">
        {user ? (
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="hover:text-orange-600 transition-colors flex items-center outline-none"
            >
              <IoPerson className="text-2xl" />
            </button>

            {showUserMenu && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-3 z-60 animate-in fade-in zoom-in duration-200">
                <div className="px-4 pb-2 border-b border-gray-50 mb-2">
                  <p className="text-[10px] text-gray-400 uppercase tracking-tighter">Welcome,</p>
                  <p className="text-sm font-bold text-gray-800 truncate">
                    {user.fullName || user.email?.split('@')[0]}
                  </p>
                </div>

                <Link
                  to={user.role === 'admin' ? '/admin' : '/dashboard'}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                  onClick={() => setShowUserMenu(false)}
                >
                  Dashboard
                </Link>

                <button
                  onClick={() => {
                    logout();
                    setShowUserMenu(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors mt-1"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/login"
            className="hover:text-orange-600 transition-colors flex items-center"
          >
            <IoPerson className="text-2xl" />
          </Link>
        )}
      </div>

      {/* CART */}
      <div className="relative">
        <Link to="/cart">
          <BiCart className="text-2xl" />
        </Link>

        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {totalItems > 99 ? '99+' : totalItems}
          </span>
        )}
      </div>
    </div>
  );
}
