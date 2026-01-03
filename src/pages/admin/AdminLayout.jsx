import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  ShoppingBag,
  Utensils,
  CreditCard,
  Users,
  LogOut,
} from 'lucide-react';
import { useAuth } from '@/store/useAuth';

const links = [
  { to: '*', label: 'Dashboard', Icon: LayoutDashboard },
  { to: 'orders', label: 'Orders', Icon: ShoppingBag },
  { to: 'products', label: 'Menu', Icon: Utensils },
  { to: 'payments', label: 'Payments', Icon: CreditCard },
  { to: 'users', label: 'Users', Icon: Users },
];

export default function AdminLayout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-64 bg-white border-r px-4 py-6">
        <h1 className="text-xl font-bold text-orange-600 mb-8">Admin Panel</h1>
        <nav className="space-y-2">
          {links.map(v => (
            <NavLink
              key={v.to}
              to={v.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium ${
                  isActive
                    ? 'bg-orange-100 text-orange-600'
                    : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <v.Icon size={18} /> {v.label}
            </NavLink>
          ))}
        </nav>
        <button
          onClick={() => {
            logout();
            navigate('/login');
          }}
          className="mt-10 flex items-center cursor-pointer gap-2 text-sm text-red-600"
        >
          <LogOut size={16} /> Logout
        </button>
      </aside>

      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
