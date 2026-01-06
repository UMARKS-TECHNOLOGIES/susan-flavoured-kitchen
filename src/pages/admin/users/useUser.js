import { useEffect, useState } from 'react';
import UserService from '../services/user.service';

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    UserService.getAll()
      .then(res => setUsers(res.data.data))
      .finally(() => setLoading(false));
  }, []);

  return { users, loading };
}
