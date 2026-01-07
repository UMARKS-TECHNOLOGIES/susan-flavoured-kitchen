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
}) {
  return (
    <div className="hidden lg:flex justify-between items-center">
      {/* Logo */}
      <NavLogo />

      {/* Navigation */}
      <NavigationLinks
        navLinks={linkData}
        setOpenDropdown={setOpenDropdown}
        openDropdown={openDropdown}
        catLoading={catLoading}
        catError={catError}
      />
      {/* Right Icons */}
      <NavRightIcon
        setShowUserMenu={setShowUserMenu}
        showUserMenu={showUserMenu}
        totalItems={totalItems}
      />
    </div>
  );
}
