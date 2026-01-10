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
      <div className="relative">
        {user ? (
          <div>
            <button onClick={() => setShowUserMenu(v => !v)}>
              <IoPerson className="text-2xl" />
            </button>

            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-44 bg-white rounded-md shadow-lg py-2 border">
                <div
                  onClick={
                    user.role === 'user'
                      ? navigate('/dashboard')
                      : navigate('/admin')
                  }
                  className="cursor-pointer px-4 w-full hover:text-orange-500 py-2 text-sm flex items-center text-gray-700"
                >
                  <p>DashBoard</p> <FaArrowRight />
                </div>

                {user.role === 'admin' && (
                  <Link
                    to="/admin"
                    className="block px-4 py-2 text-sm hover:bg-orange-50"
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
          </div>
        ) : (
          <Link to="/login">
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
