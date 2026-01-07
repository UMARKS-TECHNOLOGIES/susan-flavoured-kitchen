import { useAuth } from '@/store/useAuth';
import { BiCart } from 'react-icons/bi';
import { IoPerson } from 'react-icons/io5';
import { MdOutlineSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';

export function NavRightIcon({ setShowUserMenu, showUserMenu, totalItems }) {
  const { user, logout } = useAuth();
  return (
    <div className="flex items-center space-x-4">
      <Link to="/menu">
        <MdOutlineSearch className="text-2xl" />
      </Link>

      {/* User */}
      <div className="relative">
        {user ? (
          <>
            <button onClick={() => setShowUserMenu(v => !v)}>
              <IoPerson className="text-2xl" />
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
            <IoPerson className="text-2xl" />
          </Link>
        )}
      </div>

      {/* Cart */}
      <div className="relative">
        <Link to="/cart">
          <BiCart className="text-2xl" />
        </Link>
        {totalItems > 0 && (
          <span className="bg-orange-600 w-5 h-5 text-xs flex items-center justify-center absolute -top-2 -right-2 text-white rounded-full">
            {totalItems > 99 ? '99+' : totalItems}
          </span>
        )}
      </div>
    </div>
  );
}
