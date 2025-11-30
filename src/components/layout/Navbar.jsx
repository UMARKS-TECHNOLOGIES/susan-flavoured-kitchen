import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.jpeg";
import {
  MdOutlineSearch,
  MdKeyboardArrowDown,
  MdMenu,
  MdClose,
} from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { GiShoppingCart } from "react-icons/gi";

import { useCart } from "../../store/useCart";

const Navbar = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Menu",
      dropdown: [
        { name: "Breakfast", path: "/menu" },
        { name: "Lunch", path: "/menu/lunch" },
        { name: "Dinner", path: "/menu/dinner" },
      ],
      href: "/menu",
    },
    {
      name: "Event Catering",
      href: "/event",
    },
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact-us",
    },
  ];

  return (
    <nav className="bg-[#ffffff] fixed top-0 left-0 w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto w-[95%] lg:w-[85%] py-4">
        {/* Desktop View */}
        <div className="hidden lg:flex justify-between items-center">
          <div className="">
            <img src={Logo} alt="" className="w-13" />
          </div>
          <div className="flex items-center justify-center text-center">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name} className="relative">
                  <button
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === link.name ? null : link.name
                      )
                    }
                    className={`px-4 py-2 font-medium hover:text-orange-600 focus:outline-none flex items-center gap-1 ${
                      openDropdown === link.name
                        ? "text-orange-600"
                        : "text-[#343333]"
                    }`}
                  >
                    {link.name}
                    <MdKeyboardArrowDown
                      className={`text-lg transition-transform duration-200 ${
                        openDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openDropdown === link.name && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50 border border-gray-100">
                      {link.dropdown.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.path}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                        >
                          {item.name}
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
                      ? "text-orange-400 mx-4 font-medium"
                      : "text-[#343333] hover:text-[#00004d] px-5 py-2 text-medium font-medium"
                  }
                >
                  {link.name}
                </NavLink>
              )
            )}
          </div>

          <div className="flex items-center justify-center space-x-4 ">
            <div className="">
              <Link to="/menu">
                <MdOutlineSearch className="text-2xl" />
              </Link>
            </div>
            <div className="">
              <Link to={"/login"}>
                <BsPerson className="text-2xl" />
              </Link>
            </div>
            <div className="relative">
              <Link to={"/cart"}>
                <GiShoppingCart className="text-2xl" />
              </Link>
              {totalItems > 0 && (
                <span className="bg-orange-600 w-5 h-5 text-xs font-medium flex items-center justify-center absolute rounded-full -top-2 -right-2 text-white">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="flex lg:hidden justify-between items-center">
          {/* Logo Left */}
          <Link to="/">
            <img src={Logo} alt="Logo" className="w-10" />
          </Link>

          {/* Right Icons: Cart & Hamburger */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <Link to={"/cart"}>
                <GiShoppingCart className="text-2xl text-gray-700" />
              </Link>
              {totalItems > 0 && (
                <span className="bg-orange-600 w-4 h-4 text-[10px] font-medium flex items-center justify-center absolute rounded-full -top-1 -right-1 text-white">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-3xl text-gray-700 focus:outline-none"
            >
              {isMobileMenuOpen ? <MdClose /> : <MdMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-6 flex flex-col gap-4 h-screen overflow-y-auto pb-20">
            {navLinks.map((link) => (
              <div key={link.name} className="border-b border-gray-100 pb-2">
                {link.dropdown ? (
                  <div>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === link.name ? null : link.name
                        )
                      }
                      className="flex justify-between items-center w-full text-lg font-medium text-gray-800"
                    >
                      {link.name}
                      <MdKeyboardArrowDown
                        className={`transition-transform duration-200 ${
                          openDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === link.name && (
                      <div className="pl-4 mt-2 flex flex-col gap-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-gray-600 hover:text-orange-600"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-lg font-medium text-gray-800 hover:text-orange-600"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/menu"
              className="flex items-center gap-2 text-lg font-medium text-gray-800 border-b border-gray-100 pb-2"
            >
              <MdOutlineSearch className="text-2xl" /> Search
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
