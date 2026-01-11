import React from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from 'react-icons/md';

export function NavMobileDropdown({
  navLinks,
  setOpenDropdown,
  openDropdown,
  catLoading,
  catError,
  setIsMobileMenuOpen,
}) {
  return (
    <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t py-4 px-6 flex flex-col gap-4 h-screen overflow-y-auto">
      {navLinks.map(link => (
        <div key={link.name} className="border-b pb-2">
          {link.dropdown ? (
            <>
              <button
                onClick={() =>
                  setOpenDropdown(openDropdown === link.name ? null : link.name)
                }
                className="flex justify-between w-full text-lg font-medium"
              >
                {link.name}
                <MdKeyboardArrowDown
                  className={`transition-transform ${
                    openDropdown === link.name ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openDropdown === link.name && (
                <div className="pl-4 mt-2 flex flex-col gap-2">
                  {catLoading && (
                    <span className="text-gray-400 text-sm">Loading menu…</span>
                  )}

                  {!catLoading && catError && (
                    <span className="text-red-500 text-sm">
                      Menu unavailable
                    </span>
                  )}

                  {!catLoading &&
                    !catError &&
                    link.dropdown.map(category => (
                      <Link
                        key={category}
                        to={`/menu?category=${encodeURIComponent(category)}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-gray-600 hover:text-orange-600"
                      >
                        {category}
                      </Link>
                    ))}
                </div>
              )}
            </>
          ) : (
            <Link
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium"
            >
              {link.name}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
