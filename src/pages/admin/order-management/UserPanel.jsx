import api from '@/lib/api';
import { API } from '@/lib/endpoints';
import { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';

function UserSidePanel({ userId, onClose }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!userId) return;
    setLoading(true);
    api
      .get(`${API.ADMIN}/users/${userId}`)
      .then(res => setUser(res.data.data))
      .finally(() => setLoading(false));
  }, [userId]);

  if (!userId) {
    return null;
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/40 z-40" onClick={onClose}></div>
      <div className="fixed top-0 right-0 h-full w-full md:w-1/3 bg-white shadow-xl z-50 p-4 sm:p-6 overflow-y-auto transition-transform duration-300 transform translate-x-0">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">User Info</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-xl font-bold"
          >
            <FaTimes />
          </button>
        </div>

        {loading ? (
          <p>Loading user info...</p>
        ) : user ? (
          <div className="space-y-2">
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>Phone:</strong> {user.phone || 'N/A'}
            </p>
            <p>
              <strong>Registered:</strong>{' '}
              {new Date(user.createdAt).toLocaleString()}
            </p>
            {/* Add more fields as needed */}
          </div>
        ) : (
          <p>User not found.</p>
        )}
      </div>
    </>
  );
}

export default UserSidePanel;
