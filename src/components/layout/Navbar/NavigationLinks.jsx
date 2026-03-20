import { MdKeyboardArrowDown } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

export default function NavigationLinks({
  navLinks,
  setOpenDropdown,
  openDropdown,
  catLoading,
  catError,
  onCategorySelect,
}) {
  return (
    <div className="flex items-center justify-center gap-2">
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
                {/* Loading */}
                {catLoading && (
                  <div className="p-3 space-y-2">
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="h-4 w-28 bg-gray-200 rounded-md animate-pulse"
                      />
                    ))}
                  </div>
                )}

                {/* Error */}
                {!catLoading && catError && (
                  <div className="px-4 py-3 text-sm text-gray-500 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-orange-500" />
                    Menu unavailable
                  </div>
                )}

                {!catLoading &&
                  !catError &&
                  link.dropdown.map(category => (
                    <button
                      key={category._id}
                      onClick={() => {
                        onCategorySelect(category);
                        setOpenDropdown(null);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                    >
                      {category.name}
                    </button>
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
                ? 'text-orange-400 font-medium px-2 py-2'
                : 'text-[#343333] hover:text-[#00004d] font-medium px-2 py-2'
            }
          >
            {link.name}
          </NavLink>
        )
      )}
    </div>
  );
}
