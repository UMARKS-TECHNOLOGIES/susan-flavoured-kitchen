import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/Logo.jpeg';
import { IoCart, IoPerson } from 'react-icons/io5';
import { MdClose, MdMenu } from 'react-icons/md';
import { useAuth } from '@/store/useAuth';

export function NavMobile({
  user,
  totalItems,
  setIsMobileMenuOpen,
  isMobileMenuOpen,
}) {
  const { logout } = useAuth();
  const [profileDropdown, setProfileDropdown] = useState(false);

  return (
    <div className="flex lg:hidden justify-between items-center px-2">
      <Link to="/" className="shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
        <img src={Logo} alt="Logo" className="w-10 h-10 rounded-full object-cover" />
      </Link>

      <div className="flex items-center gap-4">
        {/* Cart */}
        <Link to="/cart" className="relative" onClick={() => setIsMobileMenuOpen(false)}>
          <IoCart className="text-2xl text-gray-700" />
          {totalItems > 0 && (
            <span className="bg-orange-600 w-4 h-4 text-[10px] absolute -top-1 -right-1 text-white rounded-full flex items-center justify-center pointer-events-none">
              {totalItems > 99 ? '99+' : totalItems}
            </span>
          )}
        </Link>

        {/* Profile Dropdown */}
        <div className="relative pt-1 flex items-center">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setProfileDropdown(!profileDropdown)}
                className="hover:text-orange-600 transition-colors flex items-center outline-none"
              >
                <IoPerson className="text-2xl text-gray-700" />
              </button>

              {profileDropdown && (
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
                    onClick={() => {
                      setProfileDropdown(false);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    Dashboard
                  </Link>

                  <button
                    onClick={() => {
                      logout();
                      setProfileDropdown(false);
                      setIsMobileMenuOpen(false);
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
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <IoPerson className="text-2xl text-gray-700" />
            </Link>
          )}
        </div>

        {/* Hamburger Menu */}
        <button 
          onClick={() => setIsMobileMenuOpen(v => !v)}
          className="p-1 text-gray-700 hover:text-orange-600 transition-colors"
        >
          {isMobileMenuOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
        </button>
      </div>
    </div>
  );
}
