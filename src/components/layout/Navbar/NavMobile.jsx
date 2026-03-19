import { Link } from 'react-router-dom';
import Logo from '../../../assets/Logo.jpeg';
import { IoCart, IoPerson } from 'react-icons/io5';
import { MdClose, MdMenu } from 'react-icons/md';

export function NavMobile({
  user,
  totalItems,
  setIsMobileMenuOpen,
  isMobileMenuOpen,
}) {
  return (
    <div className="flex lg:hidden justify-between items-center px-2">
      <Link to="/" className="shrink-0">
        <img src={Logo} alt="Logo" className="w-10 h-10 rounded-full object-cover" />
      </Link>

      <div className="flex items-center gap-4">
        <Link to="/cart" className="relative">
          <IoCart className="text-2xl text-gray-700" />
          {totalItems > 0 && (
            <span className="bg-orange-600 w-4 h-4 text-[10px] absolute -top-1 -right-1 text-white rounded-full flex items-center justify-center pointer-events-none">
              {totalItems > 99 ? '99+' : totalItems}
            </span>
          )}
        </Link>

        {/* Profile Link: dashboard if logged in, else login */}
        <Link to={user ? (user.role === 'admin' ? '/admin' : '/dashboard') : '/login'}>
          <IoPerson className="text-2xl text-gray-700" />
        </Link>

        <button 
          onClick={() => setIsMobileMenuOpen(v => !v)}
          className="p-1 text-gray-700 hover:text-orange-600 transition-colors"
        >
          {isMobileMenuOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
        </button>
      </div>
    </div>
  );
}
