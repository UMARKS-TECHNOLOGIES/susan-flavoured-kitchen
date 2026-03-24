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
import { useEffect, useState } from 'react';

function SideBar({ logout, navigate, isOpen, setIsOpen }) {
  const [unreadMessages, setUnreadMessages] = useState(0);
  const [pendingCatering, setPendingCatering] = useState(0);

  useEffect(() => {
    // Fetch Messages Count
    const fetchMessages = async () => {
      try {
        const res = await fetch("https://susanfalvoredkitchen-backend-23c5.onrender.com/api/v1/contact?page=1&limit=50");
        const json = await res.json();
        if (json.data && json.data.messages) {
          const unread = json.data.messages.filter(m => !m.read).length;
          setUnreadMessages(unread);
        }
      } catch (err) {
        console.error("Failed to fetch messages badge count", err);
      }
    };

    // Fetch Catering Count
    const fetchCatering = async () => {
      try {
        const res = await fetch("https://susanfalvoredkitchen-backend-oz62.onrender.com/api/v1/catering/admin/catering/requests");
        const json = await res.json();
        if (Array.isArray(json.data)) {
          const pending = json.data.filter(r => r.status === 'pending').length;
          setPendingCatering(pending);
        }
      } catch (err) {
        console.error("Failed to fetch catering badge count", err);
      }
    };

    fetchMessages();
    fetchCatering();
    
    // Refresh periodically
    const interval = setInterval(() => {
      fetchMessages();
      fetchCatering();
    }, 60000); 
    
    return () => clearInterval(interval);
  }, []);

  const links = [
    { to: '/admin', label: 'Dashboard', Icon: LayoutDashboard },
    { to: 'orders', label: 'Orders', Icon: ShoppingBag },
    { to: 'payments', label: 'Payments', Icon: CreditCard },
    { to: 'users', label: 'Users', Icon: Users },
    { to: 'products', label: 'Product-Management', Icon: Utensils },
    { to: 'categories', label: 'Category-Management', Icon: BiCategoryAlt },
    { to: 'contacts', label: 'Message', Icon: MessageCircle, badge: unreadMessages },
    { to: 'catering-request', label: 'Catering', Icon: GitPullRequestDraft, badge: pendingCatering }
  ];

  return (
    <>
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r px-4 py-4 transform transition-transform duration-300 ease-in-out z-[60] flex flex-col
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 md:static md:flex`}
      >
        <div className="flex items-center gap-3 mb-4 px-2 shrink-0">
          <img src={Logo} alt="Logo" className="w-9 h-9 rounded-full object-cover border-2 border-orange-100" />
          <h1 className="text-xl font-bold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
            Admin Panel
          </h1>
        </div>

        <nav className="space-y-[6px] flex-1 overflow-y-auto pr-1 pb-2">
          {links.map(v => (
            <NavLink
              key={v.to}
              to={v.to}
              end={v.to === '/admin'}
              className={({ isActive }) =>
                `flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-bold transition-all ${
                  isActive
                    ? 'bg-orange-600 text-white shadow-md shadow-orange-500/20'
                    : 'text-gray-600 hover:bg-gray-50'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              <div className="flex items-center gap-3">
                <v.Icon size={18} /> {v.label}
              </div>
              {v.badge > 0 && (
                <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full font-black">
                  {v.badge}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="shrink-0 mt-2 pt-2 border-t border-gray-100">
          <button
            onClick={() => {
              logout();
              navigate('/login');
            }}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-red-500 bg-red-50 hover:bg-red-100 transition-all shadow-sm"
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
