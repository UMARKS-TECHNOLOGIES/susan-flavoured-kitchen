import { BiCategoryAlt } from 'react-icons/bi';
import {
  LayoutDashboard,
  ShoppingBag,
  Utensils,
  CreditCard,
  Users,
  LogOut,
  MessageCircle,
  GitPullRequestDraft 
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

function SideBar({ logout, navigate }) {
  const links = [
    { to: '*', label: 'Dashboard', Icon: LayoutDashboard },
    { to: 'orders', label: 'Orders', Icon: ShoppingBag },
    { to: 'payments', label: 'Payments', Icon: CreditCard },
    { to: 'users', label: 'Users', Icon: Users },
    { to: 'products', label: 'Prdouct-Management', Icon: Utensils },
    { to: 'categories', label: 'Category-Management', Icon: BiCategoryAlt },
    { to: 'contacts', label: 'Message', Icon: MessageCircle},
    { to: 'catering-request', label: 'Catering', Icon: GitPullRequestDraft}
  ];

  return (
    <aside className="w-64 bg-white border-r px-4 py-6">
      <h1 className="text-xl font-bold text-orange-600 mb-8">Admin Panel</h1>
      <nav className="space-y-2">
        {links.map(v => (
          <NavLink
            key={v.to}
            to={v.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium capitalize ${
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
  );
}

export default SideBar;
