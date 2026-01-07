import { MdKeyboardArrowDown } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function NavigationLinks({
  navLinks,
  setOpenDropdown,
  openDropdown,
  catLoading,
  catError,
}) {
  return (
    <div className="flex items-center">
      {navLinks.map(link =>
        link.dropdown ? (
          <div key={link.name} className="relative">
            <button
              onClick={() =>
                setOpenDropdown(openDropdown === link.name ? null : link.name)
              }
              className={`px-4 py-2 font-medium flex items-center gap-1 hover:text-orange-600 ${
                openDropdown === link.name
                  ? 'text-orange-600'
                  : 'text-[#343333]'
              }`}
            >
              {link.name}
              <MdKeyboardArrowDown
                className={`transition-transform ${
                  openDropdown === link.name ? 'rotate-180' : ''
                }`}
              />
            </button>

            {openDropdown === link.name && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-md shadow-lg py-2 border border-gray-100 z-50">
                {catLoading && (
                  <div className="px-4 py-2 text-sm text-gray-400">
                    Loading menu…
                  </div>
                )}

                {!catLoading && catError && (
                  <div className="px-4 py-2 text-sm text-red-500">
                    Menu unavailable
                  </div>
                )}

                {!catLoading &&
                  !catError &&
                  link.dropdown.map(category => (
                    <NavLink
                      key={category}
                      to={`/menu?category=${encodeURIComponent(category)}`}
                      onClick={() => setOpenDropdown(null)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                    >
                      {category}
                    </NavLink>
                  ))}
              </div>
            )}
          </div>
        ) : (
          <NavLink
            key={link.name}
            to={link.href}
            className={({ isActive }) =>
              isActive
                ? 'text-orange-400 mx-4 font-medium'
                : 'text-[#343333] hover:text-[#00004d] px-5 py-2 font-medium'
            }
          >
            {link.name}
          </NavLink>
        )
      )}
    </div>
  );
}
