import { NavLink, Outlet } from 'react-router-dom';
import {
  LayoutDashboard,
  ShoppingBag,
  ShoppingCart,
  CreditCard,
  User,
  MapPin,
  LogOut
} from 'lucide-react';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex bg-[#fffcfa]">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r hidden md:flex flex-col">
        <div className="px-6 py-6 font-bold text-xl text-orange-600">
          My Account
        </div>

        <nav className="flex-1 px-4 space-y-2">
          <NavLinkItem to="/dashboard" icon={<LayoutDashboard />}>
            Dashboard
          </NavLinkItem>

          <NavLinkItem to="/dashboard/products" icon={<ShoppingBag />}>
            Products
          </NavLinkItem>

          <NavLinkItem to="/dashboard/cart" icon={<ShoppingCart />}>
            Cart
          </NavLinkItem>

          <NavLinkItem to="/dashboard/orders" icon={<CreditCard />}>
            Orders
          </NavLinkItem>

          <NavLinkItem to="/dashboard/account" icon={<User />}>
            Account
          </NavLinkItem>

          <NavLinkItem to="/dashboard/addresses" icon={<MapPin />}>
            Addresses
          </NavLinkItem>

          <NavLinkItem to="/dashboard/logout" icon={<LogOut />}>
          Sign out
          </NavLinkItem>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 md:p-10">
        <Outlet />
      </main>
    </div>
  );
};

const NavLinkItem = ({ to, icon, children }) => (
  <NavLink
    to={to}
    end
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
