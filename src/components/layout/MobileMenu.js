import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';

export default function MobileMenu({
  navLinks,
  openDropdown,
  setOpenDropdown,
  setIsMobileMenuOpen,
}) {
  return (
    <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-6 flex flex-col gap-4 h-screen overflow-y-auto pb-20">
      {navLinks.map(link => (
        <div key={link.name} className="border-b border-gray-100 pb-2">
          {link.dropdown ? (
            <div>
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === link.name ? null : link.name)
                }
                className="flex justify-between items-center w-full text-lg font-medium text-gray-800"
              >
                {link.name}
                <MdKeyboardArrowDown
                  className={`transition-transform duration-200 ${
                    openDropdown === link.name ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openDropdown === link.name && (
                <div className="pl-4 mt-2 flex flex-col gap-2">
                  {link.dropdown.map(item => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-700 block py-1"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              to={link.href || link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-800 block py-2"
            >
              {link.name}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
