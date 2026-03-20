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
    <div className="hidden lg:flex justify-between items-center">
      {/* Left and Middle Group */}
      <div className="flex items-center gap-20">
        {/* Logo */}
        <NavLogo />

        {/* Navigation */}
        <NavigationLinks
          navLinks={linkData}
          setOpenDropdown={setOpenDropdown}
          openDropdown={openDropdown}
          catLoading={catLoading}
          catError={catError}
          onCategorySelect={onCategorySelect}
        />
      </div>

      {/* Right Icons */}
      <NavRightIcon
        setShowUserMenu={setShowUserMenu}
        showUserMenu={showUserMenu}
        totalItems={totalItems}
        categories={categories}
      />
    </div>
  );
}
