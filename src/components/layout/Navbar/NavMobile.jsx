import { Link } from 'react-router-dom';
import Logo from '../../../assets/Logo.jpeg';
import { IoCart, IoPerson } from 'react-icons/io5';
import { MdClose, MdMenu } from 'react-icons/md';

export function NavMobile({
  totalItems,
  setIsMobileMenuOpen,
  isMobileMenuOpen,
}) {
  return (
    <div className="flex lg:hidden justify-between items-center">
      <Link to="/">
        <img src={Logo} alt="Logo" className="w-10" />
      </Link>

      <div className="flex items-center gap-4">
        <Link to="/cart" className="relative">
          <IoCart className="text-2xl" />
          {totalItems > 0 && (
            <span className="bg-orange-600 w-4 h-4 text-[10px] absolute -top-1 -right-1 text-white rounded-full flex items-center justify-center">
              {totalItems > 99 ? '99+' : totalItems}
            </span>
          )}
        </Link>

        <Link to="/login">
          <IoPerson className="text-2xl" />
        </Link>

        <button onClick={() => setIsMobileMenuOpen(v => !v)}>
          {isMobileMenuOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
        </button>
      </div>
    </div>
  );
}
