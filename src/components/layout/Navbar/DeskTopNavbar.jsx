import NavLogo from './Logo';
import NavigationLinks from './NavigationLinks';
import { NavRightIcon } from './NavRightIcon';

export function DeskTopNavBar({
  linkData,
  setOpenDropdown,
  openDropdown,
  catLoading,
  catError,
  setShowUserMenu,
  showUserMenu,
  totalItems,
  onCategorySelect,
  categories,
}) {
  return (
    <div className="hidden lg:flex items-center w-full">
      {/* Logo Area (Pushes center) */}
      <div className="flex-1">
        <NavLogo />
      </div>

      {/* Navigation (Always Centered) */}
      <div className="shrink-0 px-6">
        <NavigationLinks
          navLinks={linkData}
          setOpenDropdown={setOpenDropdown}
          openDropdown={openDropdown}
          catLoading={catLoading}
          catError={catError}
          onCategorySelect={onCategorySelect}
        />
      </div>

      {/* Right Icons Area (Pushes center) */}
      <div className="flex-1 flex justify-end">
        <NavRightIcon
          setShowUserMenu={setShowUserMenu}
          showUserMenu={showUserMenu}
          totalItems={totalItems}
          categories={categories}
        />
      </div>
    </div>
  );
}
