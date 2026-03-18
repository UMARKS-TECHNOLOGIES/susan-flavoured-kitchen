import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import {
  LayoutDashboard,
  ShoppingBag,
  ShoppingCart,
  CreditCard,
  User,
  MapPin,
  LogOut,
  Menu,
  X
} from 'lucide-react';

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-[#fffcfa]">
      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden fixed top-24 right-4 z-40 p-2 rounded-md bg-gray-900 text-white shadow-lg hover:bg-gray-800 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r px-6 py-6 transform transition-transform duration-300 ease-in-out z-40
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static md:flex md:flex-col`}
      >
        <div className="font-bold text-xl text-orange-600 mb-8">
          My Account
        </div>

        <nav className="flex-1 space-y-2">
          <NavLinkItem to="/dashboard" icon={<LayoutDashboard />} onClick={() => setIsOpen(false)}>
            Dashboard
          </NavLinkItem>

          <NavLinkItem to="/dashboard/products" icon={<ShoppingBag />} onClick={() => setIsOpen(false)}>
            Products
          </NavLinkItem>

          <NavLinkItem to="/dashboard/cart" icon={<ShoppingCart />} onClick={() => setIsOpen(false)}>
            Cart
          </NavLinkItem>

          <NavLinkItem to="/dashboard/orders" icon={<CreditCard />} onClick={() => setIsOpen(false)}>
            Orders
          </NavLinkItem>

          <NavLinkItem to="/dashboard/account" icon={<User />} onClick={() => setIsOpen(false)}>
            Account
          </NavLinkItem>

          <NavLinkItem to="/dashboard/addresses" icon={<MapPin />} onClick={() => setIsOpen(false)}>
            Addresses
          </NavLinkItem>

          <NavLinkItem to="/dashboard/logout" icon={<LogOut />} onClick={() => setIsOpen(false)}>
            Sign out
          </NavLinkItem>
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-25 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 w-full px-3 pt-24 pb-8 md:px-8 md:py-8">
        <Outlet />
      </main>
    </div>
  );
};

const NavLinkItem = ({ to, icon, children, onClick }) => (
  <NavLink
    to={to}
    end
    onClick={onClick}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-3 rounded-lg font-medium ${
        isActive
          ? 'bg-orange-100 text-orange-700'
          : 'text-gray-600 hover:bg-orange-50'
      }`
    }
  >
    {icon}
    {children}
  </NavLink>
);

export default DashboardLayout;
