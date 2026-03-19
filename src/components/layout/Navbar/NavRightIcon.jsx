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
      <div className="relative pt-1">
        <Link 
          to={user ? (user.role === 'admin' ? '/admin' : '/dashboard') : '/login'} 
          className="hover:text-orange-600 transition-colors flex items-center"
        >
          <IoPerson className="text-2xl" />
        </Link>
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
