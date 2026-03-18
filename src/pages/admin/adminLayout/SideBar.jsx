import { useState } from 'react';
import { BiCategoryAlt } from 'react-icons/bi';
import {
  LayoutDashboard,
  ShoppingBag,
  Utensils,
  CreditCard,
  Users,
  LogOut,
  MessageCircle,
  GitPullRequestDraft,
  Menu,
  X
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

function SideBar({ logout, navigate }) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: '/admin', label: 'Dashboard', Icon: LayoutDashboard },
    { to: 'orders', label: 'Orders', Icon: ShoppingBag },
    { to: 'payments', label: 'Payments', Icon: CreditCard },
    { to: 'users', label: 'Users', Icon: Users },
    { to: 'products', label: 'Product-Management', Icon: Utensils },
    { to: 'categories', label: 'Category-Management', Icon: BiCategoryAlt },
    { to: 'contacts', label: 'Message', Icon: MessageCircle },
    { to: 'catering-request', label: 'Catering', Icon: GitPullRequestDraft }
  ];

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden fixed top-4 right-4 z-50 p-2 rounded-md bg-white shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r px-4 py-6 transform transition-transform duration-300 ease-in-out z-40
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 md:static md:block`}
      >
        <h1 className="text-xl font-bold text-orange-600 mb-8">Admin Panel</h1>
        <nav className="space-y-2">
          {links.map(v => (
            <NavLink
              key={v.to}
              to={v.to}
              end={v.to === '/admin'}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium capitalize ${
                  isActive
                    ? 'bg-orange-100 text-orange-600'
                    : 'text-gray-700 hover:bg-gray-100'
                }`
              }
              onClick={() => setIsOpen(false)} // close sidebar on mobile after click
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

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-25 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default SideBar;
