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
  X // Added this
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Logo from '@/assets/Logo.jpeg';

function SideBar({ logout, navigate, isOpen, setIsOpen }) {
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
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r px-4 py-8 transform transition-transform duration-300 ease-in-out z-[60]
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 md:static md:block`}
      >
        <div className="flex items-center gap-3 mb-10 px-2">
          <img src={Logo} alt="Logo" className="w-10 h-10 rounded-full object-cover border-2 border-orange-100" />
          <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            Admin Panel
          </h1>
        </div>

        <nav className="space-y-2">
          {links.map(v => (
            <NavLink
              key={v.to}
              to={v.to}
              end={v.to === '/admin'}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                  isActive
                    ? 'bg-orange-600 text-white shadow-lg shadow-orange-500/20'
                    : 'text-gray-500 hover:bg-gray-50'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              <v.Icon size={18} /> {v.label}
            </NavLink>
          ))}
        </nav>

        <div className="absolute bottom-10 left-4 right-4">
          <button
            onClick={() => {
              logout();
              navigate('/login');
            }}
            className="w-full flex items-center cursor-pointer gap-3 px-4 py-3 rounded-xl text-sm font-bold text-red-500 bg-red-50 hover:bg-red-100 transition-all shadow-sm"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[55] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default SideBar;
