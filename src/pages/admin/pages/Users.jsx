import { useEffect, useState } from 'react';
import api from '@/lib/api';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('/admin/users').then(res => setUsers(res.data.data));
  }, []);

  const toggleBlock = async user => {
    await api.patch(`/admin/users/${user.id}`, { blocked: !user.blocked });
    setUsers(u =>
      u.map(x => (x.id === user.id ? { ...x, blocked: !x.blocked } : x))
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Users</h2>
      <div className="bg-gray-300 border rounded-xl">
        {users.map(u => (
          <div key={u.id} className="flex justify-between p-4 border-b">
            <p>{u.email}</p>
            <button
              onClick={() => toggleBlock(u)}
              className={`text-sm ${
                u.blocked ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {u.blocked ? 'Unblock' : 'Block'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
