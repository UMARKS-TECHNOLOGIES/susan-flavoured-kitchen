import { Outlet, useNavigate } from 'react-router-dom';

import { useAuth } from '@/store/useAuth';
import SideBar from './SideBar';

export default function AdminLayout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gray-50">
      <SideBar logout={logout} navigate={navigate} />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
