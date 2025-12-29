import React from 'react';
import { Link } from 'react-router-dom';

export default function UserMenu({ user, logout, setShowUserMenu }) {
  return (
    <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-100">
      <div className="px-4 py-2 text-sm text-gray-700">
        {user.name || user.email}
      </div>
      {user.role === 'admin' && (
        <Link
          to="/admin"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
          onClick={() => setShowUserMenu(false)}
        >
          Admin Dashboard
        </Link>
      )}
      <button
        onClick={() => {
          // B;
          logout();
          setShowUserMenu(false);
        }}
        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
      >
        Logout
      </button>
    </div>
  );
}
